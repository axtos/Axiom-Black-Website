"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown01Icon, ArrowRight01Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import Icon from "@/components/ui/Icon";
import Wordmark from "./Wordmark";
import { navMenus, type NavMenu } from "@/content/nav";
import { cn } from "@/lib/cn";

const accentColor: Record<NavMenu["accent"], string> = {
  blue: "#0049ED",
  orange: "#FF8710",
  none: "#ffffff",
};

/**
 * Three menus (Engineering, Technology, Company). Every menu link is always in
 * the HTML so crawlers and assistive tech see it; closed menus are hidden with
 * `visibility`, which also takes them out of the tab order. Opens on hover or
 * click, closes on Escape, outside click, or focus leaving the menu.
 */
export default function Navbar() {
  const [open, setOpen] = useState<NavMenu["id"] | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      document.getElementById(`nav-trigger-${open}`)?.focus();
      setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const solid = scrolled || open !== null || mobile;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-line bg-black/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="relative mx-auto flex h-[78px] w-full max-w-[1284px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Wordmark height={34} />

        <nav ref={navRef} aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-9">
            {navMenus.map((m) => {
              const isOpen = open === m.id;
              return (
                <li
                  key={m.id}
                  className="relative"
                  onMouseEnter={() => setOpen(m.id)}
                  onMouseLeave={() => setOpen(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen((o) => (o === m.id ? null : o));
                  }}
                >
                  <button
                    id={`nav-trigger-${m.id}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`nav-menu-${m.id}`}
                    onClick={() => setOpen(isOpen ? null : m.id)}
                    className="inline-flex items-center gap-1.5 py-2 text-[16px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-ink/70"
                  >
                    {m.label}
                    <Icon icon={ArrowDown01Icon} size={15} className={cn("text-muted transition-transform", isOpen && "rotate-180")} strokeWidth={2} />
                  </button>
                  <div
                    id={`nav-menu-${m.id}`}
                    className={cn(
                      "absolute top-full pt-3 transition duration-150",
                      m.id === "company" ? "right-0" : "left-1/2 -translate-x-1/2",
                      isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
                    )}
                  >
                    <MenuPanel menu={m} onNavigate={() => setOpen(null)} />
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="ab-btn hidden !px-5 !py-2.5 sm:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            aria-controls="mobile-nav"
            onClick={() => setMobile((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          >
            <Icon icon={mobile ? Cancel01Icon : Menu01Icon} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile: one accordion per menu */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!mobile}
        className="fixed inset-x-0 top-[78px] z-40 h-[calc(100dvh-78px)] overflow-y-auto border-t border-line bg-black lg:hidden"
      >
        <div className="mx-auto w-full max-w-[1284px] px-6 py-4">
          {navMenus.map((m) => (
            <details key={m.id} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[18px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden="true" className="h-2 w-2" style={{ background: accentColor[m.accent] }} />
                  {m.label}
                </span>
                <Icon icon={ArrowDown01Icon} size={18} className="text-muted transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="pb-4">
                {m.sections.map((s, i) => (
                  <div key={i} className={i > 0 ? "mt-3" : undefined}>
                    {s.label && <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{s.label}</p>}
                    {s.links.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setMobile(false)} className="block px-1 py-2.5 text-[16px] text-ink-soft hover:text-ink">
                        {l.name}
                      </Link>
                    ))}
                  </div>
                ))}
                {m.overview && (
                  <Link href={m.overview.href} onClick={() => setMobile(false)} className="mt-2 block px-1 py-2.5 text-[14px] text-muted hover:text-ink">
                    {m.overview.label} →
                  </Link>
                )}
              </div>
            </details>
          ))}
          <Link href="/contact" onClick={() => setMobile(false)} className="ab-btn mt-6 w-full justify-center">
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  const wide = menu.sections.length > 1;
  return (
    <div
      className={cn(
        "overflow-hidden border border-line bg-surface-2 shadow-[0_24px_64px_rgba(0,0,0,0.6)]",
        wide ? "w-[680px]" : "w-[380px]",
        "max-w-[92vw]"
      )}
      style={{ borderTop: `2px solid ${accentColor[menu.accent]}` }}
    >
      <div className={cn("grid", wide && "grid-cols-2 divide-x divide-line")}>
        {menu.sections.map((s, i) => (
          <div key={i} className="p-4">
            {s.label && <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{s.label}</p>}
            <ul>
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={onNavigate} className="flex items-start gap-3.5 px-3 py-2.5 transition-colors hover:bg-surface-3 focus-visible:bg-surface-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line" style={{ color: accentColor[menu.accent] }}>
                      <Icon icon={l.icon} size={18} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium text-ink">{l.name}</span>
                      <span className="mt-0.5 block max-w-[32ch] text-[13px] leading-relaxed text-body">{l.descriptor}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {menu.overview && (
        <Link href={menu.overview.href} onClick={onNavigate} className="flex items-center justify-between border-t border-line px-7 py-3.5 text-[14px] font-medium text-ink-soft transition-colors hover:bg-surface-3 hover:text-ink">
          {menu.overview.label}
          <Icon icon={ArrowRight01Icon} size={15} strokeWidth={2} />
        </Link>
      )}
    </div>
  );
}
