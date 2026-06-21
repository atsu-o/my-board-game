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
      className={`font-black leading-tight tracking-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] ${sizeClass} ${className}`}
    >
      <span className="text-[#ff3b3b]">サイ</span>
      <span className="text-[#4db8ff]">の河原</span>
    </h1>
  );
}
