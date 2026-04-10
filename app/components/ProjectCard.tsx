"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const laptopFrameSrc =
    "https://www.neuratech.co/static/website/images/project_images/Recruitr/Recruitr_Laptop.png";
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");

    const updateTouchState = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateTouchState();
    mediaQuery.addEventListener("change", updateTouchState);

    return () => mediaQuery.removeEventListener("change", updateTouchState);
  }, []);

  const shouldFlip = isTouchDevice ? isFlipped : false;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[1.8rem] cursor-pointer border border-[color:color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--project-surface)] shadow-[0_26px_90px_rgba(0,0,0,0.24)] ring-1 ring-white/5 [perspective:1800px] ${
        featured ? "min-h-[26rem] sm:min-h-[28rem]" : "min-h-[24rem] sm:min-h-[26rem]"
      }`}
      onClick={(event) => {
        if (!isTouchDevice) return;

        const target = event.target as HTMLElement | null;
        if (target?.closest("a, button")) return;

        setIsFlipped((current) => !current);
      }}
    >
      <div
        className={`relative cursor-pointer h-full w-full transform-gpu transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] motion-reduce:transition-none motion-reduce:transform-none ${
          isTouchDevice
            ? ""
            : "group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
        }`}
        style={isTouchDevice ? { transform: shouldFlip ? "rotateY(180deg)" : "rotateY(0deg)" } : undefined}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,var(--project-card-front-start),var(--project-card-front-end))]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg) translateZ(1px)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_34%)] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(155deg,transparent_10%,rgba(255,255,255,0.03)_10.5%,transparent_24%,transparent_76%,rgba(255,255,255,0.04)_76.5%,transparent_90%)] opacity-60" />
          <div className="absolute left-1/2 top-[30%] z-20 flex w-full max-w-[19rem] -translate-x-1/2 -translate-y-[34%] justify-center px-4 sm:max-w-[21rem]">
            <div
              className="relative w-full aspect-[424/394] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-3px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute left-[12%] top-[23%] z-80 h-[52%] w-[77%] overflow-hidden rounded-[0.35rem] bg-[var(--project-card-front-screen)] shadow-[0_0_0_1px_var(--project-card-front-screen-border),0_18px_34px_rgba(0,0,0,0.18)]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  priority={featured}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <Image
                src={laptopFrameSrc}
                alt="Laptop mockup"
                fill
                priority={featured}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative z-40 object-contain transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:translateY(-2px)_scale(1.01)] pointer-events-none"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
            <div className="space-y-2">
              <p className="inline-flex rounded-full border border-white/10 bg-[var(--project-card-front-chip)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--project-card-front-chip-text)] backdrop-blur">
                {project.category}
              </p>
              <h3 className="max-w-[12ch] font-[family:var(--font-space-grotesk)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none text-[var(--project-card-front-title)]">
                {project.title}
              </h3>
            </div>
            <span className="rounded-full border border-white/12 bg-[var(--project-card-front-chip)] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--project-card-front-year)] backdrop-blur">
              {project.year}
            </span>
          </div>

          {isTouchDevice ? (
            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-[var(--project-card-front-chip)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--project-card-front-chip-text)] backdrop-blur">
              Tap to flip
            </div>
          ) : null}
        </div>

        <div
          className={`absolute inset-0 relative h-full w-full rounded-[1.8rem] bg-[linear-gradient(180deg,var(--project-card-back-start),var(--project-card-back-end))] ${
            isTouchDevice
              ? "flex flex-col overflow-y-auto p-4 pb-5"
              : "grid grid-rows-[auto_auto_1fr_auto] gap-3 overflow-hidden p-4 sm:p-5"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg) translateZ(1px)" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)] opacity-70" />
          <div className="flex items-center justify-between gap-3">
            <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--project-card-back-text)_22%,transparent)] bg-[var(--project-card-back-surface)] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)] backdrop-blur">
              {project.category}
            </p>
            <span className="rounded-full border border-[color:color-mix(in_srgb,var(--project-card-back-text)_18%,transparent)] bg-[var(--project-card-back-surface)] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--project-card-back-muted)]">
              {project.year}
            </span>
          </div>

          {isTouchDevice ? (
            <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-3">
              <div className="space-y-1">
                <h3 className="font-[family:var(--font-space-grotesk)] text-[1.15rem] font-bold leading-[1.05] text-[var(--project-card-back-title)]">
                  {project.title}
                </h3>
                <p
                  className="text-[0.86rem] font-medium leading-5 text-[var(--project-card-back-text)]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              <div className="grid gap-2">
                <div className="rounded-[1rem] border border-[color:color-mix(in_srgb,var(--project-card-back-text)_16%,transparent)] bg-[var(--project-card-back-surface)] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Challenge
                  </p>
                  <p
                    className="mt-1 text-[0.8rem] leading-5 text-[var(--project-card-back-text)]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>

                <div className="rounded-[1rem] border border-[color:color-mix(in_srgb,var(--project-card-back-text)_16%,transparent)] bg-[var(--project-card-back-surface)] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Outcome
                  </p>
                  <p
                    className="mt-1 text-[0.8rem] leading-5 text-[var(--project-card-back-text)]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:color-mix(in_srgb,var(--project-card-back-text)_18%,transparent)] bg-[var(--project-card-back-tag-bg)] px-2 py-1 text-[0.72rem] text-[var(--project-card-back-tag-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative z-10 grid min-h-0 gap-3">
              <div className="space-y-1.5">
                <h3 className="font-[family:var(--font-space-grotesk)] text-[clamp(1.25rem,2.2vw,1.9rem)] font-bold leading-[1.02] text-[var(--project-card-back-title)]">
                  {project.title}
                </h3>
                <p
                  className="text-sm font-medium leading-5 text-[var(--project-card-back-text)]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-[color:color-mix(in_srgb,var(--project-card-back-text)_16%,transparent)] bg-[var(--project-card-back-surface)] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Challenge
                  </p>
                  <p
                    className="mt-1.5 text-[0.86rem] leading-5 text-[var(--project-card-back-text)]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>

                <div className="rounded-[1.2rem] border border-[color:color-mix(in_srgb,var(--project-card-back-text)_16%,transparent)] bg-[var(--project-card-back-surface)] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Outcome
                  </p>
                  <p
                    className="mt-1.5 text-[0.86rem] leading-5 text-[var(--project-card-back-text)]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 overflow-hidden">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:color-mix(in_srgb,var(--project-card-back-text)_18%,transparent)] bg-[var(--project-card-back-tag-bg)] px-2.5 py-1 text-[0.78rem] text-[var(--project-card-back-tag-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            className={`relative z-10 mt-auto flex flex-wrap gap-2 pt-4 ${
              isTouchDevice ? "shrink-0 border-t border-[color:color-mix(in_srgb,var(--project-card-back-text)_12%,transparent)]" : ""
            }`}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--project-card-cta-primary-border)] bg-[var(--project-card-cta-primary-bg)] px-3.5 text-[0.9rem] font-semibold text-[var(--project-card-cta-primary-text)] shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.16)]"
              onClick={(event) => event.stopPropagation()}
            >
              View Case Study
            </Link>
            {project.links.live ? (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--project-card-cta-secondary-border)] bg-[var(--project-card-cta-secondary-bg)] px-3.5 text-[0.9rem] font-semibold text-[var(--project-card-cta-secondary-text)] shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
                onClick={(event) => event.stopPropagation()}
              >
                Live Preview
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
