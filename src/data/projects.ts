export interface PortfolioProject {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  link: string | null
  repository: string | null
  image: string | null
  highlights?: string[]
}

/** Add projects here. Leave optional URLs and image as null when unavailable. */
export const projects: PortfolioProject[] = [
  {
    id: 'pharma-clinic',
    name: 'Pharma-Clinic Management System',
    category: 'Capstone project',
    description:
      'A system designed to manage pharmacy inventory, medicines, suppliers, orders, and clinic-related workflows.',
    technologies: ['Laravel', 'MySQL', 'VB.NET'],
    link: "https://leavedesk.lguhub.online",
    repository: "Repository",
    image: null,
    highlights: ['Inventory management', 'Supplier and order workflows', 'Clinic operations'],
  },
  {
    id: 'fibeco-billing-inquiry',
    name: 'Billing Inquiry Application',
    category: 'FIBECO · MIS',
    description:
      'A client billing inquiry web application built with Laravel and Vue.js during my time with FIBECO’s MIS team.',
    technologies: ['Laravel', 'Vue.js'],
    link: null,
    repository: null,
    image: null,
  },
]
