import { Technology } from './technology.model';

export interface Project {
    id: number;
    title: string;
    image: string;
    gallery: string[];
    iconName: string;
    description: string;
    challenge?: string;
    solution?: string;
    githubUrl: string;
    githubType: string;
    technologies: Technology[];
}