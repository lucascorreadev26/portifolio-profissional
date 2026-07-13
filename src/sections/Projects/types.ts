import type {IconType } from 'react-icons';

export type Project ={

    id: number;
    title: string;
    description: string;

    image?: string;

    technologies: IconType[];

    liveUrl: string;
    githubUrl: string;
};


