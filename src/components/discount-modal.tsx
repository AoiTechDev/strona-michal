"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DiscountModalContext = createContext<{ openModal: () => void } | null>(
  null,
);

export function useDiscountModal() {
  const ctx = useContext(DiscountModalContext);
  if (!ctx) {
    throw new Error(
      "useDiscountModal must be used within a DiscountModalProvider",
    );
  }
  return ctx;
}

export function DiscountPosterTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openModal } = useDiscountModal();
  return (
    <button
      type="button"
      onClick={openModal}
      aria-label="Powiększ ofertę promocyjną"
      className={className}
    >
      {children}
    </button>
  );
}

export function DiscountModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  // Open automatically on every page load.
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DiscountModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="w-[calc(100%-1.5rem)] overflow-hidden border-0 bg-transparent p-0 shadow-none sm:max-w-md"
        >
          <DialogTitle className="sr-only">
            Promocja – ręczna paczkowarka do wody w workach
          </DialogTitle>
          <DialogDescription className="sr-only">
            Specjalna oferta cenowa na mobilną ręczną paczkowarkę do wody pitnej
            w workach. Skontaktuj się z nami, aby poznać szczegóły.
          </DialogDescription>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
            <DialogClose
              aria-label="Zamknij"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <X className="h-5 w-5" />
            </DialogClose>

            <Image
              src="/discount.jpg"
              alt="Promocja na ręczną paczkowarkę do wody w workach – cena brutto 49 200 PLN"
              width={1024}
              height={1536}
              priority
              draggable={false}
              className="block h-auto max-h-[82vh] w-full select-none object-contain"
            />

            <div className="flex items-center justify-center border-t border-black/5 bg-white p-3">
              <Button
                asChild
                size="lg"
                className="group/btn w-full gap-2 rounded-xl font-semibold"
              >
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Skorzystaj z promocji
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DiscountModalContext.Provider>
  );
}
