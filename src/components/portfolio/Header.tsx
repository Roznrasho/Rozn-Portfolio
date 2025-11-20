"use client";

import * as React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useLanguage } from "@/context/language";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("home");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [suspendScrollSync, setSuspendScrollSync] = React.useState(false);
  const suspendTimer = React.useRef<number | null>(null);
  const rafId = React.useRef<number | null>(null);

  const { lang, toggleLang, t } = useLanguage();

  // Use IntersectionObserver to reliably detect which section is in view.
  React.useEffect(() => {
    // keep a lightweight scroll listener for header background only
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    const sectionIds = navLinks.map((l) => l.href.substring(1));

    // prefer sections that are mostly visible (>=50%). This reduces flicker
    // for tall/pinned sections like the projects-scroller.
    const observer = new IntersectionObserver(
      (entries) => {
        if (suspendScrollSync) return; // don't update while suspended after click

        try {
          // choose the section whose center is nearest to viewport center
          const viewportMid = window.innerHeight / 2;
          let bestId: string | null = null;
          let bestDistance = Infinity;

          sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const center = (rect.top + rect.bottom) / 2;
            const distance = Math.abs(center - viewportMid);
            if (distance < bestDistance) {
              bestDistance = distance;
              bestId = id;
            }
          });

          if (bestId) setActiveLink(bestId);
        } catch (err) {
          // fallback to entries when anything goes wrong
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            const id = visible[0].target.id;
            setActiveLink(id);
          }
        }
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: [0.35] }
    );

    const observed = new Set<string>();

    const observeAll = () => {
      sectionIds.forEach((id) => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };

    // initial attempt
    observeAll();

    // if some sections mount later (client components), retry a few times
    const retryInterval = window.setInterval(() => {
      if (observed.size >= sectionIds.length) {
        clearInterval(retryInterval);
        return;
      }
      observeAll();
    }, 300);

    // rAF-based fallback active section detector (more deterministic for pinned layouts)
    const computeActiveByCenter = () => {
      if (suspendScrollSync) return;
      try {
        const viewportMid = window.innerHeight / 2;
        let bestId: string | null = null;
        let bestDistance = Infinity;
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const center = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(center - viewportMid);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = id;
          }
        });
        if (bestId) setActiveLink(bestId);
      } catch (e) {
        // ignore
      }
    };

    const onScrollRaf = () => {
      if (rafId.current != null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        computeActiveByCenter();
      });
    };

    window.addEventListener("scroll", onScrollRaf);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollRaf);
      observer.disconnect();
      clearInterval(retryInterval);
      if (suspendTimer.current) {
        window.clearTimeout(suspendTimer.current);
        suspendTimer.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suspendScrollSync]);
  
  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-2", className)}>
        {navLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            asChild
            className={cn(
              "transition-colors text-base md:text-lg",
              activeLink === link.href.substring(1)
                ? "text-primary-foreground bg-primary/20 hover:bg-primary/30 nav-active-shadow"
                : "text-foreground hover:text-primary",
              "font-semibold"
            )}
          >
            <a
              className="nav-link"
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(link.href.substring(1));
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                try {
                  history.replaceState(null, '', link.href);
                } catch {}
                setIsMenuOpen(false);
                // ensure activeLink sticks even if the scroll handler fires
                const id = link.href.substring(1);
                setActiveLink(id);
                // suspend scroll-sync briefly so the handler doesn't override our click
                setSuspendScrollSync(true);
                if (suspendTimer.current) {
                  window.clearTimeout(suspendTimer.current);
                }
                suspendTimer.current = window.setTimeout(() => {
                  setSuspendScrollSync(false);
                  suspendTimer.current = null;
                  // reaffirm once more after suspension
                  setActiveLink(id);
                }, 700) as unknown as number;
              }}
            >
              {typeof link.key === 'string' ? t(link.key) : link.name}
            </a>
          </Button>
        ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#home" className="text-lg font-headline font-bold">
          Rozn Rasho
        </Link>

        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="default"
            onClick={() => toggleLang()}
            className="transition-colors text-foreground hover:text-primary font-semibold"
          >
            {lang === 'en' ? 'DE' : 'EN'}
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="default" size="default" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <NavLinks className="flex-col items-stretch px-4" />
        </div>
      )}
    </header>
  );
}
