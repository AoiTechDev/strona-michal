"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Droplets } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Oferta", href: "#produkty" },
  { label: "Automatyczne", href: "#automatyczne" },
  { label: "Ręczne", href: "#reczne" },
  { label: "Zastosowania", href: "#zastosowania" },
  { label: "Ochrona ludności", href: "#ochrona-ludnosci" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 xl:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image src="/favicon.ico" alt="Paczkowarka do wody" width={36} height={36} className="text-primary-foreground" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Paczkowarka do <span className="text-primary">wody</span>
          </span>
        </a>

        {/* Desktop navigation — visible from xl (1280px) */}
        <nav aria-label="Nawigacja główna" className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger — visible below xl */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground xl:hidden hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu overlay + panel */}
      <div
        className={`xl:hidden fixed inset-0 top-[57px] z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Panel */}
        <nav
          aria-label="Nawigacja mobilna"
          className={`relative bg-card border-t border-border shadow-xl transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-4"
            }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
