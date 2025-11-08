"use client";

import { experiences } from "@/lib/data";
import { Section } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language";

export default function ExperienceSection() {
  const { t, lang } = useLanguage();

  return (
    <Section id="experience" title={t("section.experience")}>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:grid md:grid-cols-2 md:gap-8 items-start relative"
            >
              <div
                className={`md:flex ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start md:col-start-2"
                }`}
              >
                {index % 2 === 0 && (
                   <div className="hidden md:block text-right pr-8">
                     <p className="font-semibold text-muted-foreground">{exp.period}</p>
                   </div>
                )}
              </div>
              
              <div
                className={`flex items-center absolute top-5 left-1/2 -translate-x-1/2
                  ${index % 2 === 0 ? "md:left-1/2" : "md:left-1/2"} hidden md:flex`}
              >
                <div className="w-4 h-4 rounded-full bg-primary z-10" />
              </div>

              <div
                className={`col-span-1 ${
                  index % 2 === 0 ? "md:text-left" : "md:col-start-1 md:row-start-1 md:text-right"
                }`}
              >
                <Card className="w-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 bg-primary/10 rounded-full">
                        {exp.type === "Work" ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                            <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                       </div>
                       <div>
                         <CardTitle className="text-xl">{lang === 'de' && exp.role_de ? exp.role_de : exp.role}</CardTitle>
                         <CardDescription>{exp.company}</CardDescription>
                         <p className="md:hidden text-sm text-muted-foreground mt-1">{exp.period}</p>
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{lang === 'de' && exp.description_de ? exp.description_de : exp.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div
                className={`md:flex ${
                  index % 2 !== 0 ? "md:justify-start" : "hidden"
                }`}
              >
                {index % 2 !== 0 && (
                   <div className="hidden md:block pl-8">
                     <p className="font-semibold text-muted-foreground">{exp.period}</p>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
