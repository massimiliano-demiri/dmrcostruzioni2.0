"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import BuildIcon from "@mui/icons-material/Build";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EcoIcon from "@mui/icons-material/Eco";
import { Avatar } from "@mui/material";

import constructionImg from "../../../public/immagini/operecartongesso/1.jpg";
import renovationImg from "../../../public/immagini/operecartongesso/2.jpg";
import sustainabilityImg from "../../../public/immagini/operecartongesso/3.jpg";

import heroImg from "../../../public/immagini/operecartongesso/4.jpg";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { GiRecycle } from "react-icons/gi"; // Sostituisci EcoIcon

export default function Servizi() {
  const services = [
    {
      title: "Costruzioni",
      description:
        "Realizziamo edifici residenziali, commerciali e industriali con materiali di alta qualità e tecnologie all'avanguardia.",
      image: constructionImg,
      icon: <BuildIcon style={{ fontSize: 40, color: "#96CA36" }} />,
    },
    {
      title: "Ristrutturazioni",
      description:
        "Rinnoviamo e trasformiamo spazi per renderli moderni, funzionali e accoglienti, rispettando le tue esigenze specifiche.",
      image: renovationImg,
      icon: (
        <HomeRepairServiceIcon style={{ fontSize: 40, color: "#96CA36" }} />
      ),
    },
    {
      title: "Sostenibilità",
      description:
        "Progettiamo costruzioni responsabili e rispettose dell'ambiente, garantendo un futuro migliore.",
      image: sustainabilityImg,
      icon: <GiRecycle style={{ fontSize: 40, color: "#96CA36" }} />,
    },
  ];

  const testimonials = [
    {
      name: "Giovanni Rossi",
      feedback:
        "Grazie a DMR Costruzioni, il nostro progetto è diventato realtà. Professionalità impeccabile!",
    },
    {
      name: "Maria Bianchi",
      feedback: "Ristrutturazione perfetta! Non potevo chiedere di meglio.",
    },
    {
      name: "Luca Verdi",
      feedback:
        "Servizio eccellente, sempre disponibili e precisi. Altamente consigliati!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center text-white min-h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-4xl sm:text-6xl font-bold">I Nostri Servizi</h1>
          <p className="text-lg sm:text-2xl mt-4">
            Professionalità, innovazione e attenzione ai dettagli per ogni
            progetto.
          </p>
        </div>
      </header>

      {/* Services Section */}
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
                  {service.icon}
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

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Testimonianze dei nostri clienti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] shadow-md rounded-lg p-6 text-center"
            >
              <Avatar
                alt={testimonial.name}
                sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
              >
                {testimonial.name.charAt(0)}
              </Avatar>
              <p className="text-sm italic text-[#3B383F]">
                {testimonial.feedback}
              </p>
              <h4 className="text-lg font-bold text-[#96CA36] mt-4">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
