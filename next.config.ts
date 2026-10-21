import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Legacy Framer URLs (from the live sitemap) → new structure.
    const legacy: Record<string, string> = {
      "/about-axiom-black": "/about",
      "/axiom-labs": "/products/certificate-tracker",
      "/open-position": "/careers",
      "/term-of-service": "/terms",
      "/privacy-statement": "/privacy",
      "/contact-page": "/contact",
      "/water-page-axiom-black": "/solutions/water",
      "/design": "/solutions/design",
      "/modelling-and-simulation": "/solutions/modeling",
      "/risk-management-software-system": "/solutions/risk-assessment",
      "/artificial-intelligence": "/solutions/ai-machine-learning",
      "/digital-transformation-consulting": "/solutions/digital-transformation",
      "/software-development-engineering": "/solutions/software-development",
      "/data-analytics-business-intelligence-consulting": "/solutions/data-analytics",
      "/blog/process-guide": "/blog/engineering-approvals-new-jersey",
      "/team-members/:slug": "/about",
    };
    return Object.entries(legacy).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
