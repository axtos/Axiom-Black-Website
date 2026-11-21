"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { blogCategories, posts, type BlogCategory } from "@/content/blog";

type Filter = "All" | BlogCategory;

export default function BlogIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const sorted = [...posts].sort((a, b) => b.published.localeCompare(a.published));
  const filtered = filter === "All" ? sorted : sorted.filter((p) => p.category === filter);
  const [featured, ...rest] = filtered;
  // Only offer filters for categories that have posts.
  const present = blogCategories.filter((c) => posts.some((p) => p.category === c));
  const pills: Filter[] = present.length > 1 ? ["All", ...present] : [];

  return (
    <div>
      {pills.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter by category">
          {pills.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={p === filter}
              onClick={() => setFilter(p)}
              className={`px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                p === filter ? "bg-ink text-surface" : "bg-surface-2 text-ink ring-1 ring-line hover:ring-line-strong"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {featured && <BlogCard post={featured} featured />}

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
