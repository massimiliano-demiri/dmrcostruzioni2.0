import { GitHub, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#96CA36] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Informazioni */}
        <div>
          <h3 className="text-lg font-bold mb-4">DMR Costruzioni</h3>
          <p className="text-sm">
            Qualità, professionalità e passione per costruire il futuro.
          </p>
          <p className="text-sm mt-2">
            Via del Sersimone 3/F, Terni (TR), Italia
          </p>
          <p className="text-sm">Email: dmrcostruzioni@legalmail.it</p>
          <p className="text-sm">Telefono: +39 0744 123456</p>
          <p className="text-sm">Partita IVA: 01539760551</p>
          <p className="text-sm">Codice Fiscale: 01539760551</p>
        </div>

        {/* Link utili */}
        <div>
          <h3 className="text-lg font-bold mb-4">Link utili</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#services"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Servizi Gratuiti
              </a>
            </li>
            <li>
              <a
                href="#listino"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Listino
              </a>
            </li>
            <li>
              <a
                href="#api"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                API
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#assistance"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Assistenza
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                REGISTRATI E RISPARMIA
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Seguici</h3>
          <div className="flex flex-col space-y-4">
            <a
              href="https://github.com/massimiliano-demiri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <GitHub className="mr-2" />
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <Facebook className="mr-2" />
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <Instagram className="mr-2" />
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <LinkedIn className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} DMR Costruzioni. Tutti i diritti riservati.{" "}
        <br />
        Realizzato da{" "}
        <a
          href="https://github.com/massimiliano-demiri"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200"
        >
          Massimiliano Demiri
        </a>
      </div>
    </footer>
  );
}
