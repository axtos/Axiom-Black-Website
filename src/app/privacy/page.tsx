import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Axiom Black, LLC collects, uses, shares and protects personal information submitted through its website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated={privacy.updated} sections={privacy.sections} />;
}
