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
      'A conversational AI assistant built for a hospital website, helping patients and visitors find information quickly. Built with Next.js and the Claude API.',
    tags: [
      { label: 'Next.js', variant: 'tool' },
      { label: 'Claude API', variant: 'tool' },
      { label: 'AI Strategy', variant: 'skill' },
      { label: 'Healthcare', variant: 'skill' },
    ],
    status: 'In Progress',
    featured: true,
  },
  {
    id: 'ai-hospital',
    title: 'Driving AI in Healthcare',
    description:
      'Coordinating AI adoption at a hospital across several areas. Coordinated the Microsoft Copilot pilot, arranged courses to build AI knowledge among staff, and am part of the hospital\'s AI council — where we prioritize projects and push initiatives forward. Developed a chatbot for the hospital\'s public-facing website to improve access to information for patients and visitors.',
    tags: [
      { label: 'AI Strategy', variant: 'skill' },
      { label: 'Healthcare', variant: 'skill' },
      { label: 'Microsoft Copilot', variant: 'tool' },
      { label: 'Leadership', variant: 'skill' },
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
