export type FeaturedProjectConfig = {
  repo: string;
  title: string;
  filename: string;
  description: string;
  tags: string[];
  order: number;
  liveUrl?: string;
  showGithubLink?: boolean;
  showLiveDemoLink?: boolean;
};

export const GITHUB_USERNAME = 'manuj55';

export const FEATURED_PROJECTS: FeaturedProjectConfig[] = [
  {
    repo: 'PantryPal',
    title: 'PantryPal Microservices',
    filename: 'pantry-pal.ts',
    description:
      'Built a microservice-based grocery application using Node.js for authentication and user management. Implemented secure JWT-based authentication, user CRUD operations, Elastic search logger, rate limiter, and API documentation with Swagger. Dockerized all services on the same network.',
    tags: ['Node.js', 'Vue.js', 'React.js', 'Docker', 'JWT', 'Swagger'],
    order: 1,
    showGithubLink: true,
    showLiveDemoLink: false,
  },
  {
    repo: 'CampusCash',
    title: 'CampusCash Expense Manager',
    filename: 'campus-cash.vue',
    description:
      'Built an expense management app with advanced expense editing, splitting, validation, daily streak tracking to boost engagement, and secure authentication with integrated search and filter functionalities.',
    tags: ['React.js', 'JavaScript', 'CSS'],
    order: 2,
    showGithubLink: true,
    showLiveDemoLink: false,
  },
  {
    repo: 'property-management-system',
    title: 'Property Management System',
    filename: 'pms.java',
    description:
      'Implemented a hotel management system using HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, and MySQL. Features include admin and customer functionalities like account management, reservations, and surge pricing.',
    tags: ['Java', 'JSP', 'MySQL', 'JDBC'],
    order: 3,
    showGithubLink: false,
    showLiveDemoLink: false,
  },
  {
    repo: 'ecommerce-ui-ux-solution',
    title: 'E-commerce UI/UX Solution',
    filename: 'ecommerce-ui.tsx',
    description:
      'Created a responsive landing page, store page, and about-us page for a trekking tools brand using JavaScript, Tailwind, Material Design, custom fonts, icons, and images.',
    tags: ['JavaScript', 'Tailwind', 'Material Design'],
    order: 4,
    showGithubLink: false,
    showLiveDemoLink: false,
  },
];
