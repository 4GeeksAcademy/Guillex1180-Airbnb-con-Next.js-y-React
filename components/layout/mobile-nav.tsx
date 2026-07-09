import Link from "next/link";

const items = [
  { href: "/", label: "Explore" },
  { href: "/catalog", label: "Catalog" },
  { href: "/rooms/loft-lisboa-river", label: "Detail" },
];

const MobileNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-between rounded-full border border-[#dddddd] bg-white/90 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-[#6a6a6a] transition hover:bg-[#ffe3e8] hover:text-[#e31c5f]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { MobileNav };