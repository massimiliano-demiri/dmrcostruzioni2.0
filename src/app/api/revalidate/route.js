import { revalidatePath } from "next/cache";

// Webhook chiamato da Contentful quando un progetto viene pubblicato,
// per aggiornare subito la pagina /projects senza attendere la
// rigenerazione automatica (ISR).
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.CONTENTFUL_REVALIDATE_SECRET || secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return Response.json({ error: "Token non valido." }, { status: 401 });
  }

  revalidatePath("/projects");
  revalidatePath("/");

  return Response.json({ revalidated: true, now: Date.now() });
}
