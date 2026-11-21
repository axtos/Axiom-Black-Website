/**
 * Blog content. Each post is plain data, so Claude can draft one as a pull request
 * and it is published when the PR is merged. Four content types:
 * Projects (delivered work), Field Notes (technical how-to), R&D (AxiomLabs work),
 * Product Updates (Certificate Tracker and other releases).
 */
export type BlogCategory = "Projects" | "Field Notes" | "R&D" | "Product Updates";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "steps"; items: { title: string; meta?: string; body: string }[] }
  | { type: "list"; title?: string; items: string[] }
  | { type: "callout"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO dates. `updated` is set only when the post was materially revised. */
  published: string;
  updated?: string;
  readTime: string;
  body: BlogBlock[];
};

export const categoryColor: Record<BlogCategory, string> = {
  Projects: "#FFFFFF",
  "Field Notes": "#0049ED",
  "R&D": "#FF8710",
  "Product Updates": "#FF8710",
};

export const blogCategories: BlogCategory[] = ["Projects", "Field Notes", "R&D", "Product Updates"];

export const posts: BlogPost[] = [
  {
    slug: "engineering-approvals-new-jersey",
    title: "Getting Engineering Approvals for Development Projects",
    excerpt:
      "A step-by-step reference for municipalities, developers and project stakeholders on how engineering approvals work in New Jersey, from site assessment to as-built certification.",
    category: "Field Notes",
    published: "2026-03-26",
    readTime: "4 min",
    body: [
      { type: "p", text: "A step-by-step reference for municipalities, developers and project stakeholders. New Jersey edition." },
      {
        type: "p",
        text: "Engineering approval is not a single event. It is a structured sequence of reviews, agency sign-offs and compliance checkpoints that protects public safety, environmental integrity and long-term infrastructure performance. The approval process runs in six stages.",
      },
      {
        type: "steps",
        items: [
          { title: "Pre-Application & Site Assessment", meta: "Zoning review, utility mapping (2–4 weeks)", body: "Conduct a feasibility study, review zoning ordinances, assess existing infrastructure capacity, and meet with municipal engineers to identify constraints early." },
          { title: "Preliminary Engineering & Design Development", meta: "PE sealed plans, hydraulic modeling (4–8 weeks)", body: "A licensed PE prepares preliminary drawings, calculates hydraulic loads (water/wastewater), stormwater management plans, and cost estimates for agency review." },
          { title: "Planning / Zoning Board Review", meta: "Site plan application, CME review letter (4–12 weeks)", body: "Submit the site plan application to the local Planning Board. The Engineer of Record presents the project, and the board may request revisions. The CME (Municipal Engineer) provides a review report." },
          { title: "State & Regional Agency Approvals", meta: "NJDEP permits, county review (8–26 weeks)", body: "File permit applications with NJDEP (water quality, wetlands, stormwater), County Engineering, and utilities. Each agency conducts an independent technical review." },
          { title: "Final Engineering Review & Permit Issuance", meta: "Construction permit, performance bond (2–4 weeks)", body: "The municipal engineer issues final approval. Construction permits are granted by the Building Department. Bonds and escrow payments may be required before breaking ground." },
          { title: "Construction, Inspection & As-Built Certification", meta: "Field inspection, as-built survey, project close-out", body: "Construction proceeds under periodic inspection by the municipal engineer. On completion, the PE certifies as-built conditions and the municipality grants final approval for occupancy or service." },
        ],
      },
      {
        type: "list",
        title: "Pre-submission checklist",
        items: [
          "Confirm the PE is licensed in the project state",
          "Obtain a title search and property surveys",
          "Verify zoning classification and overlay district requirements",
          "Identify all applicable NJDEP permits by project type",
          "Prepare a stormwater management report (per N.J.A.C. 7:8)",
          "Confirm utility easements and right-of-way limits",
          "Submit a traffic impact study if the municipality requires one",
          "Coordinate with adjacent utilities (JCP&L, PSE&G, telecom)",
          "Secure performance and maintenance bonds",
        ],
      },
      {
        type: "list",
        title: "Key approving agencies in New Jersey",
        items: [
          "NJDEP: water, wetlands, stormwater",
          "Municipal CME / Engineer: site plan review and inspection",
          "County Engineering: curb cuts, drainage, roads",
          "Local Utility Authority: water and sewer capacity sign-off",
          "NJDOT: state highway access permits",
        ],
      },
      {
        type: "callout",
        title: "Pro tip",
        text: "Engage your municipal engineer and key agencies before submitting formal applications. Pre-submission meetings can save months by resolving design conflicts early.",
      },
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
