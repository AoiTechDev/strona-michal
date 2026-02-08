import { Award, Wrench, HeadphonesIcon, ShieldCheck, CircleCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Award,
    title: "Atesty i\u00a0certyfikaty PZH",
    description:
      "Wszystkie nasze urządzenia posiadają atesty PZH i\u00a0spełniają najwyższe standardy sanitarne wymagane w\u00a0Polsce i\u00a0UE.",
  },
  {
    icon: Wrench,
    title: "Doświadczenie w\u00a0branży",
    description:
      "Lata doświadczenia w\u00a0projektowaniu i\u00a0wdrażaniu systemów do pakowania wody pitnej w\u00a0różnych sektorach.",
  },
  {
    icon: HeadphonesIcon,
    title: "Wsparcie techniczne",
    description:
      "Pełne wsparcie od momentu zakupu \u2013 szkolenie, uruchomienie, serwis i\u00a0doradztwo techniczne.",
    href: "tel:+48660960831",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakości",
    description:
      "Urządzenia wykonane z\u00a0certyfikowanej stali nierdzewnej o\u00a0wysokiej trwałości i\u00a0niskich kosztach eksploatacji.",
  },
];

const supportPoints = [
  "Pomagamy dobrać wydajność do realnego zapotrzebowania",
  "Wspieramy przy tworzeniu dokumentacji kryzysowej",
  "Doradzamy w\u00a0planach ciągłości działania",
  "Pomagamy przygotować OPZ i\u00a0zapisy do przetargów",
  "Szkolimy operatorów",
  "Zapewniamy wsparcie przy uruchomieniu",
  "Jesteśmy dostępni przed i\u00a0po zakupie",
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" aria-labelledby="dlaczego-my-heading" className="bg-white py-20 lg:py-28">
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
              Wybierając nasze rozwiązania, zyskujesz partnera <br/> z{'\u00a0'}doświadczeniem, pełnym wsparciem technicznym i{'\u00a0'}gwarancją najwyższej jakości. Każde urządzenie jest testowane <br/> i{'\u00a0'}przygotowywane do pracy w{'\u00a0'}najtrudniejszych warunkach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Tag = reason.href ? "a" : "article";
              return (
                <Tag
                  key={reason.title}
                  {...(reason.href ? { href: reason.href } : {})}
                  className="rounded-2xl bg-background border border-border p-6 transition-all hover:shadow-lg hover:border-primary/20"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Support points */}
        <div className="mt-16 lg:mt-20">
          <div className="rounded-2xl bg-background border border-border p-8 md:p-10">
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Kompleksowe wsparcie na każdym etapie
            </h3>
            <p className="mt-2 text-muted-foreground">
              Nie tylko dostarczamy urządzenia — towarzyszymy Ci od{'\u00a0'}pierwszego kontaktu po{'\u00a0'}pełne wdrożenie.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {supportPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-card-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="gap-2">
                <a href="#kontakt">
                  Skontaktuj się z nami
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
