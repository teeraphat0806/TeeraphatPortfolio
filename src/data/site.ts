import content from "./site.json";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillItem = {
  label: string;
  logoUrl?: string;
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: SkillItem[];
};

export type Strength = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  website?: string;
  responsibilities: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  status: string;
  note: string;
  image: string;
  icon?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

export type Education = {
  school: string;
  degree: string;
  expectedGraduation: string;
  transcriptUrl?: string;
  coursework: string[];
};

type SiteContent = {
  site: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    intro: string;
    summary: string;
    strengths: Strength[];
    profileImage: string;
  };
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  certificates: CertificateItem[];
  contactItems: ContactItem[];
  projects: Project[];
  experience: ExperienceItem[];
  education: Education;
};

const data = content as SiteContent;

export const site = data.site;
export const navLinks = data.navLinks;
export const socialLinks = data.socialLinks;
export const skillGroups = data.skillGroups;
export const certificates = data.certificates;
export const contactItems = data.contactItems;
export const projects = data.projects;
export const experience = data.experience;
export const education = data.education;
