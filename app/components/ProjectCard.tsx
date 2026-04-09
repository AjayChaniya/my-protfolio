"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../siteData";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--project-surface)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${
        featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "min-h-[26rem]" : "min-h-64"}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[var(--project-overlay)]" />
        <div className="absolute left-4 top-4 rounded-full border border-[var(--border)] bg-[var(--project-chip-surface)] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--project-chip-text)] backdrop-blur">
          {project.year}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 p-5 sm:p-6">
        <div className="space-y-4">
          <p className="font-[family:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {project.category}
          </p>
          <div className="space-y-2">
            <h3 className="font-[family:var(--font-space-grotesk)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1] text-[var(--project-title)]">
              {project.title}
            </h3>
            <p className="text-sm font-medium leading-7 text-[var(--project-copy)]">{project.tagline}</p>
          </div>
          <p className="text-sm leading-7 text-[var(--project-copy-soft)]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--project-tag-surface)] px-3 py-1.5 text-sm text-[var(--project-tag-text)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--foreground)] px-4 font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-1"
          >
            View Case Study
          </Link>
          {project.links.live ? (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
            >
              Live Preview
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
