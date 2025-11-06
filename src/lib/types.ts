export type NavLink = {
  name: string;
  href: string;
  key?: string;
};

export type Skill = {
  name: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  description_de?: string;
  type: 'Work' | 'Education';
};

export type Project = {
  id: string;
  title: string;
  title_de?: string;
  description: string;
  description_de?: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  imageId: string;
};
