export interface Experiences {
  role: string,
  organization: string,
  period: string,
  type: string,
  icon: string,
  description: string,
  highlights: null | string[],
  technologies?: null | string[]
}

export const experiences: Experiences[] = [
  {
    role: 'Freelance Web Developer',
    organization: 'Self-employed',
    period: 'August 2025 – Present',
    type: 'Freelance',
    icon: 'lucide:briefcase-business',
    description: 'Developed a Laravel/MySQL web application for a stakeholder. Expanded into WordPress with Elementor customization and full site migrations across platforms.',
    highlights: [
      'Developed a Laravel/MySQL web application, handling system design, database architecture, and full-stack implementation.',
      'Migrated a WordPress site from Pantheon to Hostinger using Terminus for file retrieval and environment transfers.',
      'Configured production database connections and customized site pages with Elementor.',
      'Expanded stack from PHP/Laravel into WordPress ecosystem and multi-environment deployment workflows.'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'WordPress', 'Elementor',]
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