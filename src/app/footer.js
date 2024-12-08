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
          <p className="text-sm mt-2">Via Roma 123, Terni (TR), Italia</p>
          <p className="text-sm">Email: info@dmrcostruzioni.it</p>
          <p className="text-sm">Telefono: +39 0744 123456</p>
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
                Servizi
              </a>
            </li>
            <li>
              <a
                href="#contact-form"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Contattaci
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Termini e condizioni
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                Informativa sulla privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Seguici</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 mr-2"
              />
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} DMR Costruzioni. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
