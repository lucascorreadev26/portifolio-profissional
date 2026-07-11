import type {IconType } from 'react-icons';

export type Project ={

    id: number;
    title: string;
    description: string;

    technologies: IconType[];

    liveUrl: string;
    githubUrl: string;
};


