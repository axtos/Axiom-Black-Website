import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import AxiomLabs from "@/components/sections/AxiomLabs";
import About from "@/components/sections/About";
import Registrations from "@/components/sections/Registrations";
import LatestPosts from "@/components/sections/LatestPosts";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/content/home";
import { faqSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Water Infrastructure Engineering & Technology",
  description:
    "Axiom Black is a Newark, NJ engineering and technology firm. We design, modernize and manage water systems for municipal utilities and public agencies, pairing licensed engineering with AI, data and custom software.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <div className="pt-24 md:pt-28">
        <Solutions />
      </div>
      <AxiomLabs />
      <About />
      <Registrations className="border-y border-line py-24 md:py-28" />
      <div className="pt-24 md:pt-28">
        <LatestPosts />
      </div>
      <Faq />
      <Cta />
    </>
  );
}
