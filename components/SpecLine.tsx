const ITEMS = ["2〜4人", "20〜30分", "6歳以上"] as const;

export default function SpecLine() {
  return (
    <p className="text-sm tracking-wide text-stone-400 sm:text-base">
      {ITEMS.map((item, i) => (
        <span key={item}>
          {i > 0 && <span className="mx-3 text-stone-600">·</span>}
          <span className="text-stone-300">{item}</span>
        </span>
      ))}
    </p>
  );
}
