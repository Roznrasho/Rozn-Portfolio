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

  const { lang, toggleLang, t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
              ? "text-primary-foreground bg-primary/20 hover:bg-primary/30"
              : "text-foreground hover:text-primary",
            "font-semibold"
          )}
        >
          <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{
            // use translation key when present, fallback to link.name
            typeof link.key === 'string' ? t(link.key) : link.name
          }</Link>
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
