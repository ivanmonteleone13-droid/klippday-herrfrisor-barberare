export const business = {
  name: "Klippday Herrfrisör & Barberare",
  tagline: "Master barbers on Vaksalagatan",
  description: "Central barbershop with master barbers offering fades, classic cuts, and beard care.",
  category: "Hair Salon",
  address: {
    street: "Vaksalagatan 22C",
    postalCode: "753 31",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-14 70 00",
  phoneLink: "tel:+4618147000",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/klippday-herrfrisor-barberare-48268",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Klippday",
  rating: 4.8,
  reviewCount: 1702,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
  usps: [
    {
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos Klippday Herrfrisör & Barberare.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Vaksalagatan 22C i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "1702+ nöjda kunder enligt offentliga omdömen.",
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
      description: "Professionell herrklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skin-fade",
      name: "Skin fade",
      description: "Professionell skin fade med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-ggtrim",
      name: "Skäggtrim",
      description: "Professionell skäggtrim med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "studentklippning",
      name: "Studentklippning",
      description: "Professionell studentklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "barnklippning",
      name: "Barnklippning",
      description: "Professionell barnklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Klippday Herrfrisör & Barberare. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Klippday Herrfrisör & Barberare varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "barbershop Vaksalagatan",
    "herrfrisör Uppsala",
    "fade klippning Uppsala",
    "billig herrklippning",
  ],
  brandColors: {
    primary: "#1a1a2e",
    secondary: "#c9a227",
    accent: "#f5f0e8",
    dark: "#0f0f1a",
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
