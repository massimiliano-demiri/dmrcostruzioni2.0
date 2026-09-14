import nodemailer from "nodemailer";
import { company } from "@/lib/site-data";

const MAX_LENGTHS = { name: 100, email: 150, phone: 30, message: 2000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  // Honeypot: se il campo "company" è compilato si tratta di un bot.
  if (sanitize(body.company)) {
    return Response.json({ success: true });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const message = sanitize(body.message);

  if (!name || !email || !phone || !message) {
    return Response.json({ error: "Compila tutti i campi obbligatori." }, { status: 400 });
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    phone.length > MAX_LENGTHS.phone ||
    message.length > MAX_LENGTHS.message
  ) {
    return Response.json({ error: "Uno o più campi superano la lunghezza massima." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Inserisci un indirizzo email valido." }, { status: 400 });
  }

  const {
    RESEND_API_KEY,
    RESEND_FROM_EMAIL,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  const to = CONTACT_TO_EMAIL || company.email;
  const subject = `Nuova richiesta di preventivo da ${name}`;
  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phone}`,
    "",
    "Messaggio:",
    message,
  ].join("\n");

  // Provider primario: Resend (https://resend.com), basta una API key nel .env.
  if (RESEND_API_KEY) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: RESEND_FROM_EMAIL || "DMR Costruzioni <onboarding@resend.dev>",
          to,
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        console.error("Errore Resend:", errorBody);
        return Response.json(
          { error: "Impossibile inviare la richiesta. Riprova più tardi." },
          { status: 502 }
        );
      }

      return Response.json({ success: true });
    } catch (error) {
      console.error("Errore durante l'invio dell'email (Resend):", error);
      return Response.json(
        { error: "Impossibile inviare la richiesta. Riprova più tardi." },
        { status: 500 }
      );
    }
  }

  // Fallback: SMTP tradizionale via nodemailer, se configurato.
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Sito ${company.name}" <${SMTP_USER}>`,
        to,
        replyTo: email,
        subject,
        text,
      });

      return Response.json({ success: true });
    } catch (error) {
      console.error("Errore durante l'invio dell'email (SMTP):", error);
      return Response.json(
        { error: "Impossibile inviare la richiesta. Riprova più tardi." },
        { status: 500 }
      );
    }
  }

  console.error("Nessun provider email configurato (RESEND_API_KEY o SMTP_*).");
  return Response.json(
    { error: "Servizio email non configurato. Contattaci telefonicamente." },
    { status: 500 }
  );
}
