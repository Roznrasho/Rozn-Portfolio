import type { NavLink, Skill, Experience, Project } from '@/lib/types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: "Rozn Rasho",
  statement: "Passionate and detail-oriented Fullstack Developer with a love for creating elegant and efficient web solutions. Eager to leverage my skills in modern web technologies to build innovative and user-friendly applications.",
  email: "rashorozn@gmail.com",
  location: "45739 Oer-Erkenschwick, Deutschland",
  phone: "01727011426",
  linkedin: "https://linkedin.com/in/rozn-rasho",
  github: "https://github.com/Roznrasho",
};

export const skills: Skill[] = [
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Node.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Express' },
  { name: 'MongoDB' },
  { name: 'Next.js' },
  { name: 'Tailwind' },
  { name: 'Vite' },
  { name: 'Bun' },
  { name: 'Git/GitHub' },
  { name: 'Postman' },
  { name: 'Canva' },
  { name: 'Slack' },
  { name: 'Render' },
  { name: 'Vercel' },
];

export const experiences: Experience[] = [
  {
    role: 'Fullstack Web Development',
    company: 'DCI Digital Career Institute GmbH',
    period: '2023 - 2024',
    description: 'Completed an intensive one-year training program covering the entire MERN stack, including modern technologies like React, Node.js, and MongoDB. Developed several full-stack projects from scratch.',
    type: 'Education',
  },
  {
    role: 'Educator',
    company: 'Deutsches Rotes Kreuz',
    period: '2020 - 2023',
    description: 'Responsible for child care and early education. Developed educational programs and fostered a positive learning environment.',
    type: 'Work',
  },
    {
    role: 'Educator',
    company: 'DRK-Bewegungkindergarten',
    period: '2019 - 2020',
    description: 'Focused on promoting physical activity and motor skills in young children through play-based learning.',
    type: 'Work',
  },
    {
    role: 'Educator',
    company: 'Nabris Kindergarten',
    period: '2018 - 2019',
    description: 'Provided daily care and support for preschool-aged children, assisting in their social and cognitive development.',
    type: 'Work',
  },
  {
    role: 'Language Education',
    company: 'Bildungszentrum des Handels GmbH',
    period: '2017 - 2018',
    description: 'Participated in a professional language development course to enhance communication and integration skills.',
    type: 'Education',
  },
  {
    role: 'Philosophy - Teaching Degree Program',
    company: 'University Studies',
    period: '2014 - 2017',
    description: 'Studied philosophy with a focus on education, developing critical thinking and analytical skills.',
    type: 'Education',
  },
  {
    role: 'Abitur (High School Diploma)',
    company: 'Secondary School',
    period: 'Until 2013',
    description: 'Successfully completed higher secondary education, equivalent to a university entrance qualification.',
    type: 'Education',
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'SmartPlates',
    description: 'A collaborative full-stack MERN application for discovering and sharing recipes. Users can create, edit, and browse recipes, with a focus on a clean and intuitive user experience.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://github.com/CommitCrush/smartplates',
    githubUrl: 'https://github.com/CommitCrush/smartplates',
    imageId: 'project-smartplates'
  },
  {
    id: 'project-2',
    title: 'QR-Code Generator',
    description: 'A simple and efficient web application for generating QR codes from any text or URL. Built with vanilla JavaScript, it provides a fast and easy-to-use tool for creating QR codes on the fly.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://qr-code-seven-rho.vercel.app/',
    githubUrl: 'https://github.com/Roznrasho/QR-Code',
    imageId: 'project-qr-code'
  },
  {
    id: 'project-3',
    title: 'Memory Game',
    description: 'A classic card-matching memory game built with React. The game features a clean interface, smooth animations, and a scoring system to challenge players.',
    techStack: ['React', 'CSS', 'JavaScript'],
    liveUrl: 'https://memory-game-ruby-nine.vercel.app',
    githubUrl: 'https://github.com/Roznrasho/Memory-Game',
    imageId: 'project-memory-game'
  },
];
