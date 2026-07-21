import BadgeSection from "../../components/Bagde/BadgeSection";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

const ProjectsList = () => {
  return (
    <section className="bg-[#08090F] px-6 py-20 pt-24 md:px-10 lg:px-0">
      <div className="max-w-3xl lg:ml-64">
        <div className="">
          <BadgeSection>
            <span>&gt;_</span>
            <span className="font-mono font-bold uppercase">Projetos</span>
          </BadgeSection>

          <h2 className="font-inter mt-10 mb-2 text-center text-3xl font-extrabold uppercase lg:text-left lg:text-4xl">
            Experiências que construí
          </h2>
          <p className="lg:text-md font-inter mt-2 w-full text-center text-lg text-gray-400 lg:w-140 lg:text-justify">
            Aplicações desenvolvidas para resolver problemas reais, unindo
            tecnologia, experiência do usuário e objetivos de negócio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2 lg:w-7xl lg:gap-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
