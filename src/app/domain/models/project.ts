import { Technology } from './technology.model';

export interface Project {
    title: string;
    image: string;
    description: string;
    githubUrl:string;
    githubType:string;
    technologies: Technology[];


  }