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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Configurazione SMTP mancante: impossibile inviare l'email.");
    return Response.json(
      { error: "Servizio email non configurato. Contattaci telefonicamente." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Sito ${company.name}" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || company.email,
      replyTo: email,
      subject: `Nuova richiesta di preventivo da ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Telefono: ${phone}`,
        "",
        "Messaggio:",
        message,
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    return Response.json(
      { error: "Impossibile inviare la richiesta. Riprova più tardi." },
      { status: 500 }
    );
  }
}
