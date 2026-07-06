import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "tech",
        "projects",
        "services",
        "contact",
      ];

      const currentSection = [...sections].reverse().find((section) => {
        const element = document.getElementById(section);

        if (!element) return false;

        const offset = element.offsetTop - 150;

        return window.scrollY >= offset;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50 bg-[#08090F] flex items-center justify-between md:justify-evenly px-5 md:px-0 py-5">
        <Logo />

        {/* Menu Desktop */}
        <ul className="hidden md:flex font-inter flex-row gap-10 text-md">
          <li
            className={`transition-all duration-300 hover:scale-110 ${
              activeSection === "home" ? "text-blue-500" : "hover:text-blue-500"
            }`}
          >
            <a href="#home">Início</a>
          </li>

          <li
            className={`transition-all duration-300 hover:scale-110 ${
              activeSection === "about"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            <a href="#about">Sobre</a>
          </li>

          <li
            className={`transition-all duration-300 hover:scale-110 ${
              activeSection === "tech" ? "text-blue-500" : "hover:text-blue-500"
            }`}
          >
            <a href="#tech">Tecnologias</a>
          </li>

          <li
            className={`transition-all duration-300 hover:scale-110 ${
              activeSection === "projects"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            <a href="#projects">Projetos</a>
          </li>

          <li
            className={`transition-all duration-300 hover:scale-110 ${
              activeSection === "services"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            <a href="#services">Serviços</a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <a href="#contact">Contato</a>
          </li>
        </ul>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 mt-8 font-inter text-lg">
          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Início
            </a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#about" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#tech" onClick={() => setIsOpen(false)}>
              Tecnologias
            </a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projetos
            </a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Serviços
            </a>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
