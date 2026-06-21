type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500">
        {label}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
