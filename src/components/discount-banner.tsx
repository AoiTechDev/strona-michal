import Image from "next/image";
import { ArrowRight, Phone, Tag, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiscountPosterTrigger } from "@/components/discount-modal";

export function DiscountBanner() {
  return (
    <section
      id="promocja"
      aria-labelledby="promocja-heading"
      className="relative overflow-hidden border-y border-primary/15 bg-linear-to-br from-primary/8 via-background to-accent/8 py-20 lg:py-28"
    >
      {/* Soft glow accents */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary ring-1 ring-inset ring-primary/20">
            <Tag className="h-4 w-4" aria-hidden="true" />
            Promocja
          </span>
          <h2
            id="promocja-heading"
            className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Ręczna paczkowarka do wody
            <br />w{" "}promocyjnej cenie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {
              "Mobilna, niezawodna i gotowa do działania. Skorzystaj ze specjalnej oferty na profesjonalne urządzenie do ręcznego pakowania wody pitnej w worki – idealne w ramach programu ochrony ludności i obrony cywilnej."
            }
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Button
              asChild
              size="lg"
              className="group/btn w-full gap-2 rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
            >
              <a href="#kontakt">
                Skorzystaj z promocji
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 rounded-xl px-8 py-6 text-base font-semibold sm:w-auto"
            >
              <a href="tel:+48660960831">
                <Phone className="h-4 w-4" aria-hidden="true" />
                +48 660 960 831
              </a>
            </Button>
          </div>
        </div>

        {/* Poster */}
        <div className="flex justify-center lg:justify-end">
          <DiscountPosterTrigger className="group relative block w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-border bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/60">
            <Image
              src="/discount.jpg"
              alt="Promocja na ręczną paczkowarkę do wody w workach – cena brutto 49 200 PLN"
              width={1024}
              height={1536}
              draggable={false}
              className="block h-auto w-full select-none object-contain"
            />

            {/* Hover overlay – click to enlarge */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
              <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
                Kliknij, aby powiększyć
              </span>
            </span>
          </DiscountPosterTrigger>
        </div>
      </div>
    </section>
  );
}
