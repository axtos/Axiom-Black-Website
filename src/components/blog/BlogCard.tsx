import Link from "next/link";
import CategoryTag from "./CategoryTag";
import { formatDate, type BlogPost } from "@/content/blog";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col border border-line bg-surface-2 p-7 transition-colors hover:border-line-strong md:p-8"
    >
      <div className="flex flex-wrap items-center gap-3">
        <CategoryTag category={post.category} />
        <span className="text-[13px] text-muted">
          <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.readTime}
        </span>
      </div>
      <h3 className={featured ? "mt-6 max-w-[26ch] text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink" : "mt-5 text-[20px] font-medium leading-snug text-ink"}>
        {post.title}
      </h3>
      <p className={featured ? "mt-4 max-w-[68ch] text-[16px] leading-relaxed text-body" : "mt-3 text-[15px] leading-relaxed text-body"}>{post.excerpt}</p>
      <span className="mt-auto pt-7 text-[15px] font-medium text-ink">
        Read the post <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
