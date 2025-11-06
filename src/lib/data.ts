import type { NavLink, Skill, Experience, Project } from '@/lib/types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', key: 'nav.home' },
  { name: 'Skills', href: '#skills', key: 'nav.skills' },
  { name: 'Experience', href: '#experience', key: 'nav.experience' },
  { name: 'Projects', href: '#projects', key: 'nav.projects' },
  { name: 'Contact', href: '#contact', key: 'nav.contact' },
];

export const personalInfo = {
  name: "Rozn Rasho",
  statement: "Passionate and detail-oriented Fullstack Developer with a love for creating elegant and efficient web solutions. Eager to leverage my skills in modern web technologies to build innovative and user-friendly applications.",
  statement_de: "Leidenschaftliche und detailorientierte Fullstack-Entwicklerin mit einer Vorliebe für elegante und effiziente Weblösungen. Ich möchte meine Kenntnisse moderner Webtechnologien nutzen, um innovative und benutzerfreundliche Anwendungen zu entwickeln.",
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
    description_de: 'Abschluss eines intensiven einjährigen Trainingsprogramms, das den gesamten MERN-Stack abdeckte, einschließlich moderner Technologien wie React, Node.js und MongoDB. Entwicklung mehrerer Fullstack-Projekte von Grund auf.',
    type: 'Education',
  },
  {
    role: 'Educator',
    company: 'Deutsches Rotes Kreuz',
    period: '2020 - 2023',
    description: 'Responsible for child care and early education. Developed educational programs and fostered a positive learning environment.',
    description_de: 'Verantwortlich für die Kinderbetreuung und frühkindliche Bildung. Entwicklung von Bildungsprogrammen und Förderung einer positiven Lernumgebung.',
    type: 'Work',
  },
    {
    role: 'Educator',
    company: 'DRK-Bewegungkindergarten',
    period: '2019 - 2020',
    description: 'Focused on promoting physical activity and motor skills in young children through play-based learning.',
    description_de: 'Fokussiert auf die Förderung körperlicher Aktivität und motorischer Fähigkeiten bei Kleinkindern durch spielerisches Lernen.',
    type: 'Work',
  },
    {
    role: 'Educator',
    company: 'Nabris Kindergarten',
    period: '2018 - 2019',
    description: 'Provided daily care and support for preschool-aged children, assisting in their social and cognitive development.',
    description_de: 'Tägliche Betreuung und Unterstützung von Vorschulkindern, Förderung ihrer sozialen und kognitiven Entwicklung.',
    type: 'Work',
  },
  {
    role: 'Language Education',
    company: 'Bildungszentrum des Handels GmbH',
    period: '2017 - 2018',
    description: 'Participated in a professional language development course to enhance communication and integration skills.',
    description_de: 'Teilnahme an einem beruflichen Sprachkurs zur Verbesserung der Kommunikations- und Integrationsfähigkeiten.',
    type: 'Education',
  },
  {
    role: 'Philosophy - Teaching Degree Program',
    company: 'University Studies',
    period: '2014 - 2017',
    description: 'Studied philosophy with a focus on education, developing critical thinking and analytical skills.',
    description_de: 'Studium der Philosophie mit Schwerpunkt Bildung, Entwicklung von kritischem Denken und analytischen Fähigkeiten.',
    type: 'Education',
  },
  {
    role: 'Abitur (High School Diploma)',
    company: 'Secondary School',
    period: 'Until 2013',
    description: 'Successfully completed higher secondary education, equivalent to a university entrance qualification.',
    description_de: 'Erfolgreicher Abschluss der höheren Schulbildung, vergleichbar mit der Hochschulzugangsberechtigung.',
    type: 'Education',
  },
];

export const projects: Project[] = [
  {
    id: 'project-portfolio',
    title: 'My Portfolio',
    title_de: 'Mein Portfolio',
    description: 'This is the portfolio you are currently viewing. It is built with Next.js, TypeScript, and Tailwind CSS. It features a responsive design and an AI-powered summary generator.',
    description_de: 'Dies ist das Portfolio, das Sie gerade ansehen. Es wurde mit Next.js, TypeScript und Tailwind CSS erstellt und verfügt über ein responsives Design sowie einen KI-gestützten Zusammenfassungs-Generator.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Roznrasho/Rozn-Portfolio',
    imageId: 'rozn-rasho-portrait'
  },
  {
    id: 'project-1',
    title: 'SmartPlates',
    title_de: 'SmartPlates',
    description: 'A collaborative full-stack MERN application for discovering and sharing recipes. Users can create, edit, and browse recipes, with a focus on a clean and intuitive user experience.',
    description_de: 'Eine kollaborative Fullstack-MERN-Anwendung zum Entdecken und Teilen von Rezepten. Nutzer:innen können Rezepte erstellen, bearbeiten und durchsuchen, mit Fokus auf eine saubere und intuitive Benutzeroberfläche.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://smart-plates.onrender.com/',
    githubUrl: 'https://github.com/Roznrasho/smartplates',
    imageId: 'project-smartplates'
  },
  {
    id: 'project-2',
    title: 'QR-Code Generator',
    title_de: 'QR-Code Generator',
    description: 'A simple and efficient web application for generating QR codes from any text or URL. Built with vanilla JavaScript, it provides a fast and easy-to-use tool for creating QR codes on the fly.',
    description_de: 'Eine einfache und effiziente Webanwendung zum Erstellen von QR-Codes aus beliebigem Text oder URLs. Mit reinem JavaScript gebaut, bietet sie ein schnelles und leicht zu bedienendes Tool zur sofortigen QR-Code-Erzeugung.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://roznrasho.github.io/QR-Code/',
    githubUrl: 'https://github.com/Roznrasho/QR-Code',
    imageId: 'project-qr-code'
  },
  {
    id: 'project-3',
    title: 'Memory Game',
    title_de: 'Memory Spiel',
    description: 'A classic card-matching memory game built with React. The game features a clean interface, smooth animations, and a scoring system to challenge players.',
    description_de: 'Ein klassisches Memory-Kartenspiel, gebaut mit React. Das Spiel bietet eine klare Oberfläche, flüssige Animationen und ein Punktesystem zur Herausforderung der Spieler:innen.',
    techStack: ['React', 'CSS', 'JavaScript'],
    liveUrl: 'https://memory-game-ruby-nine.vercel.app',
    githubUrl: 'https://github.com/Roznrasho/Memory-Game',
    imageId: 'project-memory-game'
  },
];
