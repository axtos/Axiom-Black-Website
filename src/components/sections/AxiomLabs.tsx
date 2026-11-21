import WireframeCube from "@/components/motif/WireframeCube";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "./Reveal";
import { Certificate01Icon } from "@hugeicons/core-free-icons";
import { certificateTracker } from "@/content/products";

/** Home feature band: the AxiomLabs product that is live today. */
export default function AxiomLabs() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border border-line bg-surface-2 px-6 py-12 md:px-14 md:py-16" style={{ borderTop: "2px solid #FF8710" }}>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow icon={Certificate01Icon}>AxiomLabs · Product</Eyebrow>
                <h2 className="ab-h2 mt-6 max-w-[18ch]">{certificateTracker.hero.headline}</h2>
                <p className="mt-6 max-w-[50ch] text-[16px] leading-relaxed text-body">{certificateTracker.hero.sub}</p>
                <div className="mt-10">
                  <PrimaryButton href="/products/certificate-tracker">See Certificate Tracker</PrimaryButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full max-w-full">
                <WireframeCube accent="orange" className="absolute inset-0 h-full w-full" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
