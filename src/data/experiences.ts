export interface Experiences {
  role: string,
  organization: string,
  period: string,
  type: string,
  icon: string,
  description: string,
  highlights: null | string[],
  technologies: string[]
}

export const experiences: Experiences[] = [
  {
    role: 'Independent Projects & Professional Development',
    organization: 'Independent',
    period: 'June 2026 – Present',
    type: 'Professional Development',
    icon: 'lucide:code-2',
    description: 'Continuing to strengthen web development skills through personal projects and independent learning, with a focus on WordPress development, website migration, and hosting workflows.',
    highlights: [
      'Practiced WordPress website development and page customization using WordPress and Elementor.',
      'Migrated a WordPress website through Pantheon, a local development environment, and Hostinger.',
      'Worked with Terminus to retrieve website files, transferred files between environments, migrated the MySQL database, and configured the database connection on Hostinger.'
    ],
    technologies: ['WordPress', 'Elementor', 'Pantheon', 'Terminus', 'Hostinger', 'MySQL']
  },
  {
    role: 'Freelance Web Developer',
    organization: 'Project-Based Development',
    period: 'August 2025 – May 2026',
    type: 'Freelance',
    icon: 'lucide:briefcase-business',
    description: 'Developed a Laravel-based web application project for a stakeholder.',
    highlights: [
      'Developed a Laravel-based web application based on project requirements.',
      'Worked on application functionality, system design, and database integration.',
      'Applied PHP, Laravel, and MySQL to build the application based on project requirements.'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL']
  },
  {
    role: 'Software Developer Intern',
    organization: 'FIBECO Inc. · MIS Section',
    period: 'March 2025 – May 2025',
    type: 'Internship',
    icon: 'lucide:building-2',
    description: 'Contributed to the development of a billing inquiry web application during a three-month internship with the MIS Section.',
    highlights: [
      'Worked on features for monthly billing information, billing statements, and power interruption complaints.',
      'Used Laravel for backend development and Vue.js for frontend implementation.',
      'Implemented SMS and email OTP verification and worked with API connections to internal systems.'
    ],
    technologies: ['Laravel', 'PHP', 'Vue.js', 'JavaScript']
  }
]