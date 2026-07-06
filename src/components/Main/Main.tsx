import Hero from "./Hero/Hero";
import About from "./About/About";
import Tech from "./Tech/Tech";
import Projetcs from "./Projects/Projetcs";

const Main = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="tech">
        <Tech />
      </section>

      <section id="projects">
        <Projetcs />
      </section>
    </main>
  );
};

export default Main;