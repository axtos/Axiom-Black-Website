import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Cta from "@/components/sections/Cta";
import BlogIndex from "@/components/blog/BlogIndex";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Blog: Projects, field notes and R&D",
  description:
    "Delivered projects, technical field notes on water infrastructure and approvals, AxiomLabs R&D, and product updates from Axiom Black.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section>
        <Container className="pt-[150px] md:pt-[190px]">
          <Eyebrow icon={BookOpen01Icon}>The Axiom Black Blog</Eyebrow>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(38px,6vw,72px)] font-medium leading-[1.04] tracking-[-0.03em] text-ink">
            Projects, field notes and R&amp;D.
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-body">
            What we&apos;ve delivered, what we&apos;ve learned doing it, and what AxiomLabs is building next,
            written by the engineers and developers doing the work.
          </p>
        </Container>
      </section>

      <section className="pb-24 pt-14 md:pb-28">
        <Container>
          <BlogIndex />
        </Container>
      </section>

      <Cta headline="Have a project like these?" cta={{ label: "Start a project", href: "/contact" }} />
    </>
  );
}
