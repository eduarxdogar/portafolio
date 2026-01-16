import { Technology } from './technology.model';

export interface ProjectDetail {
  id: number;
  title: string;
  images: string[];
  gallery?: string[]; // Alias for images or separate gallery
  description: string;
  challenge?: string;
  solution?: string;
  iconName?: string;
  githubUrl?: string;
  githubUrl2?: string;
  githubType?: string;
  onlineUrl?: string;
  technologies: Technology[];
}
