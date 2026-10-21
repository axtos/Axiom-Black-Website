import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-driven fade/lift in pure CSS (see `.ab-reveal` in globals.css). Content is
 * visible by default: the animation only applies where the browser supports
 * view timelines and the visitor allows motion, so crawlers, no-JS and
 * reduced-motion visitors always see the section. `delay` staggers siblings.
 */
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={cn("ab-reveal", className)} style={delay ? { animationRangeStart: `entry ${Math.round(delay * 100)}%` } : undefined}>
      {children}
    </div>
  );
}
