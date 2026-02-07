import { ArrowRight, Settings, Hand } from "lucide-react";
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
            Dwie linie produktowe<br/> automatyczne i ręczne paczkowarki do wody
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nasze rozwiązania pozwalają lokalnie porcjować i pakować wodę <br/> w worki atestowane LDPE
            – zarówno w pełni automatycznie, <br/> jak i w wersji ręcznej.
          </p>
        </header>

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
                Nowoczesne maszyny do automatycznego porcjowania <br/>i pakowania wody pitnej w jednorazowe, szczelne saszetki. Przeznaczone do pracy ciągłej w instytucjach, przemyśle, hodowli oraz w sytuacjach kryzysowych.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "Szybka dystrybucja wody",
                  "1 osoba = 1 paczka = pełna higiena",
                  "Możliwość produkcji wody na miejscu",
                  "Minimalny kontakt z otoczeniem",
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
                Profesjonalne urządzenia do pakowania wody pitnej <br/> w atestowane worki foliowe. Idealne dla wojska, samorządów, służb ratunkowych, wodociągów oraz ferm drobiu <br/> jako awaryjne źródło bezpiecznej mikrobiologicznej wody.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "Pełna kontrola nad zaopatrzeniem. Bez udziału cystern",
                  "Łatwy transport i magazynowanie",
                  "Sterylne pakowanie przy użyciu UV i filtracji",
                  "Możliwość pracy w terenie",
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
                <Button asChild variant="outline" className="gap-2 bg-transparent">
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
