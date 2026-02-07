"use client";

import { useState } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Oferta", href: "#produkty" },
  { label: "Automatyczne", href: "#automatyczne" },
  { label: "Ręczne", href: "#reczne" },
  { label: "Zastosowania", href: "#zastosowania" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Paczkowarka do <span className="text-primary">wody</span>
          </span>
        </a>

        <nav aria-label="Nawigacja główna" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* <div className="hidden lg:block">
          <Button asChild>
            <a href="#kontakt">Skontaktuj się</a>
          </Button>
        </div> */}

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground lg:hidden hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otworz menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav aria-label="Nawigacja mobilna" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* <Button asChild className="mt-2">
              <a href="#kontakt" onClick={() => setMobileOpen(false)}>
                Skontaktuj się
              </a>
            </Button> */}
          </nav>
        </div>
      )}
    </header>
  );
}
