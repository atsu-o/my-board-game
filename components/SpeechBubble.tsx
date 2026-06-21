type SpeechBubbleProps = {
  children: React.ReactNode;
  variant?: "yellow" | "dark";
  className?: string;
};

export default function SpeechBubble({
  children,
  variant = "yellow",
  className = "",
}: SpeechBubbleProps) {
  const styles =
    variant === "yellow"
      ? "bg-yellow-400 text-stone-900 border-yellow-300"
      : "bg-stone-900 text-stone-100 border-stone-700";

  return (
    <p
      className={`relative inline-block rounded-xl border-2 px-4 py-2 text-sm font-bold leading-snug shadow-lg sm:text-base ${styles} ${className}`}
      style={{
        clipPath:
          "polygon(0% 8%, 4% 0%, 96% 0%, 100% 8%, 100% 92%, 96% 100%, 4% 100%, 0% 92%)",
      }}
    >
      {children}
    </p>
  );
}
