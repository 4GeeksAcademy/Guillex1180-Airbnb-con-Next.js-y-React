import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
};

const CtaLink = ({
  href,
  children,
  variant = "solid",
}: CtaLinkProps) => {
  const baseClasses =
    "flex h-12 w-full items-center justify-center rounded-full px-5 text-base font-medium transition-colors md:w-[158px]";

  const variantClasses =
    variant === "solid"
      ? "bg-[#1f1b18] text-white hover:bg-[#383838]"
      : "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04]";

  return (
    <a
      className={`${baseClasses} ${variantClasses}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export { CtaLink };