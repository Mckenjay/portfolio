import pharmacy from '@/assets/images/projects/pharmacy.png'
import pos from '@/assets/images/projects/pos.png'
import clinic from '@/assets/images/projects/clinic.png'
import lgu from '@/assets/images/projects/lgu.png'
import leave from '@/assets/images/projects/leave.png'


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
    image: pharmacy,
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
    image: clinic,
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
    image: pos,
  },
  {
    id: 'fibeco-billing-inquiry',
    name: 'Billing Inquiry Application',
    category: 'FIBECO · MIS',
    description:
      'A client billing inquiry web application built with Laravel and Vue.js during my time with FIBECO’s MIS team.',
    technologies: ['Laravel', 'PHP', 'Vue.js', 'MySQL'],
    link: null,
    repository: null,
    image: null,
  },
  {
    id: 'emotorela',
    name: 'LGU Motorela Franchising and Tracking System',
    category: 'Project',
    description:
      ' Laravel web app for managing local government franchising applications. It tracks applicants and their documents through reviews by different offices, with features for workflows, checklists, and application paperwork.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: lgu,
  },
  {
    id: 'leave-system',
    name: 'Employee Leave Request System',
    category: 'Project',
    description:
      ' A laravel web application for filing and managing employee leave requests.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: leave,
  },
  {
    id: 'wordpress',
    name: 'We Buy Junk Cars for Cash Website Clone',
    category: 'Project',
    description:
    'A WordPress and Elementor site clone built to master custom layouts, responsive design, and page builder workflows.',
    technologies: ['Wordpress', 'Elementor'],
    link: null,
    repository: null,
    image: null,
  },
  {
    id: 'ecommerce',
    name: 'Practice Project for an E-commerce Website',
    category: 'Project',
    description:
    'A practice e-commerce website built with WordPress and Elementor to explore online store functionality, product layouts, and design customization.',
    technologies: ['Wordpress', 'Elementor'],
    link: null,
    repository: null,
    image: null,
  },
]