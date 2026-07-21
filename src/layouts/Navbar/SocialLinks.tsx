import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {/* GitHub */}
      <a
        href="https://github.com/lucascorreadev26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252833] bg-[#0F1118] text-gray-500 transition-all duration-300 hover:border-gray-500 hover:text-white"
      >
        <FaGithub size={16} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/lucascorreadev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252833] bg-[#0F1118] text-gray-500 transition-all duration-300 hover:border-gray-500 hover:text-white"
      >
        <FaLinkedinIn size={16} />
      </a>

      {/* Twitter */}
      <a
        href="#"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252833] bg-[#0F1118] text-gray-500 transition-all duration-300 hover:border-gray-500 hover:text-white"
      >
        <FaTwitter size={16} />
      </a>

      {/* E-mail */}
      <a
        href="mailto:lucascorreadev26@gmail.com"
        aria-label="E-mail"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252833] bg-[#0F1118] text-gray-500 transition-all duration-300 hover:border-gray-500 hover:text-white"
      >
        <FiMail size={16} />
      </a>
    </div>
  );
};

export default SocialLinks;
