type GameTitleProps = {
  size?: "hero" | "sm";
  className?: string;
};

export default function GameTitle({ size = "hero", className = "" }: GameTitleProps) {
  const sizeClass =
    size === "hero"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-lg sm:text-xl";

  return (
    <h1
      className={`mx-auto font-bold leading-tight tracking-tight text-white ${sizeClass} ${className}`}
    >
      サイの河原
    </h1>
  );
}
