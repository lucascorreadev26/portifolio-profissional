import { FaEarthAmericas } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import Button from "../../components/Button/Button";
import CardsStacks from "../../components/Cards/CardsStacks";
import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-blue-800/50 bg-[#0D1117] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]">
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-transparent to-cyan-500/10 opacity-0" />

      <div className="relative z-10 transition-all duration-500 group-hover:opacity-10">
        <h2 className="mb-3 text-xl sm:text-2xl font-bold font-inter text-white transition-colors duration-300 group-hover:text-blue-400">
          {project.title}
        </h2>

        <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />

        <div className="flex flex-wrap gap-4 mt-6 ">
          {project.technologies.map((Tech, index) => (
            <CardsStacks key={index} variant="primary">
              <Tech className="text-white bg-gray-300/10 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>
          ))}
        </div>

        {/* Botões */}
        <div className="flex gap-4 mt-8">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              <FaEarthAmericas className="text-white border border-white/20 rounded-lg w-8 h-8 p-2" />
              <span className="pl-2">Ver Projeto</span>
            </Button>
          </a>

          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <SiGithub className="text-white bg-black border border-gray-700 rounded-lg w-8 h-8 p-2" />
              <span className="pl-2">GitHub</span>
            </Button>
          </a>
        </div>
      </div>

              {/* Overlay */}
        <div className=" text-base leading-8 text-justify text-white px-8 bg-black font-semibold absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

          <p className="text-white space-y-4">{project.description}</p>

        </div>
    </div>
  );
};

export default ProjectCard;
