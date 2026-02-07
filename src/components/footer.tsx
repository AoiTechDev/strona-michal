import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
          
            <Image src="/favicon.ico" alt="Paczkowarka do wody" width={36} height={36} className="text-primary-foreground" />
            <span className="text-sm font-bold text-card-foreground">
              Paczkowarka do <span className="text-primary">wody</span>
            </span>
          </div>

          <nav aria-label="Nawigacja w stopce" className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Oferta", href: "#produkty" },
              { label: "Automatyczne", href: "#automatyczne" },
              { label: "Ręczne", href: "#reczne" },
              { label: "Zastosowania", href: "#zastosowania" },
              { label: "Ochrona ludności", href: "#ochrona-ludnosci" },
              { label: "Dlaczego my", href: "#dlaczego-my" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Paczkowarka do wody. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
