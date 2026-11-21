import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/** Everything is public. AI crawlers are named explicitly so the intent is on record. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended", "meta-externalagent", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
