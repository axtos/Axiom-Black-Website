"use client";

import { useActionState } from "react";
import Icon from "@/components/ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { submitContact, type ContactState } from "@/app/contact/actions";

const field =
  "w-full border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-pebble focus:border-ink";
const label = "mb-2 block text-[14px] font-medium text-ink";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "sent") {
    return (
      <div className="border border-line bg-surface-2 p-10" role="status">
        <h3 className="text-[22px] font-medium text-ink">Thanks, we&apos;ll be in touch.</h3>
        <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-body">
          Your message has been sent to our team. We usually reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* honeypot: hidden from people, tempting to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="fn">First name*</label>
          <input id="fn" name="firstName" required className={field} placeholder="Jane" />
        </div>
        <div>
          <label className={label} htmlFor="ln">Last name*</label>
          <input id="ln" name="lastName" required className={field} placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="email">Work email*</label>
        <input id="email" name="email" type="email" required className={field} placeholder="jane@agency.gov" />
      </div>
      <div>
        <label className={label} htmlFor="org">Organization*</label>
        <input id="org" name="organization" required className={field} placeholder="City of Newark" />
      </div>
      <div>
        <label className={label} htmlFor="role">Role</label>
        <input id="role" name="role" className={field} placeholder="Public Works Director" />
      </div>
      <div>
        <label className={label} htmlFor="msg">What would you like to talk about?</label>
        <textarea id="msg" name="message" rows={4} className={`${field} resize-none`} placeholder="A quick sentence about your system or project." />
      </div>
      {state.status === "error" && (
        <p role="alert" className="text-[15px] text-ink">
          {state.message} Please try again, or email{" "}
          <a href="mailto:hello@axiomblack.com" className="underline">hello@axiomblack.com</a>.
        </p>
      )}
      <button type="submit" disabled={pending} className="ab-btn group disabled:opacity-60">
        <span>{pending ? "Sending…" : "Book a demo"}</span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] border border-white/40 transition-transform group-hover:translate-x-[2px]">
          <Icon icon={ArrowRight01Icon} size={15} className="text-white" strokeWidth={2} />
        </span>
      </button>
    </form>
  );
}
