import BadgeSection from "../../components/Bagde/BadgeSection";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

const ProjectsList = () => {
  return (
    <section className="bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">
      <div className="max-w-3xl lg:ml-64">
        <div className="">
          <BadgeSection>
            <span>&gt;_</span>
            <span className="font-mono font-bold uppercase">Projetos</span>
          </BadgeSection>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-32 lg:w-7xl">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
