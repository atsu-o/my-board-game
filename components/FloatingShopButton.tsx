const SHOP_URL = "https://example.com/shop";

export default function FloatingShopButton() {
  return (
    <a
      href={SHOP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-stone-600/40 bg-stone-900/90 px-5 py-3 text-sm font-medium text-stone-100 shadow-xl shadow-black/40 backdrop-blur transition hover:border-amber-500/40 hover:bg-stone-800/95"
    >
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      購入する
    </a>
  );
}
