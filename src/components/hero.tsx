import { ArrowRight, Shield, Zap, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-foreground pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(213 80% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(199 89% 48% / 0.2) 0%, transparent 50%)"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center text-balance gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Droplets className="h-4 w-4 text-primary hidden sm:block" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">
              Profesjonalne rozwiązania do pakowania wody
            </span>
          </div>

          <h1 id="hero-heading" className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
            Paczkowarki do wody{" "}
            <span className="text-primary">– bezpieczna woda w każdych warunkach</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/70 md:text-xl">
            Oferujemy profesjonalne paczkowarki do wody – automatyczne i ręczne. Stworzone z myślą o sytuacjach kryzysowych, bioasekuracji i niezależności od dostaw zewnętrznych. Atesty i certyfikaty PZH.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg" asChild className="gap-2 text-base">
              <a href="#produkty">
                Zobacz ofertę
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 text-base border-background/20 text-background hover:bg-background/10 hover:text-background bg-transparent">
              <a href="#kontakt">Skontaktuj się</a>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3" role="list" aria-label="Kluczowe parametry">
            <div role="listitem" className="flex flex-col items-center gap-2 rounded-xl border border-background/10 bg-background/5 px-6 py-5 backdrop-blur-sm">
              <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
              <strong className="text-2xl font-bold text-background">1200+</strong>
              <span className="text-sm text-background/60">paczek na godzinę</span>
            </div>
            <div role="listitem" className="flex flex-col items-center gap-2 rounded-xl border border-background/10 bg-background/5 px-6 py-5 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              <strong className="text-2xl font-bold text-background">PZH</strong>
              <span className="text-sm text-background/60">atesty i certyfikaty</span>
            </div>
            <div role="listitem" className="flex flex-col items-center gap-2 rounded-xl border border-background/10 bg-background/5 px-6 py-5 backdrop-blur-sm">
              <Droplets className="h-6 w-6 text-primary" aria-hidden="true" />
              <strong className="text-2xl font-bold text-background">0.3-15l.</strong>
              <span className="text-sm text-background/60">pojemność saszetki</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
