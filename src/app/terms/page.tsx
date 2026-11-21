import LegalPage from "@/components/LegalPage";
import { terms } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use",
  description: "Terms governing access to and use of the Axiom Black, LLC website.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated={terms.updated} sections={terms.sections} />;
}
