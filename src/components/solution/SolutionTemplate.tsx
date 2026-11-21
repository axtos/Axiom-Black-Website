import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/sections/Reveal";
import Cta from "@/components/sections/Cta";
import FaqBlock from "@/components/sections/FaqBlock";
import InfoCard from "@/components/about/InfoCard";
import SolutionCard from "@/components/cards/SolutionCard";
import SolutionHero from "./SolutionHero";
import FeatureBand from "./FeatureBand";
import ProcessCard from "./ProcessCard";
import { DashboardSquare02Icon, WorkflowSquare03Icon, LinkSquare02Icon, TaskDone01Icon } from "@hugeicons/core-free-icons";
import type { SolutionPage } from "@/content/solutionPages";
import { solutionGroups } from "@/content/solutions";
import JsonLd from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/seo";

/** Related cards carry only a href — look their icon up from the nav taxonomy. */
const iconByHref = new Map(
  solutionGroups.flatMap((g) => g.items.map((it) => [it.href, it.icon] as const))
);

export default function SolutionTemplate({ page }: { page: SolutionPage }) {
  const { accent } = page;
  return (
    <>
      <JsonLd data={[serviceSchema(page), faqSchema(page.faq.items)]} />
      <SolutionHero hero={page.hero} accent={accent} />

      {/* Capabilities */}
      <section className="py-24 md:py-28">
        <Container>
          <div>
            <Eyebrow icon={DashboardSquare02Icon}>{page.capabilities.eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[28ch]">{page.capabilities.headline}</h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-body">{page.capabilities.sub}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.items.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <InfoCard title={c.title} body={c.body} icon={c.icon} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {page.services && (
        <section className="border-t border-line py-24 md:py-28">
          <Container>
            <Eyebrow icon={TaskDone01Icon}>{page.services.eyebrow}</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[28ch]">{page.services.headline}</h2>
            <dl className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.items.map((s) => (
                <div key={s.title} className="border-t border-line py-6">
                  <dt className="text-[17px] font-medium text-ink">{s.title}</dt>
                  <dd className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-body">{s.body}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      <FeatureBand data={page.difference} accent={accent} />

      {/* Process */}
      <section className="py-24 md:py-28">
        <Container>
          <Eyebrow icon={WorkflowSquare03Icon}>{page.process.eyebrow}</Eyebrow>
          <h2 className="ab-h2 mt-5 max-w-[28ch]">{page.process.headline}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {page.process.steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.06}>
                <ProcessCard n={s.n} title={s.title} body={s.body} side={i % 2 === 0 ? "left" : "right"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related solutions */}
      <section className="pb-24 md:pb-28">
        <Container>
          <Eyebrow icon={LinkSquare02Icon}>{page.related.eyebrow}</Eyebrow>
          <h2 className="ab-h2 mt-5 max-w-[28ch]">{page.related.headline}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.related.items.map((r, i) => (
              <Reveal key={r.href + i} delay={(i % 3) * 0.05}>
                <SolutionCard name={r.name} descriptor={r.descriptor} href={r.href} icon={iconByHref.get(r.href)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqBlock eyebrow={page.faq.eyebrow} headline={page.faq.headline} items={page.faq.items} />

      <Cta eyebrow={page.cta.eyebrow} headline={page.cta.headline} sub={page.cta.sub} cta={page.cta.cta} />
    </>
  );
}
