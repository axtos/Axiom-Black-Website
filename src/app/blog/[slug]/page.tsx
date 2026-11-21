import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CategoryTag from "@/components/blog/CategoryTag";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/ui/Icon";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { formatDate, posts, type BlogBlock } from "@/content/blog";
import { SITE, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 className="!mt-14 text-[26px] font-medium tracking-[-0.02em] text-ink">{block.text}</h2>;
    case "steps":
      return (
        <ol className="!mt-10 border-t border-line">
          {block.items.map((s, i) => (
            <li key={s.title} className="grid gap-x-6 gap-y-2 border-b border-line py-7 sm:grid-cols-[56px_1fr]">
              <span className="font-mono text-[15px] text-ab-blue">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[19px] font-medium text-ink">{s.title}</h3>
                {s.meta && <p className="mt-1 text-[13px] uppercase tracking-[0.08em] text-muted">{s.meta}</p>}
                <p className="mt-3">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "list":
      return (
        <div className="!mt-12">
          {block.title && <h2 className="text-[22px] font-medium tracking-[-0.01em] text-ink">{block.title}</h2>}
          <ul className="mt-4 space-y-2.5">
            {block.items.map((it) => (
              <li key={it} className="flex gap-3">
                <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-ink" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return (
        <aside className="!mt-12 border-l-2 border-ab-blue bg-surface-2 px-7 py-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">{block.title}</p>
          <p className="mt-2">{block.text}</p>
        </aside>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    articleSection: post.category,
    url: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <JsonLd data={article} />
      <article>
        <Container className="max-w-[780px] pt-[140px] md:pt-[170px]">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-ink">
            <Icon icon={ArrowLeft01Icon} size={16} strokeWidth={2} /> All posts
          </Link>
          <div className="mt-8">
            <CategoryTag category={post.category} />
          </div>
          <h1 className="mt-5 text-[clamp(32px,4.8vw,54px)] font-medium leading-[1.06] tracking-[-0.03em] text-ink">{post.title}</h1>
          <p className="mt-5 text-[14px] text-muted">
            Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated && (
              <>
                {" "}· Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}
            {" "}· {post.readTime} read
          </p>
          <div className="mt-10 space-y-5 border-t border-line pt-10 text-[17px] leading-relaxed text-body">
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </Container>
      </article>
      <div className="mt-24">
        <Cta headline="Planning a project that needs approvals?" cta={{ label: "Start a project", href: "/contact" }} />
      </div>
    </>
  );
}
