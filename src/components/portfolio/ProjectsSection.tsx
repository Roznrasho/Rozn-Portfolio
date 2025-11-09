"use client";

import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language";
import ProjectsScrollPin from "./ProjectsScrollPin";

export default function ProjectsSection() {
  const { t, lang } = useLanguage();

  // Map existing `projects` to the shape expected by ProjectsScrollPin (include imageUrl)
  const items = projects.map((p) => {
    const projectImage = PlaceHolderImages.find((img) => img.id === p.imageId);
    return {
      id: p.id,
      title: (lang === "de" && p.title_de) ? p.title_de : p.title,
      description: (lang === "de" && p.description_de) ? p.description_de : p.description,
      imageUrl: projectImage?.imageUrl || "/placeholder-images/default.jpg",
      githubUrl: p.githubUrl,
      liveUrl: p.liveUrl,
    };
  });

  return <ProjectsScrollPin items={items} />;
}
