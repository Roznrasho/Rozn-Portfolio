"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Section } from "./Section";
import { GradientButton } from "./GradientButton";
import { useLanguage } from "@/context/language";

export default function HeroSection() {
  const portrait = PlaceHolderImages.find(img => img.id === 'rozn-rasho-portrait');
  const { t } = useLanguage();

  return (
    <Section id="home" className="pt-24 md:pt-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          {portrait && (
            <Image
              src={portrait.imageUrl}
              alt="Portrait of Rozn Rasho"
              width={400}
              height={400}
              data-ai-hint={portrait.imageHint}
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              priority
            />
          )}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            {t("hero.statement")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <GradientButton asChild>
              <a href="#contact">{t("hero.get_in_touch")}</a>
            </GradientButton>
            <Button variant="default" size="default" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="default" size="default" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
