import { cn } from "@/lib/utils";
import type { ReactNode, CSSProperties } from "react";

export function Section({
  className,
  children,
  id,
  title,
  style,
  underlineColor,
}: {
  className?: string;
  children: ReactNode;
  id: string;
  title?: string;
  style?: CSSProperties;
  underlineColor?: string;
}) {
  return (
    <section
      id={id}
      style={style}
      className={cn("py-16 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700", className)}
    >
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="inline-block">
              {title}
              {underlineColor ? (
                <div className="block h-1 w-full mt-2 rounded-full" style={{ backgroundColor: underlineColor }} />
              ) : (
                <div className="block h-1 w-full mt-2 rounded-full bg-gradient-to-r from-primary to-[#E1D5E0]" />
              )}
            </span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
