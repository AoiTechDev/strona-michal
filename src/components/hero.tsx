import { ArrowRight, Shield, Zap, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-screen overflow-hidden bg-[hsl(215,25%,8%)] flex items-center"
    >
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(213 80% 30% / 0.6) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 50%, hsl(199 89% 35% / 0.3) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 80% 70%, hsl(213 80% 40% / 0.2) 0%, transparent 50%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(213 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 80% 60%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        {/* Side accents */}
        <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-[hsl(199,89%,48%)]/15 blur-[80px]" />
        <div className="absolute bottom-1/4 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-particle hero-particle-1" />
        <div className="hero-particle hero-particle-2" />
        <div className="hero-particle hero-particle-3" />
        <div className="hero-particle hero-particle-4" />
        <div className="hero-particle hero-particle-5" />
        <div className="hero-particle hero-particle-6" />
        <div className="hero-particle hero-particle-7" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 pb-10 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          {/* Animated badge */}
          <div className="group mb-4 mt-6 sm:mb-6 inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 sm:px-5 py-1.5 sm:py-2 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/12 hero-fade-in hero-fade-in-1">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-primary/90 ">
              Profesjonalne rozwiązania do pakowania wody
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="max-w-5xl text-balance text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl hero-fade-in hero-fade-in-2"
          >
            Paczkowarki do wody{" "}
            <br/>
            <span className="hero-gradient-text">
            bezpieczna woda w każdych warunkach
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/50 md:text-xl hero-fade-in hero-fade-in-3">
            {"Oferujemy profesjonalne paczkowarki do wody \u2013 automatyczne i\u00a0ręczne. Realizujemy program ochrony ludności i\u00a0obrony cywilnej. Stworzone z\u00a0myślą o\u00a0sytuacjach kryzysowych, bioasekuracji i\u00a0niezależności od dostaw zewnętrznych. Atesty i\u00a0certyfikaty PZH."}
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-row items-center gap-3 sm:gap-4 hero-fade-in hero-fade-in-4">
            <Button
              size="lg"
              asChild
              className="group/btn gap-2 sm:gap-2.5 rounded-xl bg-primary px-5 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <a href="#produkty">
                Zobacz ofertę
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 rounded-xl border-white/12 bg-white/4 px-5 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-white"
            >
              <a href="#kontakt">Skontaktuj się</a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-8 sm:mt-12 grid w-full max-w-3xl grid-cols-3 gap-2 sm:gap-4 hero-fade-in hero-fade-in-5"
            role="list"
            aria-label="Kluczowe parametry"
          >
            <div
              role="listitem"
              className="group relative flex flex-col items-center gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/7 bg-white/3 px-3 py-4 sm:px-6 sm:py-7 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white/6"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
              </div>
              <strong className="relative text-xl sm:text-3xl font-bold tracking-tight text-white">
                1200+
              </strong>
              <span className="relative text-xs sm:text-sm font-medium text-white/40">
                paczek na godzinę
              </span>
            </div>

            <div
              role="listitem"
              className="group relative flex flex-col items-center gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/7 bg-white/3 px-3 py-4 sm:px-6 sm:py-7 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white/6"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
              </div>
              <strong className="relative text-xl sm:text-3xl font-bold tracking-tight text-white">
                PZH
              </strong>
              <span className="relative text-xs sm:text-sm font-medium text-white/40">
                atesty i certyfikaty
              </span>
            </div>

            <div
              role="listitem"
              className="group relative flex flex-col items-center gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/7 bg-white/3 px-3 py-4 sm:px-6 sm:py-7 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white/6"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Droplets
                  className="h-4 w-4 sm:h-5 sm:w-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <strong className="relative text-xl sm:text-3xl font-bold tracking-tight text-white">
                0.3–15l
              </strong>
              <span className="relative text-xs sm:text-sm font-medium text-white/40">
                pojemność saszetki
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
