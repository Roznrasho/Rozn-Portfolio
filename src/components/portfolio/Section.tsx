import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  className,
  children,
  id,
  title,
}: {
  className?: string;
  children: ReactNode;
  id: string;
  title?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700", className)}
    >
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {title}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#E1D5E0] mx-auto mt-2 rounded-full" />
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
