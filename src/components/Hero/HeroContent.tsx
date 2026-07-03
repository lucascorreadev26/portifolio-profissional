import Profile from "./Profile"

const HeroContent = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-68">

      <div className="flex flex-col">
        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-inter font-bold mt-12 text-center lg:text-left">
          Lucas Corrêa
        </h2>

        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 mt-4">
          <span className="inline-flex w-12 lg:w-16 h-1 bg-blue-500 ml-0 lg:ml-3"></span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-inter font-bold">
            Full Stack Developer
          </h2>
        </div>

        <p className="text-lg lg:text-xl font-inter w-full lg:w-140 text-center lg:text-justify mt-8 text-gray-400">
          Construo aplicações web modernas com React, Node.js e PostgreSQL.
          Focado em código limpo, UX pensada e soluções que escalam.
        </p>
      </div>

      <Profile />
    </div>
  )
}

export default HeroContent