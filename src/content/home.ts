import {
  WaterEnergyIcon,
  RulerIcon,
  ChartLineData02Icon,
  ShieldEnergyIcon,
  ArtificialIntelligence04Icon,
  CloudServerIcon,
  SourceCodeIcon,
  PresentationBarChart01Icon,
  Target02Icon,
  ChartBreakoutSquareIcon,
  Plant03Icon,
  WorkflowSquare03Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type Card = { name: string; href: string; descriptor: string; icon: IconSvgElement };

export const heroCopy = {
  headline: ["Resilient water infrastructure,", "engineered for the next century."],
  sub: "Axiom Black is a Newark, NJ engineering and technology firm. We partner with municipal utilities and public agencies to design, modernize, and manage water systems, pairing licensed engineering with AI, data, and custom software.",
  cta: { label: "Explore Solutions", href: "/solutions" },
};

export const engineeringCards: Card[] = [
  { name: "Water", href: "/solutions/water", descriptor: "Planning, design, and delivery for municipal water and wastewater systems.", icon: WaterEnergyIcon },
  { name: "Design", href: "/solutions/design", descriptor: "Civil and process engineering design for public infrastructure projects.", icon: RulerIcon },
  { name: "Modeling", href: "/solutions/modeling", descriptor: "Calibrated hydraulic models that de-risk capital projects before construction.", icon: ChartLineData02Icon },
  { name: "Risk Assessment", href: "/solutions/risk-assessment", descriptor: "Resilience and condition analysis for aging public infrastructure.", icon: ShieldEnergyIcon },
];

export const technologyCards: Card[] = [
  { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning", descriptor: "Predictive maintenance from field and inspection data, plus AI assistants trained on your own operations.", icon: ArtificialIntelligence04Icon },
  { name: "Digital Transformation", href: "/solutions/digital-transformation", descriptor: "Cloud, IoT, and IT strategy roadmaps that move public agencies off paper and legacy systems without disruption.", icon: CloudServerIcon },
  { name: "Data Analytics & BI", href: "/solutions/data-analytics", descriptor: "Dashboards, warehousing, and board-ready reporting that turn scattered utility data into decisions.", icon: PresentationBarChart01Icon },
  { name: "Software Development", href: "/solutions/software-development", descriptor: "Custom applications, dashboards, and legacy modernization built for how utilities actually work day to day.", icon: SourceCodeIcon },
];

export const growCards: Card[] = [
  { name: "Goal-Oriented Strategy Development", href: "/about", descriptor: "Every engagement starts from your outcomes, not our service list.", icon: Target02Icon },
  { name: "Resource Optimization Solutions", href: "/about", descriptor: "Projects measured by impact delivered, not effort billed.", icon: ChartBreakoutSquareIcon },
  { name: "Organizational Development Services", href: "/about", descriptor: "Solutions engineered for sustainability, built to stand the test of time.", icon: Plant03Icon },
  { name: "Workflow Enhancement Solutions", href: "/about", descriptor: "Collaboration at the core: with your team, in your systems.", icon: WorkflowSquare03Icon },
];

export const faqs = [
  { q: "How do I start a project with your team?", a: "Most engagements begin with a scoped assessment: we map the problem, the constraints, and the funding path before proposing a delivery plan. Reach out through the contact form and we'll set up an intro call." },
  { q: "What services do you offer?", a: "Engineering (water, design, modeling, risk assessment) and technology (AI & machine learning, digital transformation, data analytics, software development), delivered by one team." },
  { q: "What types of businesses do you work with?", a: "We focus on municipal utilities, public works departments, and government agencies, and also support private clients operating in the water and infrastructure sector." },
  { q: "Do you offer ongoing support?", a: "Yes. Beyond project delivery we offer ongoing operations support, monitoring, and iterative improvements to the systems we build." },
  { q: "Can you work alongside our internal team?", a: "Absolutely. We work as partners: embedding with your staff, using your systems, and setting direction from your goals rather than a fixed service list." },
  { q: "Is there a minimum project size or budget?", a: "No fixed minimum. We scope engagements to the problem and the available funding, and can start small with an assessment before committing to a larger program." },
];

export const ctaCopy = {
  eyebrow: "Building the future",
  headline: "Engineering the future, one solution at a time.",
  sub: "Partner with Axiom Black to drive sustainable growth through technology, innovation, and expert engineering insight.",
  cta: { label: "Start a project", href: "/contact" },
};
