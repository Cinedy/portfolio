export type ProjectStatus = 'Live' | 'In Progress' | 'Coming Soon';
export type TagVariant = 'skill' | 'tool';

export interface ProjectTag {
  label: string;
  variant: TagVariant;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description:
      'A personal portfolio site built from scratch with Next.js and TypeScript. Designed with a custom CSS system using CSS variables and CSS Modules — no frameworks, no utility classes.',
    tags: [
      { label: 'Next.js', variant: 'tool' },
      { label: 'TypeScript', variant: 'tool' },
      { label: 'CSS Modules', variant: 'tool' },
      { label: 'Web Design', variant: 'skill' },
    ],
    status: 'Live',
    featured: true,
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description:
      'A conversational AI assistant built with Python and the Claude API. Designed to handle domain-specific queries with structured prompting and context management.',
    tags: [
      { label: 'Python', variant: 'tool' },
      { label: 'Claude API', variant: 'tool' },
      { label: 'AI Strategy', variant: 'skill' },
    ],
    status: 'In Progress',
    featured: true,
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Case Study',
    description:
      'An advisory engagement mapping technology-driven change across a healthcare organization — covering stakeholder alignment, process redesign, and an implementation roadmap.',
    tags: [
      { label: 'Strategy', variant: 'skill' },
      { label: 'Digital Transformation', variant: 'skill' },
      { label: 'Healthcare', variant: 'skill' },
    ],
    status: 'Live',
    featured: true,
  },
  {
    id: 'automation-tools',
    title: 'AI Automation Tools',
    description:
      'A suite of Python scripts and lightweight automation workflows built to reduce manual overhead in reporting, data handling, and internal communication processes.',
    tags: [
      { label: 'Python', variant: 'tool' },
      { label: 'Automation', variant: 'skill' },
      { label: 'AI Strategy', variant: 'skill' },
    ],
    status: 'Coming Soon',
    featured: false,
  },
];
