import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company, siteUrl } from "@/lib/site-data";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "DMR Costruzioni - Impresa Edile a Terni",
    template: "%s | DMR Costruzioni",
  },
  description:
    "DMR Costruzioni è un'impresa edile con sede a Terni, specializzata in costruzioni, ristrutturazioni, rifacimento tetti, cartongesso e impiantistica.",
  keywords: [
    "impresa edile Terni",
    "costruzioni Terni",
    "ristrutturazioni Terni",
    "opere cartongesso Terni",
    "rifacimento tetti Terni",
    "edilizia Terni",
    "DMR Costruzioni",
  ],
  authors: [{ name: "DMR Costruzioni" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/immagini/favicon-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "DMR Costruzioni",
    title: "DMR Costruzioni - Impresa Edile a Terni",
    description:
      "Costruzioni, ristrutturazioni, rifacimento tetti, cartongesso e impiantistica a Terni e provincia.",
    images: ["/immagini/s3.jpg"],
  },
  other: {
    "geo.region": "IT-TR",
    "geo.placename": "Terni",
    "geo.position": `${company.lat};${company.lng}`,
    ICBM: `${company.lat}, ${company.lng}`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#96ca36",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  image: `${siteUrl}/immagini/s3.jpg`,
  telephone: company.phoneDisplay,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: company.city,
    addressRegion: company.province,
    postalCode: company.cap,
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.lat,
    longitude: company.lng,
  },
  url: siteUrl,
  areaServed: "Terni e provincia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

