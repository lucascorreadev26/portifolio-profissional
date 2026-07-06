import BadgeSection from '../../Bagde/BadgeSection'

const About = () => {
  return (
    <section className="mt-24 bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">

    <div>
        <div className="lg:ml-62">
          <BadgeSection>
            <span>&gt;_</span>
            <span className="font-mono font-bold uppercase">Sobre mim</span>
          </BadgeSection>
        </div>

        <div className="mt-10 lg:ml-62">
          <h2 className="sm:text-5xl lg:text-4xl font-extrabold font-inter text-center lg:text-left uppercase mb-2">
            Código que <span className='text-blue-600' >resolve</span>
          </h2>
          <h2 className="sm:text-5xl lg:text-4xl font-extrabold font-inter text-center lg:text-left uppercase">
            <span className='text-blue-600'>Soluções</span> que geram resultado
          </h2>

          <p className="text-lg lg:text-md font-inter w-full lg:w-140 text-center lg:text-justify mt-8 text-gray-400">
            Sou desenvolvedor full stack baseado no Rio de Janeiro, com foco em criar aplicações web performáticas e escaláveis. Trabalho principalmente com React, TypeScript, Node.js e PostgreSQL, desenvolvendo interfaces intuitivas e APIs bem estruturadas. 
          </p>

          <p className="text-lg lg:text-md font-inter w-full lg:w-140 text-center lg:text-justify mt-4 text-gray-400">
            Valorizo o aprendizado contínuo, a comunicação clara e o trabalho em equipe. Estou sempre em busca de novos desafios, recebendo feedbacks como oportunidade de evolução e contribuindo para projetos que gerem impacto real.
          </p>
        </div>
    </div>

    <div>
      
      
    </div>

    </section>
  )
}

export default About