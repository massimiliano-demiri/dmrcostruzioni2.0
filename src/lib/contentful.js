// Client Contentful per la galleria "Lavori realizzati".
// Se le variabili d'ambiente non sono configurate il sito funziona comunque,
// mostrando solo le foto statiche già presenti in /public/immagini.
import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

export const isContentfulConfigured = Boolean(spaceId && accessToken);

const client = isContentfulConfigured
  ? createClient({ space: spaceId, accessToken, environment })
  : null;

/**
 * Recupera i progetti pubblicati dal content type "progetto".
 * Ritorna un array (eventualmente vuoto) e non lancia mai eccezioni,
 * così un errore di configurazione non blocca il rendering della pagina.
 */
export async function getContentfulProjects() {
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "progetto",
      order: "-fields.data,-sys.createdAt",
      limit: 200,
    });

    return entries.items
      .filter((item) => item.fields?.titolo)
      .map((item) => {
        const images = (item.fields.immagini || [])
          .map((asset) => asset?.fields?.file)
          .filter(Boolean)
          .map((file) => ({
            url: file.url?.startsWith("//") ? `https:${file.url}` : file.url,
            width: file.details?.image?.width,
            height: file.details?.image?.height,
          }));

        return {
          id: item.sys.id,
          title: item.fields.titolo,
          category: item.fields.categoria,
          description: item.fields.descrizione || "",
          location: item.fields.luogo || "",
          images,
        };
      });
  } catch (error) {
    console.error("Contentful: impossibile recuperare i progetti.", error);
    return [];
  }
}
