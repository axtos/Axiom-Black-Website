import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { solutionPages } from "@/content/solutionPages";
import { labProjects } from "@/content/products";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/solutions",
    ...Object.keys(solutionPages).map((s) => `/solutions/${s}`),
    "/products/certificate-tracker",
    ...Object.keys(labProjects).map((s) => `/products/${s}`),
    "/about",
    "/careers",
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
    "/contact",
    "/privacy",
    "/terms",
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p === "/" ? "" : p}` }));
}
