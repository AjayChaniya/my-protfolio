"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, siteData } from "../siteData";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleNavClick = (sectionId: string, closeMenu = false) => {
    if (isHome) {
      setActiveSection(sectionId);
    }

    if (closeMenu) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionIds = navLinks.map((link) => link.href.replace("/#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 18);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      if (scrollTop < 80) {
        setActiveSection("home");
        return;
      }

      const viewportAnchor = window.innerHeight * 0.35;
      const active = sections.reduce<{
        id: string;
        distance: number;
        inView: boolean;
      } | null>((closest, section) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
        const distance = Math.abs(rect.top - viewportAnchor);
        const next = { id: section.id, distance, inView: isInView };

        if (!closest) {
          return next;
        }

        if (next.inView && !closest.inView) {
          return next;
        }

        if (next.inView === closest.inView && next.distance < closest.distance) {
          return next;
        }

        return closest;
      }, null);

      if (active?.id) {
        setActiveSection(active.id);
      }
    };

    const syncWithHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        return;
      }

      updateActiveSection();
    };

    updateActiveSection();
    syncWithHash();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", syncWithHash);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", syncWithHash);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome, pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="pointer-events-auto mx-auto mb-3 max-w-6xl">
        <div
          className="nav-progress"
          style={{ transform: `scaleX(${Math.max(progress, 3) / 100})` }}
        />
      </div>

      <nav
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:px-6 ${
          scrolled || !isHome
            ? "border-[var(--border)] bg-[var(--nav-surface)] shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
            : "border-[var(--border)] bg-[var(--nav-surface-soft)] shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        }`}
      >
        <Link
          href="/"
          className="font-[family:var(--font-space-grotesk)] text-sm font-bold tracking-[0.28em] text-[var(--foreground)] transition duration-300 hover:opacity-80 sm:text-base"
        >
          {siteData.brand}
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "");
            const active = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(sectionId)}
                aria-current={active ? "page" : undefined}
                className={`nav-link rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                  active
                    ? "nav-link-active"
                    : "text-[var(--muted-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        className={`pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--nav-surface)] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem] p-3 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "");
            const active = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(sectionId, true)}
                aria-current={active ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--surface-hover)] text-[var(--foreground)]"
                    : "text-[var(--muted-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
