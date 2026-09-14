import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import CertificationsSlider from "@/components/CertificationsSlider";
import ContactForm from "@/components/ContactForm";
import ServiceAreas from "@/components/ServiceAreas";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services, stats, testimonials, faqs } from "@/lib/site-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: "DMR Costruzioni - Impresa Edile a Terni",
  description:
    "Impresa edile a Terni specializzata in costruzioni, ristrutturazioni, rifacimento tetti, cartongesso, pavimenti, impermeabilizzazioni e impiantistica.",
  alternates: { canonical: "/" },
};

const featuredProjects = [
  { src: "/immagini/operemurarie/1.jpg", alt: "Opera muraria realizzata da DMR Costruzioni" },
  { src: "/immagini/rifacimentotetti/1.jpg", alt: "Rifacimento tetto realizzato da DMR Costruzioni" },
  { src: "/immagini/pavimentoerivestimenti/1.jpg", alt: "Pavimento posato da DMR Costruzioni" },
  { src: "/immagini/operecartongesso/1.jpg", alt: "Opera in cartongesso realizzata da DMR Costruzioni" },
  { src: "/immagini/impermeabilizzazione/1.jpg", alt: "Impermeabilizzazione realizzata da DMR Costruzioni" },
  { src: "/immagini/operemurarie/5.jpg", alt: "Cantiere DMR Costruzioni" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <header className="relative bg-[url('/immagini/s3.jpg')] bg-cover bg-center text-white min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <span className="inline-block bg-brand-500 text-ink-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            Impresa edile a Terni
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Costruire è un&apos;arte.
            <br /> Con noi diventa realtà.
          </h1>
          <p className="text-lg sm:text-2xl mb-8 leading-relaxed text-white/90">
            Costruzioni, ristrutturazioni e opere edili chiavi in mano a Terni
            e provincia, dal preventivo alla consegna.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton href="/servizi">Scopri i nostri servizi</CtaButton>
            <CtaButton href="/preventivo-gratuito" variant="outline-light">
              Richiedi un preventivo
            </CtaButton>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-extrabold text-brand-600">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-lg text-ink-500 mt-2">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Servizi overview */}
      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Cosa facciamo"
            title="I nostri servizi"
            subtitle="Un'unica impresa per ogni fase del cantiere: dalle opere murarie alle finiture, con squadre specializzate per ogni lavorazione."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 100}>
                <Link
                  href="/servizi"
                  className="group bg-white rounded-xl shadow-md hover:shadow-card transition-shadow overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/immagini/${service.folder}/1.jpg`}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center mb-4">
                      <ServiceIcon slug={service.slug} />
                    </div>
                    <h3 className="text-xl font-bold text-ink-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-ink-400 flex-1">{service.short}</p>
                    <span className="mt-4 text-brand-600 font-semibold text-sm">
                      Scopri di più &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lavori realizzati preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Portfolio"
            title="Alcuni dei nostri lavori"
            subtitle="Una selezione dei cantieri realizzati a Terni e provincia."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.src} delay={(index % 3) * 100} className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <CtaButton href="/projects" variant="outline">
              Vedi tutti i lavori
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Certificazioni */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Garanzia di qualità"
            title="Le nostre certificazioni"
            subtitle="Operiamo nel rispetto delle normative del settore edile, a tutela dei nostri clienti e delle nostre squadre."
          />
          <CertificationsSlider />
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Parola ai clienti"
            title="Cosa dicono di noi"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100} className="bg-[#F5F5F5] rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-ink-700 font-bold flex items-center justify-center mb-4">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="text-ink-500 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-ink-600">
                  {testimonial.name} <span className="font-normal text-ink-400">— {testimonial.location}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* FAQ - intercetta le ricerche informative su impresa edile a Terni */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Domande frequenti"
            title="Impresa edile a Terni: le domande più comuni"
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 80}>
                <details className="group bg-[#F5F5F5] rounded-xl p-6 open:shadow-md">
                  <summary className="font-bold text-ink-600 cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.question}
                    <span className="text-brand-600 text-xl group-open:rotate-45 transition-transform shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-ink-400 mt-3">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto bg-white shadow-card rounded-2xl p-8 sm:p-12">
          <ContactForm title="Contattaci ora per un preventivo gratuito" />
        </div>
      </section>
    </>
  );
}

