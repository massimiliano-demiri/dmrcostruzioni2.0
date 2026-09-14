import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { company } from "@/lib/site-data";

// Barra CTA fissa solo su mobile: sul desktop ci sono già i CTA in navbar.
export default function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2">
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 font-semibold text-ink-600 border-r border-gray-200"
        >
          <FaPhone className="w-4 h-4" />
          Chiama ora
        </a>
        <Link
          href="/preventivo-gratuito"
          className="flex items-center justify-center gap-2 py-3.5 font-semibold text-ink-700 bg-brand-500"
        >
          Preventivo gratuito
        </Link>
      </div>
    </div>
  );
}
