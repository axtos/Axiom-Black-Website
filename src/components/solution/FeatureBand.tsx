import WireframeCube from "@/components/motif/WireframeCube";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/sections/Reveal";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import type { SolutionPage } from "@/content/solutionPages";
import type { Accent } from "@/lib/brand";

export default function FeatureBand({ data, accent }: { data: SolutionPage["difference"]; accent: Accent }) {
  return (
    <section className="bg-surface-2 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="rounded-[20px] bg-surface-2 px-6 py-12 md:px-14 md:py-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow icon={SparklesIcon}>{data.eyebrow}</Eyebrow>
                <h2 className="mt-6 max-w-[24ch] text-[clamp(30px,3.4vw,42px)] font-medium leading-[1.06] tracking-[-0.025em] text-ink">
                  {data.headline}
                </h2>
                <p className="mt-6 max-w-[50ch] text-[16px] leading-relaxed text-body">{data.sub}</p>
                <div className="mt-10">
                  <PrimaryButton href={data.cta.href}>{data.cta.label}</PrimaryButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full max-w-full">
            <WireframeCube accent={accent} className="absolute inset-0 h-full w-full" />
          </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
