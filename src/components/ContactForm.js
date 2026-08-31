"use client";
import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "", company: "" };

export default function ContactForm({ title = "Richiedi un preventivo gratuito" }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Campo nascosto "company": se compilato, si tratta di un bot.
    if (formData.company) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setFormData(initialState);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Si è verificato un problema. Riprova più tardi.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Errore di rete. Riprova più tardi.");
    }
  };

  if (status === "success") {
    return (
      <p className="text-center text-lg text-brand-700 font-semibold py-8">
        Grazie! La tua richiesta è stata inviata: ti contatteremo al più presto.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {title && (
        <h3 className="text-2xl font-bold text-ink-600 mb-2">{title}</h3>
      )}

      {/* Honeypot anti-spam, nascosto agli utenti reali */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="text"
        name="name"
        placeholder="Nome e cognome"
        value={formData.name}
        onChange={handleChange}
        className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-ink-700"
        required
        maxLength={100}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-ink-700"
          required
          maxLength={150}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Numero di telefono"
          value={formData.phone}
          onChange={handleChange}
          className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-ink-700"
          required
          maxLength={30}
        />
      </div>
      <textarea
        name="message"
        placeholder="Descrivi il tuo progetto (tipo di lavoro, tempistiche, ecc.)"
        value={formData.message}
        onChange={handleChange}
        className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none text-ink-700"
        rows={4}
        required
        maxLength={2000}
      />

      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-brand-500 text-ink-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-brand-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Invio in corso..." : "Invia la tua richiesta"}
      </button>
    </form>
  );
}
