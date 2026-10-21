import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/contact/ContactForm";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { SITE, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact: Start a project",
  description:
    "Tell Axiom Black about your water system, infrastructure project or technology need. Newark, NJ office open Monday to Friday, 9 AM to 6 PM.",
  path: "/contact",
});

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=511+South+Orange+Ave+Newark+NJ+07103";

export default function ContactPage() {
  return (
    <section className="pb-24 md:pb-32">
      <Container className="pt-[140px] md:pt-[170px]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow icon={Mail01Icon}>Contact</Eyebrow>
            <h1 className="mt-6 max-w-[14ch] text-[clamp(36px,5vw,64px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
              Start a project with Axiom Black.
            </h1>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-body">
              Tell us about your system, project or technology need, and we&apos;ll get back to you to
              set up a conversation.
            </p>

            <dl className="mt-12 border-t border-line">
              <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[14px] text-muted">Office</dt>
                <dd className="text-[15px] text-ink">
                  511 South Orange Ave #2238
                  <br />
                  Newark, NJ 07103
                  <br />
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[14px] text-body underline underline-offset-4 hover:text-ink">
                    Open in Google Maps
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[14px] text-muted">Hours</dt>
                <dd className="text-[15px] text-ink">Monday to Friday, 9:00 AM to 6:00 PM</dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[14px] text-muted">Email</dt>
                <dd className="text-[15px]"><a href={`mailto:${SITE.email}`} className="text-ink hover:underline">{SITE.email}</a></dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[14px] text-muted">Phone</dt>
                <dd className="text-[15px]"><a href="tel:+18624209525" className="text-ink hover:underline">+1 (862) 420 9525</a></dd>
              </div>
            </dl>
          </div>

          <div className="border border-line bg-surface-2 p-7 md:p-10">
            <h2 className="mb-8 text-[22px] font-medium text-ink">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
