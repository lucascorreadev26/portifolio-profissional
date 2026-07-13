import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import type { Project } from "./types";

import projetoImportSolution from "../../assets/screenshots/projeto-import-solution.jpeg";
import projetoPortifolioProfissional from "../../assets/screenshots/projeto-portifolio-profissional.jpeg";

export const projects: Project[] = [
  // Projeto 01 - Imports Solution
  {
    id: 1,

    title: "Imports Solution",
    description:
      "Sistema web desenvolvido para uma loja de iPhones com foco em apresentação de catálogo digital e conversão via WhatsApp. Desenvolvido com React.js utilizando Vite para build otimizado e Tailwind CSS para estilização moderna e responsiva, seguindo boas práticas de componentização e foco em performance e experiência do usuário.",

    technologies: [
      SiReact,
      SiVite,
      SiJavascript,
      SiTailwindcss,
      SiGithub,
      SiGit,
    ],

    image: projetoImportSolution,

    liveUrl: "https://www.importssolution.com.br/",
    githubUrl: "https://github.com/lucascorreadev26/imports-solution",
  },

  // Projeto 02 - Portfólio Profissional
  {
    id: 2,

    title: "Portfólio Profissional",
    description:
      "Portfólio profissional desenvolvido para apresentar meus projetos, tecnologias e experiência como Desenvolvedor Full Stack. Construído com React.js, Vite, TypeScript e Tailwind CSS, priorizando arquitetura escalável, componentização, responsividade e boas práticas de desenvolvimento.",

    technologies: [
      SiReact,
      SiVite,
      SiTypescript,
      SiTailwindcss,
      SiGithub,
      SiGit,
    ],

    image: projetoPortifolioProfissional,

    liveUrl: "https://lucascorreadev.com.br/",
    githubUrl: "https://github.com/lucascorreadev26/portifolio-profissional",
  },
];
