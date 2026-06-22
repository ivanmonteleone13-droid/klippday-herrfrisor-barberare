export const business = {
  name: "Klippday Herrfrisör & Barberare",
  tagline: "Master barbers on Vaksalagatan",
  description:
    "Varmt välkommen till KlippDay i Uppsala — professionell barbershop och herrfrisör med fokus på kvalitet, stil och service på Vaksalagatan 22C.",
  category: "Hair Salon",
  address: {
    street: "Vaksalagatan 22C",
    postalCode: "753 31",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-14 70 00",
  phoneLink: "tel:+4618147000",
  email: "uppsalaklippday@gmail.com" as string | null,
  emailLink: "mailto:uppsalaklippday@gmail.com" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.klippdayuppsala.se/" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: "https://instagram.com/klippday_guy" as string | null,
  owner: "Klippday",
  rating: 4.8,
  reviewCount: 1704,
  foundedYear: 2010,
  coordinates: { lat: 59.861, lng: 17.6439 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4.8 på Bokadirekt", icon: "star" },
    { label: "1704+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "⚡ Urban Barber", icon: "student" },
  ],
  usps: [
    {
      title: "Master barberare",
      description: "Erfarna barberare med fokus på fade, klassiska klippningar och skäggvård.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Vaksalagatan 22C i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "1704+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "herrklippning",
      name: "Herrklippning",
      icon: "✂️",
      description: "Professionell herrklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skin-fade",
      name: "Skin fade",
      icon: "💇",
      description: "Professionell skin fade med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-ggtrim",
      name: "Skäggtrim",
      icon: "⭐",
      description: "Professionell skäggtrim med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "studentklippning",
      name: "Studentklippning",
      icon: "🎯",
      description: "Professionell studentklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "barnklippning",
      name: "Barnklippning",
      icon: "✨",
      description: "Professionell barnklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Skin fade", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Styling", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Resultat", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Barberstol", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Jättebra klippning. Tack!",
      author: "Javier V.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
      rating: 5,
      date: "2026-06-22",
    },
    {
      text: "Lyhörd, kompetent och jätte bra service. Super nöjd med Robin.",
      author: "Ramin S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
      rating: 5,
      date: "2026-06-17",
    },
    {
      text: "Har klippt mig hos Robin i 2 år, kommer inte att byta! Once you go Robin you never go back!",
      author: "Colin D.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
      rating: 5,
      date: "2026-06-16",
    },
    {
      text: "Fint bemötande. Klipper med omsorg.",
      author: "Jannica S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
      rating: 5,
      date: "2026-06-15",
    },
  ],
  about: {
    headline: "Om Klippday Herrfrisör & Barberare",
    paragraphs: [
      "Vi på KlippDay Herrfrisering är specialister på herrfrisyrer, skägg, barbering och allt som hör till inom vårt yrke. Våra frisörer har lång erfarenhet av yrket och sätter alltid kunden i fokus — vi är oerhört måna om att du ska bli 100 % nöjd med ditt besök.",
      "Hos oss möts du av skickliga barberare som erbjuder allt från trendiga fades till traditionell herrklippning och professionell skäggvård. Centralt på Vaksalagatan 22C — boka enkelt online.",
    ],
  },
  faq: [
    {
      question: "Var ligger Klippday Herrfrisör & Barberare?",
      answer: "Vi finns på Vaksalagatan 22C, 753 31 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Klippday Herrfrisör & Barberare?",
      answer: "Boka via Bokadirekt eller ring 018-14 70 00.",
    },
    {
      question: "Vad säger kunder om Klippday Herrfrisör & Barberare?",
      answer: "Vi har 4.8 i snittbetyg baserat på 1704+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss för information om presentkort.",
    },
    {
      question: "Finns parkering nära?",
      answer: "Gatuparkering finns i närheten av Vaksalagatan 22C.",
    },
  ],
  seoKeywords: [
    "barbershop Vaksalagatan",
    "herrfrisör Uppsala",
    "fade klippning Uppsala",
    "billig herrklippning",
    "Klippday Herrfrisör & Barberare",
    "Uppsala urban_barber",
  ],
  brandColors: {
    primary: "#111827",
    secondary: "#F59E0B",
    accent: "#F3F4F6",
    dark: "#030712",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
