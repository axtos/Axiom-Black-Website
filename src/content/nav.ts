import {
  Certificate01Icon,
  UserGroupIcon,
  Briefcase01Icon,
  BookOpen01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { solutionGroups } from "./solutions";

export type NavLink = { name: string; href: string; descriptor: string; icon: IconSvgElement };
export type NavSection = { label?: string; links: NavLink[] };
export type NavMenu = {
  id: "engineering" | "technology" | "company";
  label: string;
  /** Discipline accent: Engineering blue, Technology orange, Company none (master brand). */
  accent: "blue" | "orange" | "none";
  sections: NavSection[];
  /** Overview link shown at the foot of the menu. */
  overview?: { label: string; href: string };
};

const [engineering, technology] = solutionGroups;

/** Top navigation: the three sub-brands, each with its own drill-down. */
export const navMenus: NavMenu[] = [
  {
    id: "engineering",
    label: "Engineering",
    accent: "blue",
    sections: [{ links: engineering.items }],
    overview: { label: "All engineering solutions", href: "/solutions#engineering" },
  },
  {
    id: "technology",
    label: "Technology",
    accent: "orange",
    sections: [
      { label: "Solutions", links: technology.items },
      {
        label: "Products",
        links: [
          { name: "Certificate Tracker", href: "/products/certificate-tracker", descriptor: "Licences, certifications and permits with expiry alerts", icon: Certificate01Icon },
        ],
      },
    ],
    overview: { label: "All technology solutions", href: "/solutions#technology" },
  },
  {
    id: "company",
    label: "Company",
    accent: "none",
    sections: [
      {
        links: [
          { name: "About", href: "/about", descriptor: "Our story and the GROW framework", icon: UserGroupIcon },
          { name: "Careers", href: "/careers", descriptor: "Open roles and how we hire", icon: Briefcase01Icon },
          { name: "Blog", href: "/blog", descriptor: "Projects, product updates and R&D notes", icon: BookOpen01Icon },
          { name: "Contact", href: "/contact", descriptor: "Start a project or ask a question", icon: Mail01Icon },
        ],
      },
    ],
  },
];
