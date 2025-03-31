import { Technology } from './technology.model';

export interface ProjectDetail {
  id: number;
  title: string;
  images: string[];
  description: string;
  githubUrl?: string;
  githubUrl2?: string;
  onlineUrl?: string;
  technologies: Technology[];
}
