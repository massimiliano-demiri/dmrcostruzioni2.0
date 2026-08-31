import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/lib/site-data";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
