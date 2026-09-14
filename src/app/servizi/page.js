import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Servizi",
  description:
    "Opere murarie, rifacimento tetti, pavimenti e rivestimenti, cartongesso, impermeabilizzazione e impiantistica: i servizi di DMR Costruzioni a Terni.",
  alternates: { canonical: "/servizi" },
};

const process = [
  {
    step: "1",
    title: "Sopralluogo e preventivo",
    text: "Valutiamo il cantiere e le tue esigenze, per un preventivo chiaro e senza sorprese.",
  },
  {
    step: "2",
    title: "Pianificazione",
    text: "Definiamo tempi, materiali e fasi di lavoro insieme a te, prima di iniziare i lavori.",
  },
  {
    step: "3",
    title: "Realizzazione e consegna",
    text: "Eseguiamo i lavori con squadre specializzate, garantendo qualità e rispetto dei tempi concordati.",
  },
];

export default function Servizi() {
  return (
    <div>
      <header className="relative bg-[url('/immagini/gru.jpg')] bg-cover bg-center text-white min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">I Nostri Servizi</h1>
          <p className="text-lg sm:text-2xl mt-4 max-w-2xl mx-auto text-white/90">
            Professionalità, cura del dettaglio e squadre specializzate per
            ogni tipo di lavorazione edile.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid md:grid-cols-2 gap-10 items-center scroll-mt-24 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={`/immagini/${service.folder}/1.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Reveal delay={100}>
                <div className="w-14 h-14 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center mb-5">
                  <ServiceIcon slug={service.slug} className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-ink-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-ink-500">
                      <span className="mt-1 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <CtaButton href="/projects" variant="outline">
                  Vedi i lavori realizzati
                </CtaButton>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Come lavoriamo"
            title="Il nostro processo"
            subtitle="Un percorso semplice e trasparente, dal primo contatto alla consegna del cantiere."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-500 text-ink-700 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-ink-600">{item.title}</h3>
                <p className="text-sm text-ink-400 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-[#F5F5F5] shadow-card rounded-2xl p-8 sm:p-12">
          <p className="text-lg text-ink-500 mb-6 text-center">
            Sei interessato a uno dei nostri servizi? Compila il modulo:
            ti ricontatteremo per una consulenza gratuita e senza impegno.
          </p>
          <ContactForm title="" />
        </div>
      </section>
    </div>
  );
}

