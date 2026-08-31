import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CertificationsSlider from "@/components/CertificationsSlider";
import CtaButton from "@/components/CtaButton";
import { stats, values } from "@/lib/site-data";

export const metadata = {
  title: "Chi Siamo",
  description:
    "DMR Costruzioni: impresa edile a Terni con oltre 20 anni di esperienza in costruzioni, ristrutturazioni e opere edili di ogni tipo.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <header className="relative bg-[url('/immagini/car1.jpg')] bg-cover bg-center text-white min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Chi Siamo</h1>
          <p className="text-lg sm:text-2xl mt-4 max-w-2xl mx-auto text-white/90">
            Un&apos;impresa edile radicata a Terni, con la passione per il
            lavoro fatto bene.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="La nostra storia"
              title="Costruiamo a Terni da oltre 20 anni"
            />
            <p className="text-ink-500 mb-4">
              DMR Costruzioni nasce a Terni dalla volontà di offrire un
              servizio edile completo e affidabile: dalle nuove costruzioni
              alle ristrutturazioni, dalle opere murarie alle finiture più
              curate.
            </p>
            <p className="text-ink-500 mb-4">
              Negli anni abbiamo seguito centinaia di cantieri tra abitazioni
              private, condomini e attività commerciali, costruendo un
              rapporto di fiducia con i nostri clienti basato su
              trasparenza, puntualità e qualità del lavoro svolto.
            </p>
            <p className="text-ink-500">
              Oggi seguiamo ogni progetto con un referente unico, squadre
              specializzate per ogni lavorazione e un controllo costante
              della qualità in ogni fase del cantiere.
            </p>
          </div>
          <div className="relative h-80 sm:h-[28rem] rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/immagini/gru.jpg"
              alt="Cantiere DMR Costruzioni a Terni"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-extrabold text-brand-600">
                {stat.value}
              </span>
              <span className="text-lg text-ink-500 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="I nostri valori"
            title="Perché scegliere DMR Costruzioni"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#F5F5F5] rounded-xl p-6 text-center shadow-md">
                <h3 className="text-lg font-bold text-ink-600 mb-2">{value.title}</h3>
                <p className="text-sm text-ink-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Garanzia di qualità"
            title="Certificazioni e attestati"
            subtitle="Operiamo nel rispetto delle normative di sicurezza e qualità del settore edile."
          />
          <CertificationsSlider />
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-600 mb-4">
          Vuoi conoscerci meglio?
        </h2>
        <p className="text-ink-400 mb-8 max-w-xl mx-auto">
          Contattaci per raccontarci il tuo progetto: siamo pronti ad
          ascoltarti.
        </p>
        <CtaButton href="/contact">Contattaci</CtaButton>
      </section>
    </div>
  );
}
