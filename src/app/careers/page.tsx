import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Cta from "@/components/sections/Cta";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { ArrowDown01Icon, Briefcase01Icon } from "@hugeicons/core-free-icons";
import { CAREERS_EMAIL, roles } from "@/content/careers";
import { SITE, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers: Open positions",
  description:
    "Join Axiom Black in Newark, NJ, where licensed engineering meets in-house technology for municipal utilities and public agencies. Current opening: Engineering Intern.",
  path: "/careers",
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-ab-blue" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersPage() {
  const jobSchemas = roles.map((r) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: r.title,
    description: r.summary,
    employmentType: "INTERN",
    datePosted: "2026-10-21",
    hiringOrganization: { "@type": "Organization", name: SITE.name, sameAs: SITE.url },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Newark", addressRegion: "NJ", postalCode: "07103", addressCountry: "US" },
    },
  }));

  return (
    <>
      <JsonLd data={jobSchemas} />
      <section>
        <Container className="pt-[150px] md:pt-[190px]">
          <Eyebrow icon={Briefcase01Icon}>Careers</Eyebrow>
          <h1 className="mt-6 text-[clamp(40px,6vw,76px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
            Current openings.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-body">
            We hire engineers, technologists and consultants who want hands-on work that ships, for the
            communities that depend on it.
          </p>
        </Container>
      </section>

      <section className="pb-8 pt-16 md:pt-20">
        <Container>
          <p className="border-b border-line pb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-muted">
            {roles.length} open {roles.length === 1 ? "position" : "positions"}
          </p>
          {roles.map((r) => (
            <details key={r.slug} id={r.slug} className="group border-b border-line">
              <summary className="grid cursor-pointer list-none grid-cols-1 items-center gap-2 py-7 md:grid-cols-[1fr_200px_200px_40px] md:gap-8 [&::-webkit-details-marker]:hidden">
                <span className="text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.02em] text-ink">{r.title}</span>
                <span className="text-[15px] text-body">{r.type}</span>
                <span className="text-[15px] text-body">{r.location}</span>
                <Icon icon={ArrowDown01Icon} size={20} className="text-muted transition-transform group-open:rotate-180 md:justify-self-end" strokeWidth={2} />
              </summary>
              <div className="grid gap-10 pb-10 text-[16px] leading-relaxed text-body lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                  <p className="max-w-[62ch]">{r.summary}</p>
                  <List title="Responsibilities" items={r.responsibilities} />
                  <List title="Qualifications" items={r.qualifications} />
                </div>
                <div className="space-y-8">
                  <List title="What you'll gain" items={r.gain} />
                  <div className="border border-line bg-surface-2 p-7">
                    <h3 className="text-[18px] font-medium text-ink">How to apply</h3>
                    <p className="mt-2">
                      Email your resume and portfolio to <span className="text-ink">{CAREERS_EMAIL}</span> with the
                      subject line <span className="text-ink">&ldquo;{r.applySubject}&rdquo;</span>.
                    </p>
                    <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(r.applySubject)}`} className="ab-btn mt-6">
                      Apply by email
                    </a>
                  </div>
                </div>
              </div>
            </details>
          ))}

          <div className="mt-12 border border-line bg-surface-2 p-8 md:p-10">
            <h2 className="text-[22px] font-medium text-ink">Don&apos;t see your role?</h2>
            <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-body">
              We&apos;re always glad to meet good people. Send your background and what you&apos;d want to work on
              to <span className="text-ink">{CAREERS_EMAIL}</span>.
            </p>
            <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Open application")}`} className="ab-btn-white mt-6">
              Send an open application
            </a>
          </div>
        </Container>
      </section>

      <Cta headline="Let’s build something that lasts." cta={{ label: "Start a project", href: "/contact" }} />
    </>
  );
}
