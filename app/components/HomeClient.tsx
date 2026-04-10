import Image from "next/image";
import Link from "next/link";
import PageTransition from "./PageTransition";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import {
  blogs,
  contactLinks,
  experience,
  featuredSkills,
  projects,
  services,
  siteData,
  skillGroups,
  techStack,
} from "../siteData";

export default function HomeClient() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <PageTransition className="relative z-10">
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-10 px-1 pb-16 pt-28 sm:px-2">
        <header
          id="home"
          className="hero-panel section-anchor relative flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden rounded-[2.2rem] border border-[var(--border)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.16)] sm:p-7 lg:p-8"
        >
          <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-80" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--muted-strong)] backdrop-blur-xl">
                <span className="status-dot" />
                {siteData.availability}
              </div>

              <div className="space-y-4">
                <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">
                  {siteData.brand}
                </p>
                <h1 className="max-w-[11ch] font-[family:var(--font-space-grotesk)] text-[clamp(3.15rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.07em] text-[var(--foreground)]">
                  {siteData.headline}
                </h1>
                <p className="max-w-2xl text-[1.03rem] leading-8 text-[var(--muted)]">
                  {siteData.shortBio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-5 font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-1"
                >
                  View Projects
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
                >
                  Contact Me
                </Link>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {siteData.stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                  >
                    <p className="font-[family:var(--font-space-grotesk)] text-3xl font-bold text-[var(--foreground)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[520px]">
              <div className="hero-image-card relative ml-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <div className="relative aspect-[0.86]">
                  <Image
                    src={siteData.profileImage}
                    alt={`${siteData.name} portrait`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.04),rgba(5,10,18,0.74))]" />
                </div>

                <div className="absolute inset-x-5 bottom-3 rounded-[1.2rem] border border-[var(--border)] bg-[var(--card-surface-strong)] p-3 backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:rounded-[1.4rem] sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted-soft)]">
                    {siteData.role}
                  </p>
                  <p className="mt-2 font-[family:var(--font-space-grotesk)] text-lg font-bold leading-7 text-[var(--foreground)] sm:text-xl">
                    Building high-quality frontend experiences with cleaner layout, motion, and performance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </header>

        <ScrollReveal className="content-section section-anchor" delay={40}>
          <section id="about" className="grid gap-5 rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-5 backdrop-blur-xl sm:p-7 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="About"
                title="Transforming Ideas into Digital Reality."
                copy={siteData.longBio}
              />
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-soft)]">
                  Introduction
                </p>
                <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[var(--muted)]">
                  {siteData.intro}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {siteData.aboutSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm font-medium text-[var(--muted-strong)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>

              <div className="grid gap-3 sm:grid-cols-3">
                {siteData.highlights.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--muted)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section" delay={70}>
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Services"
              title="What I can help you build."
              copy="A focused service set around modern frontend delivery, cleaner interfaces, and stronger visual presentation."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--card-surface)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Service
                  </p>
                  <h3 className="mt-4 font-[family:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section section-anchor" delay={90}>
          <section id="projects" className="space-y-6">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work that balances style, usability, and frontend execution."
              copy="Case studies that show how I approach product storytelling, interface quality, and modern frontend implementation."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              <ProjectCard project={featuredProject} />
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section" delay={120}>
          <section id="skills" className="space-y-6">
            <SectionHeading
              eyebrow="Skills & Stack"
              title="The tools I use to build reliable, polished interfaces."
              copy="My workflow is centered around modern React development, scalable styling systems, and frontend practices that support both performance and maintainability."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featuredSkills.map((skill) => (
                <article
                  key={skill.name}
                  className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-surface)] font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                    {skill.icon}
                  </div>
                  <h3 className="mt-4 font-[family:var(--font-space-grotesk)] text-xl font-bold text-[var(--foreground)]">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{skill.description}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--card-surface)] p-5 backdrop-blur-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
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
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--muted-strong)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section section-anchor" delay={140}>
          <section id="experience" className="space-y-6">
            <SectionHeading
              eyebrow="Experience"
              title="A timeline of focused frontend growth."
              copy="From self-driven practice to client-facing interface work, each step has been about improving design quality, frontend architecture, and delivery standards."
            />
            <div className="relative grid gap-5 before:hidden before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-[var(--timeline-line)] lg:before:block lg:before:left-1/2">
              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className={`relative rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] p-5 backdrop-blur-xl lg:w-[calc(50%-1.25rem)] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <span className="hidden lg:block absolute left-4 top-6 h-3 w-3 rounded-full border border-[var(--accent-border)] bg-[var(--accent-strong)] shadow-[0_0_18px_rgba(125,211,252,0.45)] lg:left-auto lg:right-[-1.66rem]" />
                  {index % 2 === 1 ? (
                    <span className="hidden lg:block absolute left-[-1.66rem] top-6 h-3 w-3 rounded-full border border-[var(--accent-border)] bg-[var(--accent-strong)] shadow-[0_0_18px_rgba(125,211,252,0.45)]" />
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-3 font-[family:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--muted-strong)]">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                  <ul className="mt-4 grid gap-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="rounded-[1rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-7 text-[var(--muted)]"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section" delay={160}>
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Writing"
              title="Thoughts on better frontend presentation."
              copy="Short pieces around layout quality, interaction design, and the small frontend decisions that improve perceived product quality."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.title}
                  className="group overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="relative min-h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,16,0.04),rgba(6,10,16,0.64))]" />
                  </div>
                  <div className="space-y-4 p-5">
                    <h3 className="font-[family:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                      {blog.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">{blog.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="content-section section-anchor" delay={180}>
          <section
            id="contact"
            className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.94fr_1.06fr]"
          >
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something polished, fast, and memorable."
                copy="Open to freelance work, frontend roles, landing pages, and design-forward product interfaces."
              />
              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm font-semibold text-[var(--muted-strong)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <form className="grid gap-4 rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>
              <label className="grid gap-2 text-sm font-medium text-[var(--muted-strong)]">
                Project type
                <input
                  type="text"
                  placeholder="Portfolio, landing page, dashboard..."
                  className="rounded-2xl border border-[var(--border)] bg-[var(--input-surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent-border)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--muted-strong)]">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell me a little about your project..."
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--input-surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent-border)]"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`mailto:${siteData.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-5 font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-1"
                >
                  Send via Email
                </Link>
                <p className="text-sm text-[var(--muted)]">
                  For direct contact: {siteData.email}
                </p>
              </div>
            </form>
          </section>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
}
