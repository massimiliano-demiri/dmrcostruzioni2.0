"use client";
import Navbar from "../app/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "../app/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    satisfaction: 0,
  });

  const reviews = [
    {
      name: "Giovanni Rossi",
      text: "DMR Costruzioni ha superato ogni mia aspettativa. Professionalità e qualità al top!",
      image: "/reviews/review1.jpg",
    },
    {
      name: "Maria Bianchi",
      text: "Grazie a loro, la mia casa è diventata un sogno. Consigliatissimi!",
      image: "/reviews/review2.jpg",
    },
    {
      name: "Luca Verdi",
      text: "Servizio impeccabile, sempre pronti ad ascoltare e realizzare ciò che desideravo.",
      image: "/reviews/review3.jpg",
    },
  ];

  const certifications = [
    "/certifications/cert1.jpg",
    "/certifications/cert2.jpg",
    "/certifications/cert3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        years: Math.min(prev.years + 1, 20),
        projects: Math.min(prev.projects + 5, 300),
        satisfaction: Math.min(prev.satisfaction + 2, 100),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <header className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            DMR Costruzioni: Il partner giusto per i tuoi progetti edili
          </h1>
          <p className="text-lg sm:text-2xl mb-6">
            Qualità, professionalità e passione per realizzare i tuoi sogni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/servizi"
              className="bg-[#96CA36] px-6 py-3 text-black font-semibold rounded-full hover:bg-green-700 transition"
            >
              Scopri i nostri servizi
            </a>

            <a
              href="#contact-form"
              className="border-2 border-[#96CA36] px-6 py-3 text-[#96CA36] font-semibold rounded-full hover:bg-[#96CA36] hover:text-black transition"
            >
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8">
          Perché scegliere DMR Costruzioni?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#96CA36]">
              {stats.years}+
            </h3>
            <p className="text-lg text-[#3B383F] mt-2">Anni di esperienza</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#96CA36]">
              {stats.projects}
            </h3>
            <p className="text-lg text-[#3B383F] mt-2">Progetti completati</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-[#96CA36]">
              {stats.satisfaction}%
            </h3>
            <p className="text-lg text-[#3B383F] mt-2">Clienti soddisfatti</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#F5F5F5]">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Cosa dicono i nostri clienti
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="italic text-sm text-[#3B383F]">"{review.text}"</p>
                <p className="text-sm font-bold text-[#96CA36] mt-4">
                  - {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[#3B383F] mb-8 text-center">
          Le nostre certificazioni
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop
          autoplay={{ delay: 3000 }}
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="p-4">
                <Image
                  src={cert}
                  alt={`Certificazione ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        id="services"
        className="py-20 px-8 bg-[#F5F5F5] grid grid-cols-1 sm:grid-cols-3 gap-8"
      >
        <div className="group text-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <Image
            src="/icons/build.svg"
            alt="Costruzioni"
            width={80}
            height={80}
            className="mx-auto mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 className="text-xl font-bold mb-2">Costruzioni</h3>
          <p className="text-sm text-[#3B383F]">
            Realizziamo edifici residenziali, commerciali e industriali con
            materiali di alta qualità.
          </p>
        </div>
        <div className="group text-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <Image
            src="/icons/renovation.svg"
            alt="Ristrutturazioni"
            width={80}
            height={80}
            className="mx-auto mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 className="text-xl font-bold mb-2">Ristrutturazioni</h3>
          <p className="text-sm text-[#3B383F]">
            Rinnoviamo e trasformiamo spazi per renderli moderni e funzionali.
          </p>
        </div>
        <div className="group text-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <Image
            src="/icons/sustainability.svg"
            alt="Sostenibilità"
            width={80}
            height={80}
            className="mx-auto mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 className="text-xl font-bold mb-2">Sostenibilità</h3>
          <p className="text-sm text-[#3B383F]">
            Costruzioni responsabili, rispettose dell'ambiente e del futuro.
          </p>
        </div>
      </section>

      <section id="contact-form" className="py-16 px-8 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#3B383F] mb-6 text-center">
            Contattaci ora per un preventivo gratuito
          </h2>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="grid gap-4">
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
                placeholder="Descrivi il tuo progetto (es. tipo di lavoro, tempi)"
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36]"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-[#96CA36] text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
              >
                Invia la tua richiesta
              </button>
            </form>
          ) : (
            <p className="text-center text-lg text-green-600">
              Grazie! Ti contatteremo presto per discutere il tuo progetto.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
