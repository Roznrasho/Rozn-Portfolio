import { skills } from "@/lib/data";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import type React from "react";
import {
  FileCode,
  Code,
  Zap,
  Server,
  Layers,
  Database,
  ExternalLink,
  Github,
  Package,
  Image,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  HTML5: FileCode,
  CSS: Code,
  JavaScript: Zap,
  "Node.js": Server,
  React: Layers,
  TypeScript: FileCode,
  Express: Server,
  MongoDB: Database,
  "Next.js": ExternalLink,
  Tailwind: Zap,
  Vite: Zap,
  Bun: Zap,
  "Git/GitHub": Github,
  Postman: Package,
  Canva: Image,
  Slack: MessageSquare,
  Render: ExternalLink,
  Vercel: ExternalLink,
};

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="My Skills"
      className=""
      style={{ background: "linear-gradient(to right, rgb(30 75 115 / 100%), transparent)" }}
    >
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {skills.map((skill) => {
          const Icon = iconMap[skill.name] ?? FileCode;
          return (
            <Badge
              key={skill.name}
              variant="outline"
              className="flex items-center gap-2 text-base md:text-lg px-4 py-2 border-primary/20 bg-background hover:bg-accent cursor-default transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50"
              title={skill.name}
              aria-label={skill.name}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{skill.name}</span>
            </Badge>
          );
        })}
      </div>
    </Section>
  );
}
