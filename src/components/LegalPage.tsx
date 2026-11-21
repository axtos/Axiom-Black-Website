import Container from "@/components/ui/Container";

export type LegalSection = { heading: string; body: string[] };

/** A leading "Label:" in a paragraph is set in the ink colour so list-style clauses scan. */
function Para({ text }: { text: string }) {
  const m = text.match(/^([^:.]{3,70}):\s([\s\S]*)$/);
  if (!m) return <p>{text}</p>;
  return (
    <p>
      <span className="font-medium text-ink">{m[1]}:</span> {m[2]}
    </p>
  );
}

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <article>
      <Container className="max-w-[820px] pb-24 pt-[150px] md:pb-32 md:pt-[190px]">
        <h1 className="text-[clamp(36px,5vw,60px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">{title}</h1>
        <p className="mt-4 text-[14px] text-muted">Last updated {updated}</p>

        <nav aria-label="Sections" className="mt-10 border-y border-line py-6">
          <ol className="grid gap-x-8 gap-y-2 text-[14px] sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i + 1}`} className="text-body transition-colors hover:text-ink">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {intro && <p className="mt-10 text-[17px] leading-relaxed text-body">{intro}</p>}
        {sections.map((s, i) => (
          <section key={s.heading} id={`s${i + 1}`} className="mt-12 scroll-mt-28">
            <h2 className="text-[22px] font-medium tracking-[-0.01em] text-ink">
              {i + 1}. {s.heading}
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-body">
              {s.body.map((p) => (
                <Para key={p} text={p} />
              ))}
            </div>
          </section>
        ))}
      </Container>
    </article>
  );
}
