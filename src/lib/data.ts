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
    role_de: 'Fullstack Webentwicklung',
    company: 'DCI Digital Career Institute GmbH',
    period: '2024 - 2025',
    description: 'Completed an intensive 19-month training program covering the entire MERN stack, including modern technologies like React, Node.js, Tailwind, MongoDB, and Next.js. Developed several full-stack projects from scratch.',
    description_de: 'Abschluss eines intensiven 19-monatigen Trainingsprogramms, das den gesamten MERN-Stack abdeckte, einschließlich moderner Technologien wie React, Node.js, Tailwind, MongoDB und Next.js. Entwicklung mehrerer Fullstack-Projekte von Grund auf.',
    type: 'Education',
  },
  {
    role: 'Work Experience',
    role_de: 'Berufserfahrung',
    company: 'Deutsches Rotes Kreuz',
    period: '2022 - Present',
    description: 'Volunteer work, e.g., assisting at blood donation drives.',
    description_de: 'Ehrenamtliche Tätigkeit, z. B. Unterstützung bei Blutspendenaktionen.',
    type: 'Work',
  },
    {
    role: 'Language Education',
    role_de: 'Sprachbildung',
    company: 'Bildungszentrum des Handels GmbH, Recklinghausen',
    period: '2014 - 2021',
    description: 'Successfully completed several German courses up to C1 level (including B1, B1+, and B2). The training was completed while caring for my children.',
    description_de: 'Erfolgreicher Abschluss mehrerer Deutschkurse bis zum Niveau C1 (einschließlich B1, B1+ und B2). Die Weiterbildung erfolgte neben der Betreuung meiner Kinder.',
    type: 'Education',
  },
    {
    role: 'Degree Program',
    role_de: 'Studiengang',
    company: 'Philosophy – Teaching, Aleppo / Syria',
    period: '2007 - 2009',
    description: 'Studies paused due to parental leave thereafter not continued because of the war.',
    description_de: 'Studium pausiert aufgrund von Elternzeit danach nicht fortgesetzt wegen des Krieges.',
    type: 'Education',
  },
  {
    role: 'Education',
    role_de: 'Schulbildung',
    company: 'Aleppo University / Syrien',
    period: '2006 - 2007',
    description: 'High school diploma, Major in Humanities. Recognized as a subject-specific university entrance qualification for Humanities, Law, and Social Sciences.',
    description_de: 'Abitur, Fachrichtung Geisteswissenschaften, Anerkannt als fachgebundene Hochschulreife für Geistes-, Rechts- und Sozialwissenschaften.',
    type: 'Education',
  },
  {
    role: 'Work Experience',
    role_de: 'Berufserfahrung',
    company: 'Nabris Kindergarten, Aleppo / Syria',
    period: '2001 - 2006',
    description: 'Educator responsible for supporting and fostering the social and cognitive development of children.',
    description_de: 'Tätigkeit als Erzieherin mit Verantwortung für die Betreuung und Förderung der sozialen und kognitiven Entwicklung der Kinder.',
    type: 'Work',
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
