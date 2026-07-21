import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import BadgeSection from "../../components/Bagde/BadgeSection";
import CardsStacks from "../../components/Cards/CardsStacks";

const Tech = () => {
  return (
    <div className="bg-[#08090F] px-6 pt-24 md:px-10 lg:px-0">
      <div className="lg:ml-62">
        <BadgeSection variant="primary">
          <span>&gt;_</span>
          <span className="font-mono font-bold uppercase">Tecnologias</span>
        </BadgeSection>
      </div>

      <div className="mt-10 lg:ml-62">
        <h2 className="font-inter mb-2 text-center text-3xl font-extrabold uppercase lg:text-left lg:text-4xl">
          Meu stack técnico
        </h2>
        <p className="lg:text-md font-inter mt-2 w-full text-center text-lg text-gray-400 lg:w-140 lg:text-justify">
          Ferramentas que uso para entregar produtos robustos, escaláveis e com
          ótima experiência.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-6">
          <CardsStacks variant="primary">
            <SiReact className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-300/10 px-2 text-cyan-400" />
            <span>React</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiVite className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-purple-600 p-2 text-white" />
            <span>Vite</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiTypescript className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-300/10 px-2 text-blue-400" />
            <span>TypeScript</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiJavascript className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-yellow-400 p-2 text-black" />
            <span>JavaScript</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNodedotjs className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-300/10 px-2 text-green-500" />
            <span>Node.js</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNextdotjs className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-300/10 px-2 text-white" />
            <span>Next.js</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiExpress className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-700 p-2 text-white" />
            <span>Express</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiTailwindcss className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-cyan-500 p-2 text-white" />
            <span className="text-center">
              Tailwind
              <br />
              CSS
            </span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiPostgresql className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-gray-300/10 px-2 text-sky-500" />
            <span className="text-center">
              Postgre
              <br />
              SQL
            </span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiPrisma className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-slate-800 p-2 text-white" />
            <span>Prisma</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGithub className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-black p-2 text-white" />
            <span>GitHub</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGit className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-orange-600 p-2 text-white" />
            <span>Git</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiGraphql className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-pink-600 p-2 text-white" />
            <span>GraphQL</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiRedis className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-red-600 p-2 text-white" />
            <span>Redis</span>
          </CardsStacks>

          <CardsStacks variant="primary">
            <SiNpm className="mt-4 mb-2 h-12 w-12 rounded-lg border border-gray-300 bg-red-600 p-2 text-white" />
            <span>npm</span>
          </CardsStacks>
        </div>
      </div>
    </div>
  );
};

export default Tech;
