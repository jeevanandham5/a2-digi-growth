import { useEffect, useState } from "react";
import { links, site } from "../site";
import { WhatsAppIcon } from "./Icons";

const nav = [
  ["#work", "Work"],
  ["#services", "Services"],
  ["#process", "How it works"],
  ["#about", "About"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-30 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container-site">
        <div className={`flex items-center justify-between gap-4 rounded-full border px-3 py-2 pl-4 transition-colors ${scrolled ? "border-line bg-night/70 backdrop-blur-xl" : "border-transparent"}`}>
          <a href="#top" className="flex items-center gap-3 font-display text-lg font-bold text-white no-underline" aria-label={`${site.brand}, back to top`}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-teal-deep font-extrabold tracking-tight text-marigold">A2</span>
            <span>Digi Growth</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-fog no-underline transition hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <a href={links.whatsapp} className="button !py-2.5 !px-4 text-[0.95rem]">
            <WhatsAppIcon className="h-[1.1em] w-[1.1em]" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
