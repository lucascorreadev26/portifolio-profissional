import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../../components/Button/Button";

const HeroButtons = () => {
  return (
    <>
      <div className="hidden w-full items-center justify-center md:flex md:flex-row lg:w-7xl lg:justify-between">
        <div className="mt-12 flex w-80 flex-row justify-center gap-5">
          <Button variant="primary" href="#projects">
            Ver Projetos
          </Button>

          <Button variant="secondary" href="#services">
            Meus Serviços
          </Button>
        </div>

        <div className="mt-12 mr-24 hidden justify-center gap-5 lg:flex lg:flex-row">
          <Button
            variant="socialMidia"
            href="https://www.linkedin.com/in/lucascorreadev/"
            target="_blank"
          >
            <FaLinkedin className="h-5 w-5" />
            LinkedIn
          </Button>

          <Button
            variant="socialMidia"
            href="https://github.com/lucascorreadev26"
            target="_blank"
          >
            <FaGithub className="h-5 w-5" />
            GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroButtons;
