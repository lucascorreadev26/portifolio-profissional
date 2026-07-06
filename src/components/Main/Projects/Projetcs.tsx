import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import CardsStacks from "../../Cards/CardsStacks";
import BadgeSection from "../../Bagde/BadgeSection";

const Projetcs = () => {
  return (
    <div className="bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">
      <div className="lg:ml-62">
        <BadgeSection>
          <span>&gt;_</span>
          <span className="font-mono font-bold uppercase">Projetos</span>
        </BadgeSection>
      </div>

      {/* Projeto 01 - Imports Solution */}
      <div className="group relative overflow-hidden border border-blue-800/50bg-[#0D1117] w-full md:w-120 mt-10 lg:ml-62 p-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]">
      
        {/* Glow no hover */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-1 transition-opacity duration-500"/>

        <div className="relative z-10">
          <h2 className="text-xl font-bold font-inter text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            Imports Solution
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm">
            Sistema web desenvolvido para uma loja de iPhones com foco em
            apresentação de catálogo digital e conversão via WhatsApp.
            Desenvolvido com React.js utilizando Vite para build otimizado e
            Tailwind CSS para estilização moderna e responsiva, seguindo boas
            práticas de componentização e foco em performance e experiência do
            usuário.
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap gap-4 mt-6">
            <CardsStacks variant="primary">
              <SiReact className="text-cyan-400 bg-gray-300/10 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>

            <CardsStacks variant="primary">
              <SiVite className="text-white bg-purple-600 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>

            <CardsStacks variant="primary">
              <SiJavascript className="text-black bg-yellow-400 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>

            <CardsStacks variant="primary">
              <SiTailwindcss className="text-white bg-cyan-500 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>

            <CardsStacks variant="primary">
              <SiGithub className="text-white bg-black border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>

            <CardsStacks variant="primary">
              <SiGit className="text-white bg-orange-600 border border-gray-700 rounded-lg w-8 h-8 p-2" />
            </CardsStacks>
          </div>

          <div className="flex gap-4 mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Projetcs;
