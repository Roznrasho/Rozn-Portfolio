import Image from "next/image";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="My Projects" className="bg-secondary/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <CardHeader>
                {projectImage && (
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={projectImage.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      data-ai-hint={projectImage.imageHint}
                      className="object-cover"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                 <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
