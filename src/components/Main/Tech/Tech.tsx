import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiGit,
  SiJavascript,
  SiGraphql,
  SiRedis,
  SiNpm,
  SiVite,
} from "react-icons/si";
import BadgeSection from "../../Bagde/BadgeSection";
import CardsStacks from "../../Cards/CardsStacks";

const Tech = () => {
  return (
    <div className=" bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">
      <div className="lg:ml-62">
        <BadgeSection variant="primary">
          <span>&gt;_</span>
          <span className="font-mono font-bold uppercase">Tecnologias</span>
        </BadgeSection>
      </div>

      <div className="mt-10 lg:ml-62">
        <h2 className="sm:text-5xl lg:text-4xl font-extrabold font-inter text-center lg:text-left uppercase mb-2">
          Meu stack técnico
        </h2>
        <p className="text-lg lg:text-md font-inter w-full lg:w-140 text-center lg:text-justify mt-2 text-gray-400">
          Ferramentas que uso para entregar produtos robustos, escaláveis e com
          ótima experiência.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mt-6">
          <CardsStacks variant="primary">
            <SiReact className="text-cyan-400 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
            <span>React</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiVite className="text-white bg-purple-600 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>Vite</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiTypescript className="text-blue-400 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
            <span>TypeScript</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiJavascript className="text-black bg-yellow-400 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>JavaScript</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNodedotjs className="text-green-500 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
            <span>Node.js</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNextdotjs className="text-white bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
            <span>Next.js</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiExpress className="text-white bg-gray-700 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>Express</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiTailwindcss className="text-white bg-cyan-500 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span className="text-center">
              Tailwind
              <br />
              CSS
            </span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiPostgresql className="text-sky-500 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
            <span className="text-center">
              Postgre
              <br />
              SQL
            </span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiPrisma className="text-white bg-slate-800 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>Prisma</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGithub className="text-white bg-black border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>GitHub</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGit className="text-white bg-orange-600 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>Git</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGraphql className="text-white bg-pink-600 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>GraphQL</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiRedis className="text-white bg-red-600 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>Redis</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNpm className="text-white bg-red-600 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
            <span>npm</span>
          </CardsStacks>
        </div>
      </div>
    </div>
  );
};

export default Tech;
