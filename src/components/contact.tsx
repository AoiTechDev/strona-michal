'use client';

import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </p>
            <h2 id="kontakt-heading" className="mt-3 text-balance text-3xl font-bold tracking-tight text-background md:text-4xl">
              Porozmawiajmy o Twoich potrzebach
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-background/70">
              Chetnie przygotujemy oferte dopasowana do skali i zastosowania. Skontaktuj sie z nami, a dobierzemy optymalne rozwiazanie.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "660 960 831",
                  href: "tel:+48660960831",
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "biuro@paczkowarkadowody.pl",
                  href: "mailto:biuro@paczkowarkadowody.pl",
                },
                {
                  icon: Globe,
                  label: "Strona www",
                  value: "www.paczkowarkadowody.pl",
                  href: "https://www.paczkowarkadowody.pl",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center gap-4 rounded-xl border border-background/10 bg-background/5 px-5 py-4 backdrop-blur-sm transition-all hover:bg-background/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-background/50">{contact.label}</p>
                    <p className="text-sm font-semibold text-background">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-background/60">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Poznań, Polska</span>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-background">Wyslij zapytanie</h3>
            <p className="mt-2 text-sm text-background/60">
              Wypelnij formularz, a odezwiemy sie w ciagu 24 godzin.
            </p>

            <form
              aria-label="Formularz kontaktowy"
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-sm font-medium text-background/80">
                  Imię i nazwisko
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jan Kowalski"
                  className="rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-sm font-medium text-background/80">
                  Adres e-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jan@firma.pl"
                  className="rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className="text-sm font-medium text-background/80">
                  Telefon
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+48 600 000 000"
                  className="rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-interest" className="text-sm font-medium text-background/80">
                  Zainteresowanie
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled className="text-foreground">
                    Wybierz typ urządzenia
                  </option>
                  <option value="auto" className="text-foreground">
                    Automatyczna paczkowarka
                  </option>
                  <option value="manual" className="text-foreground">
                    Ręczna paczkowarka do wody w worki
                  </option>
                  <option value="both" className="text-foreground">
                    Oba typy
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-background/80">
                  Wiadomość
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Opisz swoje potrzeby..."
                  className="resize-none rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Wyślij zapytanie
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
