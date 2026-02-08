import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "660 960 831",
    href: "tel:+48660960831",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "biuro@paczkowarkadowody.pl",
    href: "mailto:biuro@paczkowarkadowody.pl",
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: "Poznań, Polska",
    href: "https://maps.google.com/?q=Poznań,Polska",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="relative overflow-hidden bg-[hsl(215,25%,8%)] py-20 lg:py-28"
    >
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 50%, hsl(213 80% 30% / 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 30%, hsl(199 89% 35% / 0.2) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(213 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 80% 60%) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - main content */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-5 py-2 backdrop-blur-md">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide text-primary/90">
                Kontakt
              </span>
            </div>

            <h2
              id="kontakt-heading"
              className="mt-6 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Porozmawiajmy o{" "}
              <span className="hero-gradient-text">
                Twoich potrzebach
              </span>
            </h2>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/60">
              Chętnie przygotujemy ofertę dopasowaną do skali i{"\u00a0"}zastosowania.
              Skontaktuj się z{"\u00a0"}nami, a{"\u00a0"}dobierzemy optymalne rozwiązanie.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/45">
              Nasz zespół odpowiada na zapytania w{"\u00a0"}ciągu 24 godzin. Oferujemy
              wsparcie techniczne, pomoc w{"\u00a0"}doborze urządzeń oraz kompleksową
              obsługę zamówień.
            </p>
          </div>

          {/* Right - contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactItems.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                {...(contact.external
                  ? {
                      target: "_blank",
                      rel: "nofollow noopener noreferrer",
                    }
                  : {})}
                className="group relative rounded-2xl border border-white/7 bg-white/3 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white/6"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <contact.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs text-white/40">{contact.label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-white/70">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
