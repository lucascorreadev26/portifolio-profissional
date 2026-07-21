import BadgeSection from "../../components/Bagde/BadgeSection";

const About = () => {
  return (
    <section className="mt-24 bg-[#08090F] px-6 pt-24 md:px-10 lg:px-0">
      <div>
        <div className="lg:ml-62">
          <BadgeSection>
            <span>&gt;_</span>
            <span className="font-mono font-bold uppercase">Sobre mim</span>
          </BadgeSection>
        </div>

        <div className="mt-10 lg:ml-62">
          <h2 className="font-inter mb-2 text-center text-3xl font-extrabold uppercase lg:text-left lg:text-4xl">
            Código que <span className="text-blue-600">resolve</span>
          </h2>
          <h2 className="font-inter text-center text-3xl font-extrabold uppercase lg:text-left lg:text-4xl">
            <span className="text-blue-600">Soluções</span> que geram resultado
          </h2>

          <p className="lg:text-md font-inter mt-8 w-full text-center text-lg text-gray-400 lg:w-140 lg:text-justify">
            Sou desenvolvedor full stack baseado no Rio de Janeiro, com foco em
            criar aplicações web performáticas e escaláveis. Trabalho
            principalmente com React, TypeScript, Node.js e PostgreSQL,
            desenvolvendo interfaces intuitivas e APIs bem estruturadas.
          </p>

          <p className="lg:text-md font-inter mt-4 w-full text-center text-lg text-gray-400 lg:w-140 lg:text-justify">
            Valorizo o aprendizado contínuo, a comunicação clara e o trabalho em
            equipe. Estou sempre em busca de novos desafios, recebendo feedbacks
            como oportunidade de evolução e contribuindo para projetos que gerem
            impacto real.
          </p>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default About;
