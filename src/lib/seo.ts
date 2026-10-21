import type { Metadata } from "next";

export const SITE = {
  name: "Axiom Black",
  legalName: "Axiom Black, LLC",
  url: "https://axiomblack.com",
  email: "info@axiomblack.com",
  phone: "+1-862-420-9525",
  description:
    "Axiom Black is a Newark, NJ engineering and technology firm that plans, designs, and modernizes water infrastructure for municipal utilities and public agencies, and builds the software that runs it.",
  uei: "RVLSY6XUQ8F9",
  cage: "9VQ00",
  naics: ["541330", "513210", "541618", "541310", "541620", "541511", "541690", "541519", "541715", "541611", "611420"],
  sameAs: ["https://www.linkedin.com/company/axiom-black/", "https://x.com/Axiomblackco"],
};

/** Per-page metadata helper (unique title + description per page). */
export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} · ${SITE.name}`, description },
  };
}

/** Organization JSON-LD for the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SITE.sameAs,
    naics: SITE.naics.join(", "),
    identifier: [
      { "@type": "PropertyValue", propertyID: "UEI", value: SITE.uei },
      { "@type": "PropertyValue", propertyID: "CAGE", value: SITE.cage },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "511 South Orange Ave #2238",
      addressLocality: "Newark",
      addressRegion: "NJ",
      postalCode: "07103",
      addressCountry: "US",
    },
    areaServed: "US",
    knowsAbout: [
      "Water and wastewater engineering",
      "Lead service line replacement programs",
      "Hydraulic modeling",
      "Infrastructure risk assessment",
      "Digital transformation for public agencies",
      "Custom software development",
    ],
  };
}

/** Service JSON-LD for a solution page. */
export function serviceSchema(page: { slug: string; hero: { eyebrow: string; sub: string } }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.hero.eyebrow.split("·").pop()?.trim(),
    serviceType: page.hero.eyebrow,
    description: page.hero.sub,
    url: `${SITE.url}/solutions/${page.slug}`,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "US",
  };
}

/** FAQPage JSON-LD from question/answer pairs. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
