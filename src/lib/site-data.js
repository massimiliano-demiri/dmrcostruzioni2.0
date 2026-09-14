// Fonte unica dei contenuti/dati aziendali riutilizzati in tutto il sito.

export const company = {
  name: "DMR Costruzioni",
  legalName: "DMR Costruzioni",
  address: "Via del Sersimone 3/F",
  city: "Terni",
  province: "TR",
  cap: "05100",
  region: "Umbria",
  country: "Italia",
  phoneDisplay: "+39 339 843 8160",
  phoneHref: "tel:+393398438160",
  whatsappHref: "https://wa.me/393398438160",
  email: "demiri@dmrcostruzioni.it",
  piva: "01539760551",
  cf: "01539760551",
  lat: 42.563616,
  lng: 12.643246,
  hours: [
    { day: "Lunedì – Venerdì", time: "8:00 – 13:00 / 14:30 – 18:30" },
    { day: "Sabato", time: "8:00 – 12:00" },
    { day: "Domenica", time: "Chiuso" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
};

export const siteUrl = "https://www.dmrcostruzioni.it";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/projects", label: "Lavori realizzati" },
  { href: "/about", label: "Chi siamo" },
  { href: "/contact", label: "Contatti" },
];

// Le "slug" delle categorie DEVONO coincidere con il valore del campo
// "categoria" configurato su Contentful, altrimenti le foto caricate
// dal titolare non verranno associate al servizio corretto.
export const services = [
  {
    slug: "opere-murarie",
    title: "Opere Murarie",
    short:
      "Costruzioni e ristrutturazioni murarie complete, dalle fondamenta alle finiture.",
    description:
      "Realizziamo nuove costruzioni e ristrutturazioni complete curando ogni fase del cantiere: strutture, murature, finiture. Un unico interlocutore per un lavoro fatto bene, dall'inizio alla consegna.",
    bullets: [
      "Nuove costruzioni civili e industriali",
      "Ristrutturazioni e ampliamenti",
      "Demolizioni e ricostruzioni",
      "Opere in cemento armato",
    ],
    folder: "operemurarie",
  },
  {
    slug: "rifacimento-tetti",
    title: "Rifacimento Tetti",
    short:
      "Manutenzione, coibentazione e rifacimento completo di coperture e tetti.",
    description:
      "Interveniamo su tetti e coperture danneggiate o datate con soluzioni durature: sostituzione del manto, coibentazione termica e messa in sicurezza della struttura portante.",
    bullets: [
      "Rifacimento manto di copertura",
      "Coibentazione termica del tetto",
      "Impermeabilizzazione delle coperture",
      "Smaltimento e bonifica coperture in eternit",
    ],
    folder: "rifacimentotetti",
  },
  {
    slug: "pavimenti-rivestimenti",
    title: "Pavimenti e Rivestimenti",
    short:
      "Posa in opera di pavimenti, piastrelle e rivestimenti per interni ed esterni.",
    description:
      "Curiamo la posa di pavimenti e rivestimenti con precisione millimetrica, per ambienti interni ed esterni, garantendo un risultato estetico e funzionale nel tempo.",
    bullets: [
      "Pavimentazioni in gres e ceramica",
      "Rivestimenti bagni e cucine",
      "Pavimenti per esterni e resina",
      "Massetti e sottofondi",
    ],
    folder: "pavimentoerivestimenti",
  },
  {
    slug: "cartongesso",
    title: "Opere in Cartongesso",
    short: "Controsoffitti, pareti divisorie e soluzioni in cartongesso su misura.",
    description:
      "Progettiamo e realizziamo soluzioni in cartongesso su misura per ridefinire gli spazi, migliorare l'isolamento acustico e termico e dare carattere agli ambienti.",
    bullets: [
      "Controsoffitti e velette",
      "Pareti divisorie e contropareti",
      "Isolamento acustico e termico",
      "Nicchie e soluzioni d'arredo",
    ],
    folder: "operecartongesso",
  },
  {
    slug: "impermeabilizzazione",
    title: "Impermeabilizzazione",
    short: "Soluzioni professionali contro infiltrazioni e umidità in ogni ambiente.",
    description:
      "Risolviamo in modo definitivo i problemi di infiltrazione e umidità con guaine, membrane e trattamenti professionali su terrazzi, balconi e murature.",
    bullets: [
      "Impermeabilizzazione terrazzi e balconi",
      "Trattamento contro infiltrazioni",
      "Guaine e membrane bituminose",
      "Risanamento murature umide",
    ],
    folder: "impermeabilizzazione",
  },
  {
    slug: "impiantistica",
    title: "Impiantistica",
    short: "Realizzazione e adeguamento di impianti idraulici ed elettrici a norma.",
    description:
      "Realizziamo e adeguiamo impianti idraulici ed elettrici nel rispetto delle normative vigenti, con manutenzione e assistenza continuativa nel tempo.",
    bullets: [
      "Impianti idraulici e termosanitari",
      "Impianti elettrici civili",
      "Adeguamenti normativi",
      "Manutenzione e assistenza",
    ],
    folder: "impiantistica",
  },
];

export const stats = [
  { value: "20+", label: "Anni di esperienza" },
  { value: "300+", label: "Progetti completati" },
  { value: "100%", label: "Clienti soddisfatti" },
];

export const values = [
  {
    title: "Qualità",
    description:
      "Materiali selezionati e lavorazioni curate nei minimi dettagli, in ogni fase del cantiere.",
  },
  {
    title: "Affidabilità",
    description:
      "Rispettiamo tempi e accordi presi, con un referente unico per tutta la durata dei lavori.",
  },
  {
    title: "Sicurezza",
    description:
      "Operiamo nel rispetto delle normative di sicurezza sul lavoro a tutela di squadre e clienti.",
  },
  {
    title: "Trasparenza",
    description:
      "Preventivi chiari e comunicazione costante, senza sorprese durante il cantiere.",
  },
];

export const testimonials = [
  {
    name: "Giovanni R.",
    location: "Terni",
    text: "DMR Costruzioni ha superato ogni mia aspettativa. Professionalità e qualità al top!",
  },
  {
    name: "Maria B.",
    location: "Narni",
    text: "Grazie a loro, la mia casa è diventata come la desideravo. Squadra seria e puntuale.",
  },
  {
    name: "Luca V.",
    location: "Terni",
    text: "Servizio impeccabile, sempre pronti ad ascoltare e a realizzare ciò che desideravo.",
  },
];

export const certifications = [
  "/immagini/1.png",
  "/immagini/2.png",
  "/immagini/3.png",
  "/immagini/4.png",
  "/immagini/5.png",
];

// Comuni serviti: usati sia nella sezione "Zona operativa" sia nei dati
// strutturati SEO (areaServed) in layout.js.
export const serviceAreas = [
  "Terni",
  "Narni",
  "Amelia",
  "San Gemini",
  "Acquasparta",
  "Stroncone",
  "Orvieto",
  "Spoleto",
];

// Domande frequenti mostrate in home e usate per il markup FAQPage:
// intercettano le ricerche informative su "impresa edile Terni".
export const faqs = [
  {
    question: "Quanto costa una ristrutturazione a Terni?",
    answer:
      "Il costo dipende da metratura, stato dell'immobile e finiture scelte. Dopo un sopralluogo gratuito ti forniamo un preventivo dettagliato e senza sorprese, in genere entro pochi giorni.",
  },
  {
    question: "In quanto tempo potete iniziare i lavori?",
    answer:
      "Nella maggior parte dei casi organizziamo il sopralluogo entro pochi giorni dalla richiesta e concordiamo insieme la data di inizio cantiere in base alla disponibilità delle squadre.",
  },
  {
    question: "Lavorate solo a Terni o anche nei comuni vicini?",
    answer:
      "Operiamo a Terni città e in tutta la provincia: Narni, Amelia, San Gemini, Acquasparta, Stroncone, Orvieto, Spoleto e zone limitrofe.",
  },
  {
    question: "Il preventivo è davvero gratuito e senza impegno?",
    answer:
      "Sì: sopralluogo e preventivo sono sempre gratuiti e senza alcun impegno. Ti richiamiamo per capire l'esigenza e poi ti inviamo un preventivo scritto e dettagliato.",
  },
];
