import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaPhone } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import ServiceAreas from "@/components/ServiceAreas";
import CertificationsSlider from "@/components/CertificationsSlider";
import ServiceIcon from "@/components/ServiceIcon";
import { company, services, stats, testimonials } from "@/lib/site-data";

export const metadata = {
  title: "Preventivo Gratuito",
  description:
    "Richiedi un preventivo gratuito e senza impegno per il tuo progetto edile a Terni e provincia: costruzioni, ristrutturazioni, tetti, cartongesso e altro.",
  alternates: { canonical: "/preventivo-gratuito" },
};

const reasons = [
  "Sopralluogo e preventivo gratuiti, senza impegno",
  "Un referente unico per tutta la durata del cantiere",
  "Preventivo scritto e dettagliato, senza sorprese",
  "Oltre 20 anni di esperienza a Terni e provincia",
];

export default function PreventivoGratuito() {
  return (
    <div>
      <section className="relative bg-[url('/immagini/s1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-ink-700/85" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block bg-brand-500 text-ink-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Preventivo 100% gratuito
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
              Richiedi il tuo preventivo gratuito per il tuo progetto edile
            </h1>
            <p className="text-lg text-white/85 mb-8">
              Raccontaci cosa hai in mente: costruzione, ristrutturazione,
              tetto, cartongesso o qualsiasi altra opera. Ti ricontattiamo
              rapidamente con un preventivo chiaro e senza impegno.
            </p>
            <ul className="space-y-3 mb-8">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <FaCheck className="text-brand-400 w-4 h-4 mt-1 shrink-0" />
                  <span className="text-white/90">{reason}</span>
                </li>
              ))}
            </ul>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-400 transition-colors"
            >
              <FaPhone /> Oppure chiamaci subito al {company.phoneDisplay}
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
            <ContactForm title="Compila il modulo, ti ricontattiamo noi" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-brand-600">{stat.value}</span>
              <span className="text-lg text-ink-500 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-600 mb-8 text-center">
            Un preventivo gratuito per ognuno di questi lavori
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-ink-600">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-[#F5F5F5] rounded-xl p-6 shadow-md">
              <p className="text-ink-500 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-bold text-ink-600 text-sm">
                {testimonial.name} <span className="font-normal text-ink-400">— {testimonial.location}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServiceAreas />

      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-600 mb-8 text-center">
            Le nostre certificazioni
          </h2>
          <CertificationsSlider />
        </div>
      </section>

      <section className="py-16 px-6 bg-ink-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Pronto a iniziare il tuo progetto?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Compila il modulo qui sopra oppure chiamaci direttamente: siamo a
          tua disposizione.
        </p>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-3 bg-brand-500 text-ink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-600 transition-colors"
        >
          <FaPhone /> {company.phoneDisplay}
        </a>
      </section>
    </div>
  );
}
