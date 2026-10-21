import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SolutionCard from "@/components/cards/SolutionCard";
import Cta from "@/components/sections/Cta";
import { solutionGroups } from "@/content/solutions";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Solutions: Engineering & Technology",
  description:
    "Water, design, modeling and risk assessment engineering, paired with AI, digital transformation, analytics and software development, delivered by one team for municipal utilities and public agencies.",
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <section>
        <Container className="pt-[150px] md:pt-[190px]">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(40px,6vw,76px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
            Engineering and technology, under one roof.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-body">
            Most firms do engineering or technology. Axiom Black does both, so your infrastructure
            and your data infrastructure are designed by the same team.
          </p>
        </Container>
      </section>

      <section className="pb-24 pt-16 md:pb-28 md:pt-20">
        <Container>
          {solutionGroups.map((group) => (
            <div key={group.label} className="mb-16 last:mb-0">
              <p className="ab-eyebrow-caps">{group.label}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item) => (
                  <SolutionCard key={item.href} name={item.name} href={item.href} descriptor={item.descriptor} icon={item.icon} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <Cta />
    </>
  );
}
