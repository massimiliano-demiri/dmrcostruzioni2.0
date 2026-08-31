import { readdir } from "node:fs/promises";
import path from "node:path";
import { services } from "@/lib/site-data";
import { getContentfulProjects } from "@/lib/contentful";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/**
 * Legge dinamicamente le foto presenti in public/immagini/<folder>,
 * così eventuali foto aggiunte, rimosse o non numerate in sequenza
 * vengono gestite correttamente senza rompere la galleria.
 */
async function getLocalImages(folder) {
  const dir = path.join(process.cwd(), "public", "immagini", folder);

  try {
    const files = await readdir(dir);
    return files
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/immagini/${folder}/${file}`);
  } catch (error) {
    console.error(`Impossibile leggere la cartella immagini/${folder}:`, error);
    return [];
  }
}

/**
 * Costruisce le gallerie per la pagina "Lavori realizzati", una per
 * categoria di servizio. Ogni galleria unisce le foto caricate dal
 * titolare su Contentful con lo storico di foto statiche in /public.
 */
export async function getProjectGalleries() {
  const contentfulProjects = await getContentfulProjects();

  return Promise.all(
    services.map(async (service) => {
      const fromContentful = contentfulProjects
        .filter((project) => project.category === service.slug)
        .flatMap((project) =>
          project.images.map((image, index) => ({
            src: image.url,
            alt: `${project.title} - foto ${index + 1}`,
            source: "contentful",
          }))
        );

      const localPaths = await getLocalImages(service.folder);
      const fromLocal = localPaths.map((src) => ({
        src,
        alt: `${service.title} - realizzazione DMR Costruzioni`,
        source: "local",
      }));

      return {
        slug: service.slug,
        title: service.title,
        short: service.short,
        images: [...fromContentful, ...fromLocal],
      };
    })
  );
}

