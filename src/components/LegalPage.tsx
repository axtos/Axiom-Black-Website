import Container from "@/components/ui/Container";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article>
      <Container className="max-w-[760px] pb-24 pt-[150px] md:pb-32 md:pt-[190px]">
        <h1 className="text-[clamp(36px,5vw,60px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">{title}</h1>
        <p className="mt-4 text-[14px] text-muted">Last updated {updated}</p>
        <p className="mt-8 text-[17px] leading-relaxed text-body">{intro}</p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="text-[22px] font-medium tracking-[-0.01em] text-ink">{s.heading}</h2>
            <div className="mt-3 space-y-4 text-[16px] leading-relaxed text-body">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </article>
  );
}
