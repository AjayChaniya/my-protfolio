import type { Metadata } from "next";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects, siteData } from "../siteData";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend projects and case studies by Ajay Chaniya.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <PageTransition>
      <main className="mx-auto flex w-[min(1180px,calc(100%-1.25rem))] flex-col gap-8 px-1 pb-16 pt-28 sm:px-2">
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-surface)] p-6 backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="Projects"
            title="Case studies that show how I approach modern frontend delivery."
            copy={`${siteData.firstName} builds interfaces that balance visual quality, motion, responsiveness, and maintainable implementation.`}
          />
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <ProjectCard project={featuredProject} />
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
