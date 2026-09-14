import SectionHeading from "@/components/SectionHeading";
import { serviceAreas } from "@/lib/site-data";

export default function ServiceAreas() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading
          eyebrow="Zona operativa"
          title="Lavoriamo a Terni e in tutta la provincia"
          subtitle="Interveniamo a Terni città e nei comuni limitrofi. Se non sei sicuro che la tua zona sia coperta, chiedicelo pure: rispondiamo sempre."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.map((town) => (
            <span
              key={town}
              className="px-4 py-2 rounded-full bg-[#F5F5F5] text-ink-600 text-sm font-semibold"
            >
              {town}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
