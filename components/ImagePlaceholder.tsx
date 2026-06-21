type ImagePlaceholderProps = {
  label: string;
  aspect?: string;
};

export default function ImagePlaceholder({
  label,
  aspect = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex ${aspect} items-center justify-center overflow-hidden rounded-xl border border-dashed border-purple-700/50 bg-gradient-to-br from-purple-950/80 to-[#1a0f24]`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 h-full w-px bg-stone-500" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-stone-500" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-stone-500" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-stone-500" />
      </div>
      <span className="relative rounded-md bg-stone-950/60 px-3 py-1.5 text-xs text-stone-400">
        {label}
      </span>
    </div>
  );
}
