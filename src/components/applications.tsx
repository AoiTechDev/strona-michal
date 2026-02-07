import {
    AlertTriangle,
    Building2,
    Sword,
    Heart,
    Bird,
    Users,
  } from "lucide-react";
  
  const applications = [
    {
      icon: AlertTriangle,
      title: "Sytuacje kryzysowe",
      description:
        "Zapewnienie wody pitnej podczas klsk zywiolowych, awarii sieci wodociagowej i stanow wyjatkowych.",
    },
    {
      icon: Bird,
      title: "Fermy drobiu i hodowle",
      description:
        "Bioasekuracja i niezalezne zrodlo czystej wody dla zwierzat w warunkach zagrozenia epizootycznego.",
    },
    {
      icon: Sword,
      title: "Wojsko i sluzby",
      description:
        "Mobilne zaopatrzenie w wode dla jednostek wojskowych, strazy pozarnej i sluzb ratunkowych.",
    },
    {
      icon: Building2,
      title: "Instytucje publiczne",
      description:
        "Szpitale, szkoly, urzedy i placowki opiekuncze - ciaglosc dostaw niezaleznie od infrastruktury.",
    },
    {
      icon: Heart,
      title: "Pomoc humanitarna",
      description:
        "Szybka dystrybucja bezpiecznej wody w rejonach dotkietych kryzysami humanitarnymi.",
    },
    {
      icon: Users,
      title: "Wydarzenia masowe",
      description:
        "Efektywna dystrybucja wody na koncertach, festiwalach i duzych zgromadzeniach publicznych.",
    },
  ];
  
  export function Applications() {
    return (
      <section id="zastosowania" aria-labelledby="zastosowania-heading" className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Zastosowania
            </p>
            <h2 id="zastosowania-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">
              Gdzie znajdują zastosowanie nasze paczkowarki do wody
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Nasze paczkowarki zostały zaprojektowane do pracy w najtrudniejszych warunkach, gdziekolwiek potrzebna jest bezpieczna woda pitna.
            </p>
          </header>
  
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <article
                key={app.title}
                className="group rounded-2xl border border-border bg-background p-7 transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20" aria-hidden="true">
                  <app.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {app.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  