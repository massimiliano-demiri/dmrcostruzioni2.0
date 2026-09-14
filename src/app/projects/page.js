import SectionHeading from "@/components/SectionHeading";
import ProjectsGallery from "@/components/ProjectsGallery";
import CtaButton from "@/components/CtaButton";
import { getProjectGalleries } from "@/lib/projects";

export const metadata = {
  title: "Lavori Realizzati",
  description:
    "La galleria fotografica dei lavori realizzati da DMR Costruzioni a Terni: opere murarie, tetti, pavimenti, cartongesso, impermeabilizzazioni e impianti.",
  alternates: { canonical: "/projects" },
};

// Rigenera la pagina periodicamente per mostrare le nuove foto
// caricate dal titolare su Contentful senza dover rifare il deploy.
export const revalidate = 3600;

export default async function ProjectsPage() {
  const galleries = await getProjectGalleries();

  return (
    <div>
      <header className="relative bg-[url('/immagini/s4.jpg')] bg-cover bg-center text-white min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Lavori Realizzati</h1>
          <p className="text-lg sm:text-2xl mt-4 max-w-2xl mx-auto text-white/90">
            Una selezione dei cantieri e delle opere realizzate a Terni e
            provincia.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sfoglia le nostre realizzazioni"
            subtitle="Filtra per categoria per scoprire i lavori più recenti."
          />
          <ProjectsGallery galleries={galleries} />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F5F5F5] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-600 mb-4">
          Hai un progetto in mente?
        </h2>
        <p className="text-ink-400 mb-8 max-w-xl mx-auto">
          Raccontaci la tua idea: ti aiutiamo a trasformarla in un cantiere
          concreto, con un preventivo gratuito.
        </p>
        <CtaButton href="/preventivo-gratuito">Richiedi un preventivo</CtaButton>
      </section>
    </div>
  );
}
