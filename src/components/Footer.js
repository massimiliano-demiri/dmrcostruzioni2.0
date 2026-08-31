import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { company, navLinks, services } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-ink-600 text-white pt-16 pb-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-extrabold mb-4">{company.name}</h3>
          <p className="text-sm text-ink-100/80 mb-4">
            Qualità, professionalità e passione per costruire il futuro a
            Terni e provincia.
          </p>
          <p className="text-sm text-ink-100/80">
            {company.address}, {company.cap} {company.city} ({company.province})
          </p>
          <p className="text-sm text-ink-100/80 mt-1">P.IVA: {company.piva}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Link utili</h3>
          <ul className="text-sm space-y-2 text-ink-100/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">I nostri servizi</h3>
          <ul className="text-sm space-y-2 text-ink-100/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href="/servizi" className="hover:text-brand-400 transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contatti</h3>
          <ul className="text-sm space-y-2 text-ink-100/80">
            <li>
              <a href={company.phoneHref} className="hover:text-brand-400 transition-colors">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-brand-400 transition-colors">
                {company.email}
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-500 hover:text-ink-700 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href={company.social.facebook}
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-500 hover:text-ink-700 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href={company.social.instagram}
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-500 hover:text-ink-700 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-ink-100/60">
        © {new Date().getFullYear()} {company.name}. Tutti i diritti riservati. P.IVA {company.piva}
      </div>
    </footer>
  );
}
