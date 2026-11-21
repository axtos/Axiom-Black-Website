export type Role = {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  gain: string[];
  /** Subject line applicants should use. */
  applySubject: string;
};

export const CAREERS_EMAIL = "careers@axiomblack.com";

/** Live openings. Remove a role here when it is filled. */
export const roles: Role[] = [
  {
    slug: "engineering-intern",
    title: "Engineering Intern",
    department: "Engineering",
    type: "Full-time internship",
    location: "Newark, NJ · Hybrid",
    summary:
      "Work alongside our engineers and project managers on real design and engineering projects. You'll join team stand-ups, support project planning and reporting, and work with contractors and stakeholders to deliver project goals, with hands-on time on engineering tools and exposure to project management and client communication.",
    responsibilities: [
      "Collaborate with engineers and project teams on design and engineering projects.",
      "Join daily stand-up meetings and give project progress updates.",
      "Help review project plans, timelines, budgets and resource allocation.",
      "Support communication with contractors, clients and stakeholders.",
      "Help prepare project reports, track deliverables and update schedules.",
      "Provide technical support and help resolve project issues.",
      "Join site visits, meetings and training sessions when required.",
    ],
    qualifications: [
      "Currently enrolled in, or recently graduated from, a bachelor's program in engineering or a related field.",
      "Familiarity with tools such as AutoCAD, SolidWorks, MATLAB or ANSYS.",
      "Basic knowledge of data analysis tools such as Excel, Power BI or Tableau.",
      "Experience with project management tools such as Microsoft Project, Trello or Jira is a plus.",
      "Strong communication, organizational and teamwork skills.",
    ],
    gain: [
      "Hands-on experience with engineering design and project management.",
      "Real engineering projects and direct client collaboration.",
      "Mentorship, training and professional development.",
    ],
    applySubject: "Application: Engineering Intern",
  },
];
