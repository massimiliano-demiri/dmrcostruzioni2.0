"use client";
import { useMemo, useState } from "react";
import Image from "next/image";

export default function ProjectsGallery({ galleries }) {
  const [activeSlug, setActiveSlug] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const tabs = useMemo(
    () => [{ slug: "all", title: "Tutti i lavori" }, ...galleries.map((g) => ({ slug: g.slug, title: g.title }))],
    [galleries]
  );

  const items = useMemo(() => {
    const source =
      activeSlug === "all"
        ? galleries.flatMap((g) => g.images.map((img) => ({ ...img, category: g.title })))
        : (galleries.find((g) => g.slug === activeSlug)?.images || []).map((img) => ({
            ...img,
            category: galleries.find((g) => g.slug === activeSlug)?.title,
          }));
    return source;
  }, [galleries, activeSlug]);

  const openLightbox = (index) => setLightbox({ images: items, index });
  const closeLightbox = () => setLightbox(null);
  const showRelative = (delta) => {
    setLightbox((current) => {
      if (!current) return current;
      const total = current.images.length;
      const nextIndex = (current.index + delta + total) % total;
      return { ...current, index: nextIndex };
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => setActiveSlug(tab.slug)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              activeSlug === tab.slug
                ? "bg-brand-500 border-brand-500 text-ink-700"
                : "bg-white border-gray-300 text-ink-600 hover:border-brand-500"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-center text-ink-400">
          Nessuna foto disponibile per questa categoria al momento.
        </p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {items.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              onClick={() => openLightbox(index)}
              className="block w-full break-inside-avoid relative overflow-hidden rounded-xl shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized={image.src.startsWith("http")}
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Chiudi"
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-brand-400"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showRelative(-1);
            }}
            aria-label="Foto precedente"
            className="absolute left-4 sm:left-8 text-white text-4xl hover:text-brand-400"
          >
            &#8249;
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              fill
              className="object-contain"
              unoptimized={lightbox.images[lightbox.index].src.startsWith("http")}
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showRelative(1);
            }}
            aria-label="Foto successiva"
            className="absolute right-4 sm:right-8 text-white text-4xl hover:text-brand-400"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
