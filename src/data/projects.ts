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
    id: 'pharmacy',
    name: 'Pharmacy Management System',
    category: 'Capstone Project',
    description:
      'A pharmacy inventory system developed for the client to manage medicines, suppliers, stock levels, orders, and other pharmacy operations.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: null,
  },
  {
    id: 'clinic',
    name: 'Clinic Appointment and Management System',
    category: 'Capstone Project',
    description:
      'A clinic management system developed for the same client to handle patient information, appointment scheduling, and clinic records, supporting the client’s integrated healthcare operations.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: null,
  },
  {
    id: 'pos',
    name: 'Pharmacy Point of Sale (POS) System',
    category: 'Capstone Project',
    description:
      'A desktop-based POS module integrated with the pharmacy management system to support medicine sales, transaction processing, and pharmacy operations for the same client.',
    technologies: ['VB.NET', 'MySQL'],
    link: null,
    repository: null,
    image: null,
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