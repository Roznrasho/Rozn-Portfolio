export type NavLink = {
  name: string;
  href: string;
};

export type Skill = {
  name: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Work' | 'Education';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  imageId: string;
};
