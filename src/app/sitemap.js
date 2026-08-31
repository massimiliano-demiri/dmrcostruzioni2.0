import { siteUrl } from "@/lib/site-data";

export default function sitemap() {
  const routes = ["", "/servizi", "/projects", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
