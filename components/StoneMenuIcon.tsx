const STONE_COLORS = [
  "from-violet-500 to-violet-700 border-violet-400/60",
  "from-sky-500 to-sky-700 border-sky-400/60",
  "from-rose-500 to-rose-700 border-rose-400/60",
  "from-amber-500 to-amber-700 border-amber-400/60",
] as const;

type StoneMenuIconProps = {
  open: boolean;
};

export default function StoneMenuIcon({ open }: StoneMenuIconProps) {
  const stones = [
    { width: 24, rotate: open ? 14 : -2, y: 14, color: STONE_COLORS[0] },
    { width: 20, rotate: open ? -12 : 2, y: 7, color: STONE_COLORS[1] },
    { width: 16, rotate: open ? 10 : -1, y: 0, color: STONE_COLORS[2] },
  ];

  return (
    <span className="relative block h-7 w-7" aria-hidden>
      {stones.map((stone, i) => (
        <span
          key={i}
          className={`absolute left-1/2 block h-[6px] rounded-full border bg-gradient-to-b shadow-sm transition-all duration-300 ${stone.color}`}
          style={{
            width: stone.width,
            bottom: stone.y,
            transform: `translateX(-50%) rotate(${stone.rotate}deg)`,
          }}
        />
      ))}
    </span>
  );
}
