type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "socialMidia";
  href: string;
  target?: "_blank" | "_self";
};

const Button = ({
  children,
  variant = "primary",
  href,
  target = "_self",
}: ButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`font-inter text-md inline-flex w-38 cursor-pointer items-center justify-center rounded-lg py-2 font-bold ${
        variant === "primary"
          ? "border border-blue-600/40 bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm hover:scale-105 hover:bg-[#0B1220]/90 hover:shadow-lg hover:shadow-blue-500/20"
          : variant === "secondary"
            ? "border border-blue-600/40 bg-transparent shadow-[0_0_25px_rgba(59,130,246,0.12)] shadow-blue-500/20 backdrop-blur-sm transition-colors duration-300 hover:scale-105 hover:bg-blue-500"
            : "items-center gap-2 border border-blue-600/40 bg-blue-950 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm hover:scale-105 hover:bg-[#0B1220]/90 hover:shadow-lg hover:shadow-blue-500/20"
      }`}
    >
      {children}
    </a>
  );
};

export default Button;
