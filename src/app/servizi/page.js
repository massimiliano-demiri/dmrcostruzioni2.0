"use client";
import Navbar from "../navbar";
import Image from "next/image";
import Footer from "../footer";
import { useState } from "react";

export default function Servizi() {
  const services = [
    {
      title: "Costruzioni",
      description:
        "Realizziamo edifici residenziali, commerciali e industriali con materiali di alta qualità e tecnologie all'avanguardia.",
      image: "/services/construction.jpg",
      icon: "/icons/build.svg",
    },
    {
      title: "Ristrutturazioni",
      description:
        "Rinnoviamo e trasformiamo spazi per renderli moderni, funzionali e accoglienti, rispettando le tue esigenze specifiche.",
      image: "/services/renovation.jpg",
      icon: "/icons/renovation.svg",
    },
    {
      title: "Sostenibilità",
      description:
        "Progettiamo costruzioni responsabili e rispettose dell'ambiente, garantendo un futuro migliore.",
      image: "/services/sustainability.jpg",
      icon: "/icons/sustainability.svg",
    },
  ];

  const testimonials = [
    {
      name: "Giovanni Rossi",
      feedback:
        "Grazie a DMR Costruzioni, il nostro progetto è diventato realtà. Professionalità impeccabile!",
      image: "/testimonials/testimonial1.jpg",
    },
    {
      name: "Maria Bianchi",
      feedback: "Ristrutturazione perfetta! Non potevo chiedere di meglio.",
      image: "/testimonials/testimonial2.jpg",
    },
    {
      name: "Luca Verdi",
      feedback:
        "Servizio eccellente, sempre disponibili e precisi. Altamente consigliati!",
      image: "/testimonials/testimonial3.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="relative bg-[url('/hero-services.jpg')] bg-cover bg-center text-white min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-4xl sm:text-6xl font-bold">I Nostri Servizi</h1>
          <p className="text-lg sm:text-2xl mt-4">
            Professionalità, innovazione e attenzione ai dettagli per ogni
            progetto.
          </p>
        </div>
      </header>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Scopri cosa possiamo fare per te
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title + " icon"}
                    width={40}
                    height={40}
                  />
                  <h3 className="text-xl font-bold text-[#3B383F]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-[#3B383F]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-[#F5F5F5]">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Il nostro processo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#96CA36] text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-[#3B383F]">Consulenza</h3>
            <p className="text-sm text-[#3B383F] mt-2">
              Analizziamo le tue esigenze e definiamo i tuoi obiettivi,
              garantendo un approccio personalizzato e professionale.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#96CA36] text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-[#3B383F]">Progettazione</h3>
            <p className="text-sm text-[#3B383F] mt-2">
              Creiamo progetti personalizzati, utilizzando tecnologie moderne e
              materiali di alta qualità.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#96CA36] text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-[#3B383F]">Realizzazione</h3>
            <p className="text-sm text-[#3B383F] mt-2">
              Diamo vita ai tuoi progetti con precisione e dedizione, garantendo
              tempi rapidi e qualità eccellente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Testimonianze dei nostri clienti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F5F5] shadow-md rounded-lg p-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-sm italic text-[#3B383F]">
                {testimonial.feedback}
              </p>
              <h4 className="text-lg font-bold text-[#96CA36] mt-4 text-center">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Richiedi maggiori informazioni
        </h2>
        <div className="max-w-4xl mx-auto bg-[#F5F5F5] shadow-md rounded-lg p-8">
          <p className="text-lg text-[#3B383F] mb-6">
            Sei interessato ai nostri servizi? Compila il modulo qui sotto e il
            nostro team ti contatterà per offrirti una consulenza gratuita e
            senza impegno.
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36]"
              required
            />
            <textarea
              placeholder="Descrivi il tuo progetto o le tue esigenze"
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36]"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-[#96CA36] text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
