import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTransition from "../../components/PageTransition";
import StructuredData from "../../components/StructuredData";
import { getProjectBySlug, projects, siteData } from "../../siteData";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteData.firstName} Chaniya`,
      description: project.description,
      images: [project.image],
      url: `${siteData.siteUrl}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteData.firstName} Chaniya`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    url: `${siteData.siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: siteData.name,
    },
  };

  return (
    <PageTransition>
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-8 px-1 pb-16 pt-28 sm:px-2">
        <StructuredData data={schema} />

        <section className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm font-semibold text-[var(--muted-strong)] transition duration-300 hover:-translate-y-1"
            >
              Back to Projects
            </Link>
            <div className="space-y-3">
              <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.32em] text-[var(--accent)]">
                {project.category}
              </p>
              <h1 className="font-[family:var(--font-space-grotesk)] text-[clamp(2.7rem,5vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.07em] text-[var(--foreground)]">
                {project.title}
              </h1>
              <p className="text-lg leading-8 text-[var(--muted-strong)]">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--muted-strong)]"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--muted-strong)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.8rem] border border-[var(--border)]">
            <img
              src={project.image}
              alt={`${project.title} showcase`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,16,0.04),rgba(6,10,16,0.68))]" />
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--card-surface)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Challenge</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{project.challenge}</p>
          </article>
          <article className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--card-surface)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Approach</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{project.description}</p>
          </article>
          <article className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--card-surface)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Outcome</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{project.outcome}</p>
          </article>
        </section>

        {project.longDescription ? (
          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Overview</p>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-[var(--muted)]">{project.longDescription}</p>
            {project.metrics?.length ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-7 text-[var(--muted-strong)]"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap gap-3">
            {project.links.live ? (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-5 font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-1"
              >
                Live Preview
              </Link>
            ) : null}
            {project.links.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-1"
              >
                GitHub Repo
              </Link>
            ) : null}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
