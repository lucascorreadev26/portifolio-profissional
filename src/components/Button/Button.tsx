type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "socialMidia";
};

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={`font-inter font-bold text-md justify-center py-2 inline-flex w-38 rounded-lg cursor-pointer items-center
        ${
          variant === "primary"
            ? "bg-blue-600 border border-blue-600/40 hover:bg-[#0B1220]/90 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            : variant === "secondary"
              ? "bg-transparent border border-blue-600/40 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm shadow-blue-500/20 hover:bg-blue-500 transition-colors duration-300 hover:scale-105"
              : "bg-blue-950 border items-center gap-2 border-blue-600/40 hover:bg-[#0B1220]/90 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
        }    
        `}
    >
      {children}
    </button>
  );
};

export default Button;
