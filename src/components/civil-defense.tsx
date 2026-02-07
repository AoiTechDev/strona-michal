import { ShieldAlert, CheckCircle2, Building, Users, Droplets } from "lucide-react";

const programPoints = [
  {
    icon: Droplets,
    text: "Zabezpieczenie dostępu do wody pitnej w\u00a0sytuacjach kryzysowych",
  },
  {
    icon: Building,
    text: "Wsparcie samorządów i\u00a0instytucji publicznych w\u00a0realizacji planów ochrony",
  },
  {
    icon: Users,
    text: "Zaopatrzenie ludności w\u00a0wodę podczas klęsk żywiołowych i\u00a0stanów wyjątkowych",
  },
  {
    icon: ShieldAlert,
    text: "Gotowość operacyjna zgodna z\u00a0wymogami obrony cywilnej",
  },
];

export function CivilDefense() {
  return (
    <section
      id="ochrona-ludnosci"
      aria-labelledby="ochrona-ludnosci-heading"
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
              <ShieldAlert className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide text-primary/90">
                Program ochrony ludności
              </span>
            </div>

            <h2
              id="ochrona-ludnosci-heading"
              className="mt-6 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Realizujemy program{" "}
              <span className="hero-gradient-text">
                ochrony ludności i obrony cywilnej
              </span>
            </h2>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/60">
              {"Nasze paczkowarki do wody stanowią kluczowy element realizacji programu ochrony ludności i\u00a0obrony cywilnej. Zapewniamy profesjonalne rozwiązania do zabezpieczenia dostępu do wody pitnej dla ludności w\u00a0sytuacjach zagrożenia, klęsk żywiołowych oraz stanów wyjątkowych \u2014 zgodnie z\u00a0wymaganiami ustawowymi i\u00a0planami zarządzania kryzysowego."}
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/45">
              {"Współpracujemy z\u00a0samorządami, jednostkami wojskowymi, służbami ratunkowymi oraz instytucjami publicznymi, dostarczając sprawdzone urządzenia do pakowania wody pitnej, które spełniają najwyższe standardy bezpieczeństwa i\u00a0posiadają atesty PZH."}
            </p>
          </div>

          {/* Right - key points */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {programPoints.map((point) => (
              <div
                key={point.text}
                className="group relative rounded-2xl border border-white/7 bg-white/3 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white/6"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <point.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-white/70">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-white/7 bg-white/3 px-8 py-6 backdrop-blur-md">
          {[
            "Zgodność z\u00a0ustawą o\u00a0ochronie ludności i\u00a0obronie cywilnej",
            "Atesty PZH",
            "Gotowość kryzysowa",
            "Współpraca z\u00a0samorządami",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-white/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
