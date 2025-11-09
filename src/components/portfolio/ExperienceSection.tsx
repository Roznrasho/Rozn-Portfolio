"use client";

import { experiences } from "@/lib/data";
import { Section } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language";

export default function ExperienceSection() {
  const { t, lang } = useLanguage();

  return (
    <Section
      id="experience"
      title={t("section.experience")}
      style={{ background: 'linear-gradient(to right, rgba(125,79,80,0.48), transparent)' }}
    >
      <div className="relative">
  {/* Vertikale Linie im Hintergrund */}
  <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:grid md:grid-cols-2 md:gap-8 items-start relative"
            >
              
              {/* NEUER BLOCK: Absolute Positionierung der Periode LINKS vom Punkt (für gerade Indizes) */}
              {index % 2 === 0 && (
                 <div className="absolute top-5 left-1/2 -translate-x-1/2 hidden md:block z-20" style={{ transform: 'translateX(-100%)' }}>
                   <p className="font-semibold text-xl text-foreground pr-3 text-right whitespace-nowrap">{exp.period}</p>
                 </div>
              )}

              {/* BLOCK: Zentraler Punkt (bleibt zentriert auf der Linie) */}
              <div
                className={`flex items-center absolute top-5 left-1/2 -translate-x-1/2 hidden md:flex z-30`}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#7C95B0' }} />
              </div>

              {/* NEUER BLOCK: Absolute Positionierung der Periode RECHTS vom Punkt (für ungerade Indizes) */}
              {index % 2 !== 0 && (
                 <div className="absolute top-5 left-1/2 -translate-x-1/2 hidden md:block z-20" style={{ transform: 'translateX(30px)' }}>
                   <p className="font-semibold text-xl text-foreground pl-3 text-left whitespace-nowrap">{exp.period}</p>
                 </div>
              )}
              
              {/* BLOCK: Die eigentliche Karte */}
              <div
                className={`col-span-1 ${
                  index % 2 === 0
                    ? "md:col-start-2 md:row-start-1 md:text-left"
                    : "md:col-start-1 md:row-start-1 md:text-right"
                }`}
              >
                <Card className="w-full border border-[#9d8189]/30 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-primary/10 rounded-full">
            {exp.type === "Work" ? (
              <Briefcase className="w-5 h-5" style={{ color: '#7C95B0' }} />
            ) : (
              <GraduationCap className="w-5 h-5" style={{ color: '#7C95B0' }} />
            )}
             </div>
                       <div>
                         <CardTitle className="text-xl">{lang === 'de' && exp.role_de ? exp.role_de : exp.role}</CardTitle>
                         <CardDescription>{exp.company}</CardDescription>
                         {/* Mobiler Zeitraum bleibt entfernt */}
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{lang === 'de' && exp.description_de ? exp.description_de : exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}