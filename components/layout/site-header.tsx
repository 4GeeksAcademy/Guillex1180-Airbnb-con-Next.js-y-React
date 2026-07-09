import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Stays" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#dddddd] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1880px] items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff385c] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,56,92,0.35)]">
            A
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff385c]">
              Airbnb Study
            </p>
            <p className="text-sm text-[#6a6a6a]">UI architecture clone</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#6a6a6a] transition hover:bg-[#f7f7f7] hover:text-[#1f1b18]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rooms/loft-lisboa-river"
            className="rounded-full bg-[#1f1b18] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#38312b]"
          >
            Sample room
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { SiteHeader };