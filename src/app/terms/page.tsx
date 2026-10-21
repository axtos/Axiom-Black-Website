import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use",
  description: "Terms governing use of the Axiom Black, LLC website.",
  path: "/terms",
});

/* Draft for legal review before launch. */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 2026"
      intro="By using this website you agree to these terms. If you do not agree, please do not use the site."
      sections={[
        {
          heading: "General information only",
          body: [
            "Content on this site is provided for general information. It is not engineering, legal or financial advice, and it does not create a client relationship. Professional services are provided only under a written agreement with Axiom Black.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The site, its text, graphics and the Axiom Black name and marks belong to Axiom Black, LLC or its licensors. You may not copy or reuse them without written permission.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "Do not misuse the site: no attempts to disrupt it, gain unauthorized access, or submit unlawful or misleading content through our forms.",
          ],
        },
        {
          heading: "No warranty; limitation of liability",
          body: [
            "The site is provided “as is”. To the extent permitted by law, Axiom Black is not liable for losses arising from your use of the site or reliance on its content.",
          ],
        },
        {
          heading: "Changes and contact",
          body: [
            "We may update these terms; the date above shows the latest revision. Questions: hello@axiomblack.com.",
          ],
        },
      ]}
    />
  );
}
