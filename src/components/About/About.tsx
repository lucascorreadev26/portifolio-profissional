import BadgeSection from '../Bagde/BadgeSection'

const About = () => {
  return (
    <section className="mt-24 bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">

      <div className="lg:ml-62">
        <BadgeSection>
          <span>&gt;_</span>
          <span className="font-mono uppercase">Sobre mim</span>
        </BadgeSection>
      </div>

      <div className="mt-10 lg:ml-62">

        <h2 className="sm:text-5xl lg:text-4xl font-bold font-inter text-center lg:text-left">
          Código que <span className='text-blue-600' >resolve</span>
        </h2>

        <p className="text-lg lg:text-md font-inter w-full lg:w-140 text-center lg:text-justify mt-8 text-gray-400">
          Sou desenvolvedor Full Stack Júnior baseado em São Paulo, com foco em criar aplicações web performáticas e com excelente experiência para o usuário. Minha stack envolve React e Node.js, gosto de trabalhar em equipe, receber feedback e evoluir constantemente.
        </p>

      </div>

    </section>
  )
}

export default About