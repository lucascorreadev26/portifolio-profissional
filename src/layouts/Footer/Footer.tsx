import Logo from "../Navbar/Logo";
import SocialLinks from "../Navbar/SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-gray-950 py-4 text-white">
      <div className="mx-auto flex flex-col items-center justify-center gap-6 py-8 text-center">
        <Logo />
        <p>
          &copy; {new Date().getFullYear()} Lucas Correa. Todos os direitos
          reservados.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
