import { categoryColor, type BlogCategory } from "@/content/blog";

/** Outlined pill in the category's colour, readable on the black canvas. */
export default function CategoryTag({ category, className }: { category: BlogCategory; className?: string }) {
  const color = categoryColor[category];
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${className ?? ""}`}
      style={{ color, borderColor: `${color}66` }}
    >
      {category}
    </span>
  );
}
