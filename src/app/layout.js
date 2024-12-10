import localFont from "next/font/local";
import "./globals.css";

// Importa la favicon
import favicon from "../../public/immagini/favicon-32x32.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "DMR Costruzioni - Impresa Edile a Terni | Costruzioni e Ristrutturazioni",
  description:
    "DMR Costruzioni è un'impresa edile con sede a Terni, specializzata in costruzioni, ristrutturazioni e opere in cartongesso. Scopri i nostri servizi di alta qualità.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        {/* Metadati SEO principali */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DMR Costruzioni" />
        <meta
          name="keywords"
          content="impresa edile Terni, costruzioni Terni, ristrutturazioni Terni, opere cartongesso Terni, edilizia Terni, DMR Costruzioni"
        />

        {/* Importa la favicon */}
        <link rel="icon" href={favicon.src} />

        {/* Informazioni aggiuntive */}
        <meta name="geo.region" content="IT-TR" />
        <meta name="geo.placename" content="Terni" />
        <meta name="geo.position" content="42.563616;12.643246" />
        <meta name="ICBM" content="42.563616, 12.643246" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
