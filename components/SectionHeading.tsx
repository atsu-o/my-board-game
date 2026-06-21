type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400/90">
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <div
        className={`mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#ff3b3b] via-amber-500 to-[#4db8ff] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
