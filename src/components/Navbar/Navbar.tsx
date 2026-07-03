import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between md:justify-evenly px-5 md:px-0 mt-5">
        <Logo />

        {/* Menu Desktop */}
        <ul className="hidden md:flex font-inter flex-row gap-10 text-md">
          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Início</Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Sobre</Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Tecnologias</Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Projetos</Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Serviços</Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-120">
            <Link to="/">Contato</Link>
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
            <Link to="/" onClick={() => setIsOpen(false)}>
              Início
            </Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Tecnologias
            </Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Projetos
            </Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Serviços
            </Link>
          </li>

          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;