const amenityIcons: Record<string, string> = {
  Wifi: "📶",
  Cocina: "🍳",
  Kitchen: "🍳",
  Washer: "🧺",
  "Air conditioning": "❄️",
  "Dedicated workspace": "💻",
  Balcony: "🪴",
  Heating: "🔥",
  Crib: "🛏️",
  Patio: "🌿",
  "Sea view": "🌊",
  "Coffee maker": "☕",
  Lockbox: "🔐",
  Chimenea: "🔥",
  Parking: "🚗",
  Calefacción: "🌡️",
  Piscina: "🏊",
  "Aire acondicionado": "❄️",
};

type AmenitiesGridProps = {
  items: string[];
};

const AmenitiesGrid = ({ items }: AmenitiesGridProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#1f1b18]">Amenities</h2>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-[22px] border border-[#dddddd] bg-white p-4">
            <span className="text-lg">{amenityIcons[item] ?? "•"}</span>
            <span className="text-sm font-medium text-[#1f1b18]">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesGrid;