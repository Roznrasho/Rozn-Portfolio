"use client";

import React, { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectsScrollPin({ items }: { items?: Item[] }) {
  // Beispiel‑Items, falls keine übergeben werden
  const sample: Item[] = [
    {
      id: "a",
      title: "Project One",
      description: "Short description of project one. Scroll to change the image.",
      imageUrl: "/placeholder-images/1.jpg",
    },
    {
      id: "b",
      title: "Project Two",
      description: "Short description of project two. This demonstrates scroll pinning.",
      imageUrl: "/placeholder-images/2.jpg",
    },
    {
      id: "c",
      title: "Project Three",
      description: "Short description of project three. Each section activates a new image.",
      imageUrl: "/placeholder-images/3.jpg",
    },
  ];

  const data = items && items.length > 0 ? items : sample;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = containerRef.current!.querySelectorAll<HTMLElement>('.projects-panel');

      // Pin the image column while scrolling through the panels
      ScrollTrigger.create({
        trigger: containerRef.current!,
        start: 'top top',
        end: () => `+=${containerRef.current!.offsetHeight - (imageRef.current?.offsetHeight || 0)}`,
        pin: imageRef.current,
        pinSpacing: true,
        anticipatePin: 1,
      });

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, containerRef);

    return () => {
      // cleanup
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ctx.revert();
    };
  }, [data]);

  // animate image transitions (fade) when active changes
  useEffect(() => {
    if (!imageRef.current) return;
    const wrappers = imageRef.current.querySelectorAll<HTMLElement>('.projects-image');
    wrappers.forEach((el, idx) => {
      if (idx === active) {
        gsap.to(el, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(el, { autoAlpha: 0, duration: 0.4, ease: 'power2.out' });
      }
    });
  }, [active]);

  return (
    <Section
      id="projects-scroll"
      title="Meine Projekte"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(30,75,115,0.46), transparent)',
        backgroundColor: 'rgba(30,75,115,0.08)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="md:flex md:items-start gap-8">
          {/* Sticky Bild-Spalte */}
          <div className="md:w-1/2">
            <div
              ref={imageRef}
              className="sticky top-24 h-[61vh] md:h-[69vh] rounded-lg overflow-hidden bg-transparent"
              aria-hidden
            >
              {data.map((d, i) => (
                <div
                  key={d.id}
                  className={`projects-image w-full h-full flex items-center justify-center transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                  style={{ position: i === active ? 'relative' : 'absolute', inset: 0 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-0">
                    <div
                      className={`w-[390px] md:w-[470px] lg:w-[550px] h-[32vh] md:h-[40vh] rounded-lg overflow-hidden shadow-lg ring-1 ring-black/6 transform transition-all duration-500 ${i === active ? 'scale-100' : 'scale-98'}`}
                      role="img"
                      aria-label={d.title}
                      style={{
                        backgroundImage: `url(${d.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollbare Textabschnitte */}
          <div className="md:w-1/2 space-y-20">
            {data.map((d) => (
              <div key={d.id} className="projects-panel min-h-[60vh] flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{d.title}</h3>
                  <p className="text-muted-foreground max-w-prose">{d.description}</p>
                  <div className="mt-6 flex gap-3">
                    {d.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={d.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}

                    {d.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={d.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
