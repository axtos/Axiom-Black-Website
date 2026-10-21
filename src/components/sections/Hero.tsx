import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import WireframeCube from "@/components/motif/WireframeCube";
import { heroCopy } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* signature wireframe motif, drawn on load */}
      <WireframeCube className="absolute -right-24 top-24 hidden h-[620px] w-[740px] opacity-80 lg:block" />

      <Container className="relative pb-24 pt-[168px] md:pb-32 md:pt-[210px]">
        <h1 className="max-w-[19ch] text-[clamp(40px,7vw,80px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
          {heroCopy.headline[0]}
          <br className="hidden sm:block" /> <span className="text-body">{heroCopy.headline[1]}</span>
        </h1>
        <p className="mt-8 max-w-[60ch] text-[17px] leading-relaxed text-body">{heroCopy.sub}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryButton href={heroCopy.cta.href}>{heroCopy.cta.label}</PrimaryButton>
          <SecondaryButton href="/contact">Start a project</SecondaryButton>
        </div>
        <p className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.18em]">
          <span className="text-ab-blue">Engineering</span>
          <span className="text-ab-orange">Technology</span>
          <span className="text-ab-green">Consulting</span>
        </p>
      </Container>
    </section>
  );
}
