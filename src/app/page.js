"use client";
import Navbar from "../app/navbar";
import Image from "next/image";
import Footer from "../app/footer";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from "../../public/immagini/s1.jpg";
import review2 from "../../public/immagini/s1.jpg";
import review3 from "../../public/immagini/s1.jpg";
import cert1 from "../../public/immagini/1.png";
import cert2 from "../../public/immagini/2.png";
import cert3 from "../../public/immagini/3.png";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const title = document.querySelector("#form-title");
    let animationInterval = setInterval(() => {
      title.classList.toggle("animate-bounce");
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  const reviews = [
    {
      name: "Giovanni Rossi",
      text: "DMR Costruzioni ha superato ogni mia aspettativa. Professionalità e qualità al top!",
      image: review1,
    },
    {
      name: "Maria Bianchi",
      text: "Grazie a loro, la mia casa è diventata un sogno. Consigliatissimi!",
      image: review2,
    },
    {
      name: "Luca Verdi",
      text: "Servizio impeccabile, sempre pronti ad ascoltare e realizzare ciò che desideravo.",
      image: review3,
    },
  ];

  const certifications = [cert1, cert2, cert3];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        alert("Richiesta inviata con successo!");
      } else {
        const errorData = await response.json();
        alert(`Errore: ${errorData.error || "Si è verificato un problema."}`);
      }
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      alert("Errore di rete. Riprova più tardi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight mb-6">
            DMR Costruzioni
          </h1>
          <p className="text-2xl sm:text-3xl mb-8 leading-relaxed">
            Costruire è un'arte. Con noi, il tuo progetto diventa realtà.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/servizi"
              className="bg-[#96CA36] px-8 py-4 text-black font-semibold rounded-full hover:bg-green-700 transition"
            >
              Scopri i nostri servizi
            </a>
            <a
              href="#contact-form"
              className="border-2 border-[#96CA36] px-8 py-4 text-[#96CA36] font-semibold rounded-full hover:bg-[#96CA36] hover:text-black transition"
            >
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-20 px-8 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#3B383F] mb-6">
            Perché scegliere DMR Costruzioni?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Con decenni di esperienza, ci impegniamo a fornire soluzioni edili
            innovative e sostenibili per ogni esigenza.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-bold text-[#96CA36]">20+</h3>
              <p className="text-lg text-[#3B383F] mt-2">Anni di esperienza</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-bold text-[#96CA36]">300</h3>
              <p className="text-lg text-[#3B383F] mt-2">Progetti completati</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-bold text-[#96CA36]">100%</h3>
              <p className="text-lg text-[#3B383F] mt-2">Clienti soddisfatti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#3B383F] mb-8">
            Cosa dicono i nostri clienti
          </h2>
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 shadow-md rounded-lg">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-6"
                />
                <blockquote className="text-lg italic text-gray-700">
                  "{review.text}"
                </blockquote>
                <footer className="mt-4 text-[#96CA36] font-semibold">
                  - {review.name}
                </footer>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#3B383F] mb-6">
            Le nostre certificazioni
          </h2>
          <Slider {...sliderSettings}>
            {certifications.map((cert, index) => (
              <div key={index} className="p-4">
                <Image
                  src={cert}
                  alt={`Certificazione ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#1DA851] transition animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg p-12">
          <h2
            id="form-title"
            className="text-4xl font-extrabold text-[#3B383F] mb-6 text-center"
          >
            Contattaci ora per un preventivo gratuito
          </h2>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36] text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36] text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Numero di telefono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36] text-black"
                required
              />
              <textarea
                name="message"
                placeholder="Descrivi il tuo progetto (es. tipo di lavoro, tempi)"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#96CA36] text-black"
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
