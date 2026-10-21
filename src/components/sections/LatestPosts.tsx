import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SecondaryButton from "@/components/ui/SecondaryButton";
import BlogCard from "@/components/blog/BlogCard";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { posts } from "@/content/blog";

/** The three newest posts. Renders nothing until there is at least one. */
export default function LatestPosts() {
  const latest = [...posts].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 3);
  if (!latest.length) return null;
  return (
    <section className="pb-24 md:pb-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow icon={BookOpen01Icon}>From the blog</Eyebrow>
            <h2 className="ab-h2 mt-5 max-w-[24ch]">Projects, field notes and R&amp;D.</h2>
          </div>
          <SecondaryButton href="/blog" className="shrink-0">All posts</SecondaryButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
