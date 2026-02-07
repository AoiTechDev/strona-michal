import { Award, Wrench, HeadphonesIcon, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Atesty i certyfikaty PZH",
    description:
      "Wszystkie nasze urządzenia posiadają atesty PZH i spełniają najwyższe standardy sanitarne wymagane w Polsce i UE.",
  },
  {
    icon: Wrench,
    title: "Doświadczenie w branży",
    description:
      "Lata doświadczenia w projektowaniu i wdrażaniu systemów do pakowania wody pitnej w różnych sektorach.",
  },
  {
    icon: HeadphonesIcon,
    title: "Wsparcie techniczne",
    description:
      "Pełne wsparcie od momentu zakupu - szkolenie, uruchomienie, serwis i doradztwo techniczne.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakości",
    description:
      "Urządzenia wykonane z certyfikowanej stali nierdzewnej o wysokiej trwałości i niskich kosztach eksploatacji.",
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" aria-labelledby="dlaczego-my-heading" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Dlaczego my?
            </p>
            <h2 id="dlaczego-my-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Zaufanie zbudowane na jakości
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Wybierając nasze rozwiązania, zyskujesz partnera <br/> z doświadczeniem, pełnym wsparciem technicznym i gwarancją najwyższej jakości. Każde urządzenie jest testowane <br/> i przygotowywane do pracy w najtrudniejszych warunkach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
