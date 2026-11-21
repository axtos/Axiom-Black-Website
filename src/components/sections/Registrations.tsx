import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { Certificate02Icon } from "@hugeicons/core-free-icons";
import { SITE } from "@/lib/seo";

const rows: { label: string; value: string }[] = [
  { label: "Legal name", value: SITE.legalName },
  { label: "Business type", value: "Small business" },
  { label: "UEI", value: SITE.uei },
  { label: "CAGE code", value: SITE.cage },
  { label: "Primary NAICS", value: "541330 Engineering Services" },
  { label: "Other NAICS", value: SITE.naics.slice(1).join(" · ") },
  { label: "Funded-program experience", value: "NJEIT (New Jersey I-Bank) · USDA Rural Development" },
  { label: "Headquarters", value: "511 South Orange Ave #2238, Newark, NJ 07103" },
];

/** Procurement facts as a plain definition table: real, verifiable, machine-readable. */
export default function Registrations({ className }: { className?: string }) {
  return (
    <section className={className ?? "py-24 md:py-28"}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow icon={Certificate02Icon}>Registrations</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[16ch]">Set up for public-sector procurement.</h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-body">
              The registrations procurement officers ask for, in one place.
            </p>
          </div>
          <dl className="border-t border-line">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 border-b border-line py-[18px] sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-[14px] text-muted">{r.label}</dt>
                <dd className="font-mono text-[15px] text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
