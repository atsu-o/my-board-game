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
      className={`relative flex ${aspect} items-center justify-center overflow-hidden rounded-2xl border border-stone-800/60 bg-stone-900/40`}
    >
      <span className="text-xs uppercase tracking-widest text-stone-600">
        {label}
      </span>
    </div>
  );
}
