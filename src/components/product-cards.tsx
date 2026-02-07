import { ArrowRight, Settings, Hand, SlidersHorizontal, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductCards() {
  return (
    <section id="produkty" aria-labelledby="produkty-heading" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nasze rozwiązania
          </p>
          <h2 id="produkty-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Dwie linie produktowe<br/> automatyczne i{'\u00a0'}ręczne paczkowarki do wody
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nasze rozwiązania pozwalają lokalnie porcjować i{'\u00a0'}pakować wodę <br/> w{'\u00a0'}worki atestowane LDPE
            {' \u2013 '}zarówno w{'\u00a0'}pełni automatycznie, <br/> jak i{'\u00a0'}w{'\u00a0'}wersji ręcznej.
          </p>
        </header>
        <div className="relative mx-auto mt-12 max-w-7xl overflow-hidden rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-background to-accent/5 p-px shadow-lg shadow-primary/5">
          <div className="relative rounded-[calc(1rem-1px)] bg-linear-to-br from-primary/3 to-transparent px-8 py-8 sm:px-10 sm:py-9">

            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <SlidersHorizontal className="h-6 w-6 text-primary" />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-bold tracking-tight text-foreground">
                  Konfiguracja według <span className="text-primary">Twoich potrzeb</span>
                </p>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-muted-foreground">
                  {"Nasi eksperci dopasują paczkowarki do indywidualnych wymagań Twojej organizacji \u2014 od automatyzacji procesu, przez wybór rozmiaru worków, po adaptację urządzeń do specyficznych warunków pracy."}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {["Wydajność", "Pojemność opakowań", "Funkcje dodatkowe", "Warunki pracy"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/15">
                      <Wrench className="h-3 w-3" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:border-primary/30">
            <div className="flex flex-1 flex-col p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Automatyczne paczkowarki do wody
              </h3>
              <p className="mt-2 text-sm font-medium text-primary">
                Saszetki 300–1000 ml
              </p>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Nowoczesne maszyny do automatycznego porcjowania <br/>i{'\u00a0'}pakowania wody pitnej w{'\u00a0'}jednorazowe, szczelne saszetki. Przeznaczone do pracy ciągłej w{'\u00a0'}instytucjach, przemyśle, hodowli oraz w{'\u00a0'}sytuacjach kryzysowych.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "Szybka dystrybucja wody",
                  "1 osoba = 1 paczka = pełna higiena",
                  "Możliwość produkcji wody na miejscu",
                  "Minimalny kontakt z\u00a0otoczeniem",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-card-foreground">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="gap-2">
                  <a href="#automatyczne">
                    Zobacz szczegóły
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:border-primary/30">
            <div className="flex flex-1 flex-col p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20" aria-hidden="true">
                <Hand className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Ręczne paczkowarki do wody
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">
                Worki 5–15 litrów
              </p>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Profesjonalne urządzenia do pakowania wody pitnej <br/> w{'\u00a0'}atestowane worki foliowe. Idealne dla wojska, samorządów, służb ratunkowych, wodociągów oraz ferm drobiu <br/> jako awaryjne źródło bezpiecznej mikrobiologicznej wody.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "Pełna kontrola nad zaopatrzeniem. Bez udziału cystern",
                  "Łatwy transport i\u00a0magazynowanie",
                  "Sterylne pakowanie przy użyciu UV i\u00a0filtracji",
                  "Możliwość pracy w\u00a0terenie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-card-foreground">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="gap-2 bg-transparent">
                  <a href="#reczne">
                    Zobacz szczegóły
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
