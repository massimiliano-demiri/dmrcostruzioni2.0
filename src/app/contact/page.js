import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site-data";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

export const metadata = {
  title: "Contatti",
  description:
    "Contatta DMR Costruzioni: richiedi un preventivo gratuito per il tuo progetto edile a Terni e provincia.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${company.address}, ${company.cap} ${company.city} ${company.province}, Italia`
)}&output=embed`;

export default function ContactPage() {
  return (
    <div>
      <header className="relative bg-[url('/immagini/s5.jpg')] bg-cover bg-center text-white min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Contatti</h1>
          <p className="text-lg sm:text-2xl mt-4 max-w-2xl mx-auto text-white/90">
            Raccontaci il tuo progetto: ti risponderemo al più presto.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Parliamone"
              title="Richiedi un preventivo gratuito"
              subtitle="Compila il modulo con qualche dettaglio sul tuo progetto: ti ricontatteremo il prima possibile."
            />
            <div className="bg-[#F5F5F5] rounded-2xl shadow-card p-8">
              <ContactForm title="" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#F5F5F5] rounded-2xl shadow-card p-8 space-y-5">
              <div className="flex items-start gap-4">
                <FaLocationDot className="text-brand-600 w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-ink-600">Indirizzo</p>
                  <p className="text-ink-400 text-sm">
                    {company.address}, {company.cap} {company.city} ({company.province})
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-brand-600 w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-ink-600">Telefono</p>
                  <a href={company.phoneHref} className="text-ink-400 text-sm hover:text-brand-600">
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-brand-600 w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-ink-600">Email</p>
                  <a href={`mailto:${company.email}`} className="text-ink-400 text-sm hover:text-brand-600">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-brand-600 w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-ink-600 mb-1">Orari</p>
                  {company.hours.map((slot) => (
                    <p key={slot.day} className="text-ink-400 text-sm">
                      {slot.day}: {slot.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card h-72">
              <iframe
                title="Mappa DMR Costruzioni"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
