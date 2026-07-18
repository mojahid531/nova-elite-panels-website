/**
 * Design reminder: compact architectural navigation—ivory glass, black typography, and restrained gold accents.
 */

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#applications", label: "Applications" },
  { href: "#features", label: "Why NOVA" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/10 bg-[#f6f2e9]/95 text-[#171717] shadow-[0_12px_40px_rgba(0,0,0,.08)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/75 to-transparent text-white"
      }`}
    >
      <div className="container flex h-[78px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="NOVA Elite Panels home">
          <img
            src="./assets/nova-emblem.png"
            alt="NOVA Elite Panels emblem"
            className="h-11 w-11 object-contain transition-transform duration-200 group-hover:scale-[1.04]"
          />
          <span className="leading-none">
            <span className="block font-display text-[1.1rem] font-semibold tracking-[0.12em]">NOVA</span>
            <span className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.28em] ${scrolled || open ? "text-[#8d6f37]" : "text-[#dfc68e]"}`}>
              ELITE PANELS LLC
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-bold uppercase tracking-[0.2em] opacity-80 transition-all hover:text-[#b99653] hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+14437799936"
          className={`hidden items-center gap-2 border px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] transition-all active:scale-[.97] sm:flex ${
            scrolled
              ? "border-[#b99653] bg-[#b99653] text-black hover:bg-[#d1b373]"
              : "border-white/45 bg-black/15 text-white backdrop-blur hover:border-[#d7bd83] hover:text-[#f0dba8]"
          }`}
        >
          <Phone className="h-3.5 w-3.5" /> Call NOVA
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-current/25 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-80 border-t border-black/10" : "max-h-0"}`}>
        <nav className="container grid py-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.18em] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

