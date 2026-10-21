import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Axiom Black, LLC collects, uses and protects information submitted through axiomblack.com.",
  path: "/privacy",
});

/* Draft for legal review before launch. */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro="This policy explains what information Axiom Black, LLC (“Axiom Black”, “we”) collects through this website and how we use it."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit the contact form we collect the details you enter: your name, work email, organization, role and message.",
            "Like most websites, our hosting provider may log technical data such as IP address, browser type and pages requested, for security and reliability.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use form submissions only to respond to your enquiry and to follow up about work you ask us about. We do not sell personal information.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We share information only with service providers who help us operate the site and deliver email (for example our hosting and email delivery providers), and where required by law.",
          ],
        },
        {
          heading: "Retention and your choices",
          body: [
            "We keep enquiry emails for as long as needed to handle your request and for ordinary business records. To ask us to access, correct or delete your information, email hello@axiomblack.com.",
          ],
        },
        {
          heading: "Contact",
          body: ["Axiom Black, LLC, 511 South Orange Ave #2238, Newark, NJ 07103 · hello@axiomblack.com"],
        },
      ]}
    />
  );
}
