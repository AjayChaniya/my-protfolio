import type { Metadata } from "next";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { featuredSkills, skillGroups, techStack } from "../siteData";

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, and workflow skills used by Ajay Chaniya to build polished web experiences.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-8 px-1 pb-16 pt-28 sm:px-2">
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="Skills"
            title="A practical stack for building responsive, modern, and scalable frontend experiences."
            copy="My toolkit covers interface development, frontend architecture, design implementation, and the workflow needed to ship polished products."
          />
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredSkills.map((skill) => (
            <article
              key={skill.name}
              className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-surface)] font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                {skill.icon}
              </div>
              <h2 className="mt-4 font-[family:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                {skill.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{skill.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-6"
            >
              <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {group.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--muted-strong)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6">
          <SectionHeading eyebrow="Toolkit" title="Technologies I use regularly." />
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--muted-strong)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
