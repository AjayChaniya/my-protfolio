import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { contactLinks, siteData } from "../siteData";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ajay Chaniya for portfolio builds, landing pages, and frontend collaborations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-8 px-1 pb-16 pt-28 sm:px-2">
        <section className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something thoughtful, performant, and premium."
              copy="I’m available for freelance work, portfolio redesigns, landing pages, and frontend-heavy product experiences."
            />
            <div className="rounded-[1.5rem] border border-[var(--accent-border)] bg-[var(--accent-surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Status</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                {siteData.availability}. Based in {siteData.location} and comfortable working remotely.
              </p>
            </div>
          </div>

          <form className="grid gap-4 rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <label className="grid gap-2 text-sm font-medium text-[var(--muted-strong)]">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-[var(--border)] bg-[var(--input-surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent-border)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--muted-strong)]">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-[var(--border)] bg-[var(--input-surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent-border)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--muted-strong)]">
              Message
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--input-surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent-border)]"
              />
            </label>
            <Link
              href={`mailto:${siteData.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-5 font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-1"
            >
              Send via Email
            </Link>
          </form>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--card-surface)] p-5 transition duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-soft)]">
                {link.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{link.value}</p>
            </Link>
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
