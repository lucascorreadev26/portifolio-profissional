type CardsProps = {
  children: React.ReactNode;
  variant: "primary";
};

const CardsStacks = ({ children, variant = "primary" }: CardsProps) => {
  return (
    <div>
      <div
        className={`inline-flex flex-col items-center font-sans text-sm
            ${variant === "primary"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardsStacks;
