import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    console.log("Ricevuto:", req.body); // Per verificare il payload ricevuto

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Metodo non consentito" });
    }

    const { name, email, phone, message } = req.body;

    // Verifica se i dati sono validi
    if (!name || !email || !phone || !message) {
      console.error("Dati mancanti:", { name, email, phone, message });
      return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
    }

    // Configurazione del trasportatore
    const transporter = nodemailer.createTransport({
      host: "smtps.aruba.it",
      port: 465,
      secure: true,
      auth: {
        user: "demiri@dmrcostruzioni.it",
        pass: "Namma2024!", // Cambia questa password per sicurezza
      },
    });

    // Invio email
    const info = await transporter.sendMail({
      from: `"DMR Costruzioni" <demiri@dmrcostruzioni.it>`,
      to: "demiri@dmrcostruzioni.it",
      subject: "Nuova Richiesta Preventivo",
      text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMessaggio: ${message}`,
    });

    console.log("Email inviata con successo:", info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);
    res.status(500).json({ error: "Errore interno del server." });
  }
}
