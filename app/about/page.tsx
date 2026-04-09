import type { Metadata } from "next";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { experience, siteData } from "../siteData";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ajay Chaniya, a frontend developer focused on premium interfaces and frontend quality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-8 px-1 pb-16 pt-28 sm:px-2">
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="About"
            title="Frontend development with a strong eye for polish, hierarchy, and user experience."
            copy={siteData.longBio}
          />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-6">
            <p className="text-sm leading-8 text-[var(--muted)]">
              {siteData.intro}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {siteData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                >
                  <p className="font-[family:var(--font-space-grotesk)] text-3xl font-bold text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-6">
            <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Core Strengths
            </p>
            <div className="mt-5 grid gap-3">
              {siteData.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4 text-sm leading-7 text-[var(--muted)]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="space-y-5">
          <SectionHeading
            eyebrow="Timeline"
            title="A steady path of frontend growth."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  {item.period}
                </p>
                <h2 className="mt-3 font-[family:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                  {item.role}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[var(--muted-strong)]">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
