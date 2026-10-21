import Link from "next/link";
import { InstagramIcon, Linkedin02Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import Icon from "@/components/ui/Icon";
import Wordmark from "@/components/nav/Wordmark";
import { labProjects } from "@/content/products";
import { solutionGroups } from "@/content/solutions";

const [engineering, technology] = solutionGroups;

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Engineering", links: engineering.items.map((i) => ({ label: i.name, href: i.href })) },
  {
    title: "Technology",
    links: [...technology.items.map((i) => ({ label: i.name, href: i.href })), { label: "Certificate Tracker", href: "/products/certificate-tracker" }],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "AxiomLabs",
    links: Object.values(labProjects).map((l) => ({ label: l.name, href: `/products/${l.slug}` })),
  },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/* Only profiles with a real URL render. Fill in hrefs as accounts go live. */
const socials: { label: string; icon: typeof Linkedin02Icon; href?: string }[] = [
  { label: "LinkedIn", icon: Linkedin02Icon, href: "https://www.linkedin.com/company/axiom-black/" },
  { label: "X", icon: NewTwitterIcon, href: "https://x.com/Axiomblackco" },
  { label: "Instagram", icon: InstagramIcon },
];
const liveSocials = socials.filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto w-full max-w-[1284px] px-6 pt-20 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div>
            <Wordmark height={24} />
            <p className="mt-5 max-w-[26ch] text-[15px] text-body">
              From concept to creation, engineered with precision.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              511 South Orange Ave #2238,
              <br />
              Newark, NJ 07103.
            </p>
            {liveSocials.length > 0 && <div className="mt-6 flex gap-2.5">
              {liveSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-none bg-surface-2 text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-line transition-colors hover:bg-ink hover:text-surface"
                >
                  <Icon icon={s.icon} size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>}
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[15px] font-semibold text-ink">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-body transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line py-7 text-[14px] text-body md:flex-row md:items-center md:justify-between">
          <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© Axiom Black, LLC {new Date().getFullYear()}. All rights reserved.</span>
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">{l.label}</Link>
            ))}
          </span>
          <span className="flex items-center gap-6 font-semibold uppercase tracking-[0.14em] text-[12px]">
            <span className="text-ab-blue">Engineering</span>
            <span className="text-ab-orange">Technology</span>
            <span className="text-ab-green">Consulting</span>
          </span>
        </div>
      </div>

      {/* Decorative scanline wordmark (GeistPixel) */}
      <div className="overflow-hidden px-6 pb-6" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-center font-pixel leading-none text-ink/85"
           style={{ fontSize: "clamp(64px, 15vw, 230px)" }}>
          Axiom Black
        </p>
      </div>
    </footer>
  );
}
