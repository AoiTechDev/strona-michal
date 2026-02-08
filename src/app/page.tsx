import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductCards } from "@/components/product-cards";
import { AutomaticDetail, ManualDetail } from "@/components/product-details";
import { Applications } from "@/components/applications";
import { CivilDefense } from "@/components/civil-defense";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paczkowarka do wody",
    url: "https://www.paczkowarkadowody.pl",
    description:
      "Profesjonalne paczkowarki do wody pitnej – automatyczne i ręczne. Realizujemy program ochrony ludności i obrony cywilnej. Rozwiązania dla sytuacji kryzysowych, bioasekuracji i ciągłości produkcji.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-660-960-831",
      email: "biuro@paczkowarkadowody.pl",
      contactType: "sales",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressCountry: "PL",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paczkowarka do wody",
    url: "https://www.paczkowarkadowody.pl",
    inLanguage: "pl",
  };

  const automaticProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Automatyczna paczkowarka do wody pitnej",
    image: "https://www.paczkowarkadowody.pl/automatyczna.jpg",
    description:
      "Nowoczesna automatyczna paczkowarka do porcjowania i pakowania wody pitnej w jednorazowe saszetki o pojemności 300–1000 ml. Wydajność do 2200 paczek na godzinę. Atesty PZH. Idealna do realizacji programu ochrony ludności i obrony cywilnej.",
    brand: {
      "@type": "Brand",
      name: "Paczkowarka do wody",
    },
    category: "Maszyny do pakowania wody",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Wydajność",
        value: "1200–2200 paczek/h",
      },
      {
        "@type": "PropertyValue",
        name: "Dozowanie",
        value: "300–1000 ml",
      },
      {
        "@type": "PropertyValue",
        name: "Atesty",
        value: "PZH",
      },
    ],
  };

  const manualProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ręczna paczkowarka do wody w worki",
    image: "https://www.paczkowarkadowody.pl/reczna.jpg",
    description:
      "Profesjonalne urządzenie klasy premium do pakowania wody pitnej w atestowane worki foliowe 5–15 litrów. Zaprojektowane do pracy w warunkach kryzysowych i terenowych. Kluczowy element programu ochrony ludności i obrony cywilnej.",
    brand: {
      "@type": "Brand",
      name: "Paczkowarka do wody",
    },
    category: "Maszyny do pakowania wody",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pojemność worka",
        value: "5–15 litrów",
      },
      {
        "@type": "PropertyValue",
        name: "Materiał",
        value: "Certyfikowana stal nierdzewna",
      },
      {
        "@type": "PropertyValue",
        name: "Atesty",
        value: "PZH",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(automaticProductSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(manualProductSchema),
        }}
      />
    </>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <ProductCards />
        <AutomaticDetail />
        <ManualDetail />
        <Applications />
        <CivilDefense />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
