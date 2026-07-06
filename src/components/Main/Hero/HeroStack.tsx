import CardsStacks from "../../Cards/CardsStacks";

import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiVite,
} from "react-icons/si";

const HeroStack = () => {
  return (
    <div className="mt-12">
      <h2 className="uppercase text-gray-500 font-sans font-semibold text-md text-center lg:text-left">
        Stack Principal
      </h2>

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
          <SiNodedotjs className="text-green-500 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
          <span>Node.js</span>
        </CardsStacks>

        <CardsStacks variant="primary">
          <SiPostgresql className="text-sky-500 bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
          <span>PostgreSQL</span>
        </CardsStacks>

        <CardsStacks variant="primary">
          <SiNextdotjs className="text-white bg-gray-300/10 border border-gray-300 rounded-lg w-12 h-12 px-2 mt-4 mb-2" />
          <span>Next.js</span>
        </CardsStacks>

        <CardsStacks variant="primary">
          <SiPrisma className="text-white bg-slate-800 border border-gray-300 rounded-lg w-12 h-12 p-2 mt-4 mb-2" />
          <span>Prisma</span>
        </CardsStacks>
      </div>
    </div>
  );
};

export default HeroStack;
