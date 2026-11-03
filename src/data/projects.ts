import pharmacy from '@/assets/images/projects/pharmacy.png'
import pos from '@/assets/images/projects/pos.png'
import clinic from '@/assets/images/projects/clinic.png'
import lgu from '@/assets/images/projects/lgu.png'
import leave from '@/assets/images/projects/leave.png'
import ecommerce from '@/assets/images/projects/ecommerce.png'
import copy from '@/assets/images/projects/copy.png'
import portfolio from '@/assets/images/projects/portfolio.png'


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
    category: 'Pharma-Clinic · Capstone Project',
    description:
      'One of three interconnected systems developed for the same capstone client. This Laravel application supports pharmacy operations, including medicine inventory, supplier records, stock levels, orders, and related reports.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: pharmacy,
    highlights: ['Part of 3 connected systems', 'Inventory management']
  },
  {
    id: 'clinic',
    name: 'Clinic Appointment and Management System',
    category: 'Pharma-Clinic · Capstone Project',
    description:
      'One of three interconnected systems developed for the same capstone client. The application supports patient information, appointment scheduling, clinic records, and workflows for different clinic roles.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: clinic,
    highlights: ['Part of 3 connected systems', 'Appointment scheduling'],
    
  },
  {
    id: 'pos',
    name: 'Pharmacy Point of Sale (POS) System',
    category: 'Pharma-Clinic · Capstone Project',
    description:
      'The desktop point-of-sale component of the same capstone project, developed to support pharmacy sales transactions and work alongside the pharmacy management system.',
    technologies: ['VB.NET', 'MySQL'],
    link: null,
    repository: null,
    image: pos,
    highlights: ['Part of 3 connected systems', 'Desktop application'],
  },
  {
    id: 'fibeco-billing-inquiry',
    name: 'Billing Inquiry Application',
    category: 'Internship · FIBECO MIS',
    description:
      'A billing inquiry web application I contributed to during my software development internship at FIBECO. It provides access to monthly billing information and billing statements, with functionality for submitting power interruption complaints.',
    technologies: ['Laravel', 'PHP', 'Vue.js', 'MySQL'],
    link: null,
    repository: null,
    image: null,
  },
  {
    id: 'emotorela',
    name: 'LGU Motorela Franchising and Tracking System',
    category: 'Freelance · Project-Based Development',
    description:
      ' Laravel web app for managing local government franchising applications. It tracks applicants and their documents through reviews by different offices, with features for workflows, checklists, and application paperwork.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: lgu,
    highlights: ['Project-based freelance work', 'Multi-office review workflow'],
  },
  {
    id: 'leave-system',
    name: 'Employee Leave Request System',
    category: 'Technical Assessment',
    description:
      'A Laravel web application developed as part of a practical technical assessment for a job application. It demonstrates an employee leave request workflow, including submitting and managing leave requests.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    link: null,
    repository: null,
    image: leave,
  },
  {
    id: 'wordpress',
    name: 'We Buy Junk Cars for Cash Website Clone',
    category: 'WordPress · Practice Project',
    description:
    'A practice website recreation built with WordPress and Elementor to explore page-builder workflows, custom layouts, and responsive design.',
    technologies: ['Wordpress', 'Elementor'],
    link: null,
    repository: null,
    image: copy,
  },
  {
    id: 'ecommerce',
    name: 'Practice Project for an E-commerce Website',
    category: 'WordPress · Practice Project',
    description:
    'A practice e-commerce website built with WordPress and Elementor to explore online store layouts, product presentation, and website customization.',
    technologies: ['Wordpress', 'Elementor'],
    link: 'https://veloforge.lguhub.online',
    repository: null,
    image: ecommerce,
  },
  {
    id: 'portfolio-website',
    name: 'Personal Portfolio Website',
    category: 'Personal Project',
    description:
      'A responsive modern personal portfolio website built to showcase software development projects, technical skills, and professional background.',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    link: null,
    repository: 'https://github.com/Mckenjay/portfolio',
    image: portfolio,
  },
]