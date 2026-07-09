export type Stay = {
  slug: string;
  id: string;
  city: string;
  country: string;
  title: string;
  tagline: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  beds: number;
  baths: number;
  host: string;
  hostYears: number;
  superhost: boolean;
  location: string;
  distance: string;
  dates: string;
  category: string;
  gradient: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  description: string;
};

export const categories = [
  "Playa",
  "Mansiones",
  "Cabañas",
  "Diseño",
  "Campo",
];

export const stays: Stay[] = [
  {
    slug: "loft-lisboa-river",
    id: "loft-lisboa-river",
    city: "Lisbon",
    country: "Portugal",
    title: "Warm loft with river light and quiet corners",
    tagline: "Architect studio near Alfama",
    type: "Entire loft",
    price: 142,
    rating: 4.92,
    reviews: 128,
    guests: 2,
    beds: 1,
    baths: 1,
    host: "Marta",
    hostYears: 6,
    superhost: true,
    location: "Alfama, Lisbon",
    distance: "8 min to tram",
    dates: "Oct 14 - 19",
    category: "Diseño",
    gradient: "from-[#db735c] via-[#efc2aa] to-[#f7efe7]",
    gallery: ["Sun room", "Kitchen nook", "Reading corner"],
    highlights: [
      "Fast Wi-Fi for focused workdays",
      "Walkable food scene and miradouros",
      "Self check-in after 3 PM",
    ],
    amenities: ["Wifi", "Kitchen", "Washer", "Air conditioning", "Dedicated workspace"],
    description:
      "A calm Lisbon loft with soft daylight, oak details, and enough separation to work in the morning and explore the city later.",
  },
  {
    slug: "casa-menta-barcelona",
    id: "casa-menta-barcelona",
    city: "Barcelona",
    country: "Spain",
    title: "Color-rich apartment close to small cafes",
    tagline: "Sunny stay in Gracia",
    type: "Entire rental unit",
    price: 186,
    rating: 4.88,
    reviews: 94,
    guests: 4,
    beds: 2,
    baths: 1,
    host: "Jordi",
    hostYears: 4,
    superhost: false,
    location: "Gracia, Barcelona",
    distance: "12 min to metro",
    dates: "Oct 18 - 23",
    category: "Mansiones",
    gradient: "from-[#456b59] via-[#9fb6a9] to-[#eff5ef]",
    gallery: ["Living room", "Balcony", "Bedroom"],
    highlights: [
      "Balcony breakfast spot",
      "Strong transit access",
      "Flexible self check-in",
    ],
    amenities: ["Wifi", "Balcony", "Kitchen", "Heating", "Crib"],
    description:
      "A bright apartment for travelers who want local cafes, a walkable neighborhood, and a place that feels styled but easy to live in.",
  },
  {
    slug: "studio-marseille-port",
    id: "studio-marseille-port",
    city: "Marseille",
    country: "France",
    title: "Compact studio with terrace over the port",
    tagline: "Harbor stay for long weekends",
    type: "Entire studio",
    price: 121,
    rating: 4.8,
    reviews: 73,
    guests: 2,
    beds: 1,
    baths: 1,
    host: "Lea",
    hostYears: 8,
    superhost: true,
    location: "Le Panier, Marseille",
    distance: "5 min to waterfront",
    dates: "Nov 2 - 6",
    category: "Playa",
    gradient: "from-[#567ea6] via-[#b3d1eb] to-[#f5fbff]",
    gallery: ["Terrace", "Dining nook", "Bed"],
    highlights: [
      "Terrace with sunset view",
      "Close to ferry terminals",
      "Ideal for hand luggage trips",
    ],
    amenities: ["Wifi", "Patio", "Sea view", "Coffee maker", "Lockbox"],
    description:
      "This compact studio is designed around the terrace, giving couples a simple home base for food, ferries, and evening views.",
  },
  {
    slug: "cabana-bosque-andorra",
    id: "cabana-bosque-andorra",
    city: "Canillo",
    country: "Andorra",
    title: "Cabana de madera entre pinos y nieve",
    tagline: "Retiro tranquilo en la montaña",
    type: "Cabana completa",
    price: 164,
    rating: 4.95,
    reviews: 61,
    guests: 3,
    beds: 2,
    baths: 1,
    host: "Nora",
    hostYears: 5,
    superhost: true,
    location: "Canillo, Andorra",
    distance: "15 min a pistas",
    dates: "Dic 5 - 9",
    category: "Cabañas",
    gradient: "from-[#5f4a3b] via-[#b89b84] to-[#f4ede7]",
    gallery: ["Fachada", "Sala con chimenea", "Dormitorio"],
    highlights: [
      "Chimenea y vistas al bosque",
      "Ideal para escapadas de invierno",
      "Llegada autónoma",
    ],
    amenities: ["Wifi", "Chimenea", "Cocina", "Parking", "Calefacción"],
    description:
      "Una cabana acogedora y silenciosa pensada para descansar, cocinar sin prisa y salir a caminar entre pinos.",
  },
  {
    slug: "casa-campo-sevilla",
    id: "casa-campo-sevilla",
    city: "Seville",
    country: "Spain",
    title: "Casa de campo con patio largo y piscina",
    tagline: "Escapada luminosa a las afueras",
    type: "Casa completa",
    price: 208,
    rating: 4.9,
    reviews: 84,
    guests: 6,
    beds: 3,
    baths: 2,
    host: "Lucia",
    hostYears: 7,
    superhost: false,
    location: "Carmona, Sevilla",
    distance: "25 min al centro",
    dates: "Sep 20 - 25",
    category: "Campo",
    gradient: "from-[#8d6e43] via-[#d9c39d] to-[#f7f0e2]",
    gallery: ["Patio", "Piscina", "Cocina"],
    highlights: [
      "Piscina privada",
      "Mesa exterior para grupos",
      "Buena base para coche",
    ],
    amenities: ["Wifi", "Piscina", "Cocina", "Parking", "Aire acondicionado"],
    description:
      "Una casa amplia para desconectar del ritmo urbano y pasar varios días con familia o amigos en un entorno calmado.",
  },
];

export function getFeaturedStays() {
  return stays.slice(0, 2);
}

export function getCatalogStays() {
  return stays;
}

export function getStayBySlug(slug: string) {
  return stays.find((stay) => stay.slug === slug);
}

export function getStayById(id: string) {
  return stays.find((stay) => stay.id === id);
}