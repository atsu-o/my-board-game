import Image from "next/image";

type BoxArtImageProps = {
  className?: string;
  priority?: boolean;
  objectPosition?: string;
};

export default function BoxArtImage({
  className = "",
  priority = false,
  objectPosition = "center",
}: BoxArtImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl shadow-purple-900/30 ${className}`}
    >
      <Image
        src="/images/box-art.png"
        alt="ボードゲーム『サイの河原』パッケージ"
        fill
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
