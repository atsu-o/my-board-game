import BoxArtImage from "@/components/BoxArtImage";
import FloatingShopButton from "@/components/FloatingShopButton";
import GameTitle from "@/components/GameTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import SiteHeader from "@/components/SiteHeader";
import SocialLinks from "@/components/SocialLinks";
import SpecLine from "@/components/SpecLine";

const SHOP_URL = "https://example.com/shop";

const FEATURES = [
  {
    accent: "bg-violet-500",
    title: "バランスの駆け引き",
    body: "積む位置と順番が、そのまま勝敗に直結。一つの判断で流れが変わる。",
  },
  {
    accent: "bg-sky-500",
    title: "ゆらぐ緊張感",
    body: "塔が揺れる瞬間、全員の視線が一点に。崩れそうで崩れないハラハラ感。",
  },
  {
    accent: "bg-rose-500",
    title: "どこでも遊べる",
    body: "キャンプ場でも家族の集まりでも。気軽に広げて、すぐ盛り上がれる。",
  },
] as const;

const STEPS = [
  { step: "01", title: "石を積む", body: "手札から石を選び、バランスを見ながら塔に重ねます。" },
  { step: "02", title: "ゆらす", body: "ターンの流れで塔がゆらぐ。崩れないか、みんなで見守ります。" },
  { step: "03", title: "くずしたら負け", body: "塔を崩したプレイヤーはペナルティ。最後まで守り抜いた人の勝ち。" },
] as const;

const COMPONENTS = [
  { name: "カラフル石トークン", note: "積み上げ用の各サイズ" },
  { name: "スコアボード", note: "得点管理" },
  { name: "ルールブック", note: "日本語ルール説明書" },
  { name: "プレイマット", note: "河原をイメージしたマット" },
] as const;

const NEWS = [
  {
    date: "2026.06.21",
    title: "公式ホームページを公開しました",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141218] text-stone-100">
      <SiteHeader />
      <FloatingShopButton />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,80,160,0.25),transparent)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141218] to-transparent" />

          <div className="relative mx-auto max-w-lg text-center">
            <BoxArtImage
              className="mx-auto aspect-[4/5] w-full max-w-[220px] sm:max-w-[260px]"
              priority
            />

            <p className="mt-10 text-[11px] font-medium tracking-[0.4em] text-stone-500">
              BOARD GAME
            </p>
            <GameTitle className="mt-3" />
            <p className="mt-5 text-lg font-medium leading-relaxed text-stone-200 sm:text-xl">
              石をつんで、ゆらして、くずしたら負け!?
            </p>
            <div className="mt-5">
              <SpecLine />
            </div>

            <div id="news" className="mt-12">
              <p className="text-[11px] font-medium tracking-[0.3em] text-stone-500">
                NEWS
              </p>
              <ul className="mt-4 space-y-3">
                {NEWS.map((item) => (
                  <li
                    key={item.date}
                    className="border-b border-stone-800/80 py-3 text-sm last:border-0"
                  >
                    <time
                      dateTime={item.date.replace(/\./g, "-")}
                      className="text-xs text-stone-500"
                    >
                      {item.date}
                    </time>
                    <p className="mt-1 text-stone-200">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#howto"
              className="mt-10 inline-block text-sm text-stone-400 underline decoration-stone-600 underline-offset-4 transition hover:text-stone-200"
            >
              遊び方を見る
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-[#1c1a22] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="About"
              title="ゲーム紹介"
              description="賽の河原とサイを掛け合わせた、石積みのパーティゲーム。"
            />
            <div className="mt-10 space-y-6 text-center text-sm leading-[1.9] text-stone-400 sm:text-base">
              <p>
                カラフルな石を高く積み、バランスを保ちながらライバルと駆け引く。
                ルールはシンプルなのに、毎ターンの緊張感が違います。
              </p>
              <p className="text-stone-300">
                その一手で運命がゆれる——
                ハラハラドキドキのバランス勝負を、テーブルの上で。
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-stone-800/80 bg-stone-800/80 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="bg-[#1c1a22] p-6 text-center sm:p-8"
                >
                  <span
                    className={`mx-auto block h-1 w-8 rounded-full ${feature.accent}`}
                  />
                  <h3 className="mt-4 text-base font-medium text-stone-100">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              label="Visual"
              title="ビジュアル"
              description="パッケージイラストをベースにしたビジュアル。"
            />
            <div className="mt-12 space-y-4">
              <BoxArtImage
                className="aspect-[16/10] w-full"
                objectPosition="center 35%"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <BoxArtImage className="aspect-[4/3] w-full" objectPosition="right center" />
                <ImagePlaceholder label="プレイ風景 — coming soon" aspect="aspect-[4/3]" />
              </div>
            </div>
          </div>
        </section>

        {/* How to play */}
        <section id="howto" className="bg-[#1c1a22] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="How to Play"
              title="遊び方"
              description="積む、ゆらす、くずしたら負け。これだけ。"
            />
            <ol className="mt-14 space-y-0">
              {STEPS.map((item, i) => (
                <li
                  key={item.step}
                  className={`flex flex-col items-center gap-4 border-stone-800/60 py-10 text-center sm:flex-row sm:gap-10 sm:text-left ${
                    i > 0 ? "border-t" : ""
                  }`}
                >
                  <span className="shrink-0 font-mono text-3xl font-light text-stone-600">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-stone-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="Contents"
              title="収録内容"
            />
            <ul className="mt-12 divide-y divide-stone-800/80 border-y border-stone-800/80">
              {COMPONENTS.map((item, i) => (
                <li
                  key={item.name}
                  className="flex flex-col items-center gap-1 py-5 text-center sm:flex-row sm:justify-between sm:text-left"
                >
                  <span className="font-medium text-stone-200">{item.name}</span>
                  <span className="text-sm text-stone-500">{item.note}</span>
                  {i === 0 && (
                    <span className="sr-only">画像は箱絵を参照</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <BoxArtImage className="aspect-[21/9] w-full" objectPosition="center 60%" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1c1a22] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              キャンプ場でも、仲間と。
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              みんなでワイワイ遊べるカジュアルな石積みゲーム。
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-8 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-white sm:w-auto"
            >
              購入ページへ
            </a>
            <p className="mt-3 text-xs text-stone-600">
              外部の販売サイトに移動します
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800/60 px-4 py-12 sm:px-6">
        <SocialLinks />
        <p className="mt-8 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} サイの河原
        </p>
      </footer>
    </div>
  );
}
