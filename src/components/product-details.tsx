import Image from "next/image";
import {
  CheckCircle2,
  Gauge,
  Ruler,
  Timer,
  FileText,
  Award,
  Truck,
  GraduationCap,
  Headphones,
  Droplets,
  Printer,
  Sun,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export function AutomaticDetail() {
  return (
    <section id="automatyczne" aria-labelledby="automatyczne-heading" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Linia automatyczna
            </p>
            <h2 id="automatyczne-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">
              Automatyczna paczkowarka do wody pitnej
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Nowoczesna automatyczna paczkowarka do porcjowania i pakowania wody pitnej w jednorazowe saszetki o pojemnosci 300-1000 ml. Urzadzenie pracuje w trybie ciaglym i moze byc uzytkowne stacjonarnie lub polmobilnie.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Woda trafia bezposrednio do maszyny, przechodzi przez system uzdatniania i dezynfekcji (opcjonalnie filtracja mechaniczna, UV, dezynfekcja chemiczna), a nastepnie jest pakowana w szczelne opakowania gotowe do natychmiastowej dystrybucji.
            </p>

            {/* Technical params */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-card-foreground">Parametry techniczne</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: Gauge, label: "Dozowanie", value: "300-1000 ml" },
                  { icon: Ruler, label: "Szerokosc folii", value: "320 / 380 mm" },
                  { icon: Timer, label: "Wydajnosc", value: "1200-2200 paczek/h" },
                  { icon: FileText, label: "Instrukcja", value: "Jezyk polski" },
                  { icon: Award, label: "Atesty", value: "PZH" },
                ].map((param) => (
                  <div
                    key={param.label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
                  >
                    <param.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{param.label}</p>
                      <p className="text-sm font-semibold text-card-foreground">{param.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included + Applications – below text on left */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="text-lg font-semibold text-foreground">W standardzie</h3>
                <div className="mt-5 flex flex-col gap-4">
                  {[
                    { icon: Truck, text: "Dostawa urzadzenia" },
                    { icon: GraduationCap, text: "Szkolenie z obslugi" },
                    { icon: Headphones, text: "Wsparcie przy pierwszym uruchomieniu" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="text-lg font-semibold text-foreground">Zastosowanie</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Centra zarzadzania kryzysowego",
                    "Szpitale i placowki opiekuncze",
                    "Zaklady przemyslowe",
                    "Fermy drobiu i hodowle",
                    "Wydarzenia masowe",
                  ].map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image (sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <Image
                src="/automatyczna.jpg"
                alt="Automatyczna paczkowarka do wody pitnej – maszyna do pakowania wody w saszetki"
                width={600}
                height={900}
                className="mx-auto h-auto max-h-[520px] w-auto object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManualDetail() {
  return (
    <section id="reczne" aria-labelledby="reczne-heading" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left - Info + Cards */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Linia ręczna
            </p>
            <h2 id="reczne-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ręczna paczkowarka do wody w worki
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Urzadzenie klasy premium do pakowania wody pitnej w atestowane worki foliowe. Zaprojektowane z mysla o pracy w warunkach kryzysowych, terenowych oraz jako rezerwowe zrodlo wody dla instytucji i gospodarstw.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              System wymaga doprowadzenia wody uzdatnionej i zdatnej do spozycia, a dzieki zaawansowanej dezynfekcji zapewnia pelne bezpieczenstwo mikrobiologiczne.
            </p>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Korzysci</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  "Szybkie uruchomienie produkcji wody",
                  "Redukcja kosztow transportu i magazynowania",
                  "Spelnienie wymogow sanitarnych i audytow",
                  "Wysoka trwalosc i niskie koszty eksploatacji",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase options */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Forma zakupu</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Zakup gotowkowy",
                  "Leasing",
                  "Konfiguracja indywidualna",
                  "Zakup poza PZP (sytuacje kryzysowe)",
                ].map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail cards – below text */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-card-foreground">Dedykowane dla</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Przedsiebiorstw wodociagowych",
                    "Jednostek samorzadu terytorialnego",
                    "Wojska i sluzb ratunkowych",
                    "Organizacji humanitarnych",
                    "Ferm drobiu i zakladow produkcyjnych",
                  ].map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-card-foreground">Kluczowe cechy</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { icon: Droplets, text: "Worki 5-15 litrow" },
                    { icon: ShieldCheck, text: "Certyfikowana stal nierdzewna" },
                    { icon: FlaskConical, text: "Filtr mechaniczny, lampa UV, chlorator" },
                    { icon: Sun, text: "Komory UV do dezynfekcji workow" },
                    { icon: Printer, text: "Drukarka etykiet" },
                    { icon: Sun, text: "Magazyn workow z lampa UV" },
                  ].map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <feature.icon className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-sm font-medium text-card-foreground">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image (sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/reczna.jpg"
                alt="Ręczna paczkowarka do wody w worki – mobilna stacja do pakowania wody pitnej"
                width={900}
                height={700}
                className="mx-auto h-auto max-h-[480px] w-auto object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
