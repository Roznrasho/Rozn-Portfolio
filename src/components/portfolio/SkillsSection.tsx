import { skills } from "@/lib/data";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <Section id="skills" title="My Skills" className="bg-secondary/50">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="outline"
            className="text-base md:text-lg px-4 py-2 border-primary/20 bg-background hover:bg-accent cursor-default transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
