import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Tech from "../../sections/Tech/Tech";
import ProjectsList from "../../sections/Projects/ProjectsList";
import Servicos from "../../sections/Servicos/ServicesList";
import Business from "../../sections/Business/Business";

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
        <ProjectsList />
      </section>

      <section id="servicos">
        <Servicos />
      </section>

      <section>
        <Business />
      </section>
    </main>
  );
};

export default Main;
