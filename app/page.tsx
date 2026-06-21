import BoxArtImage from "@/components/BoxArtImage";
import GameTitle from "@/components/GameTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import SiteHeader from "@/components/SiteHeader";
import SpeechBubble from "@/components/SpeechBubble";

const SHOP_URL = "https://example.com/shop";

const SPECS = [
  { label: "人数", value: "2〜4人", color: "bg-rose-600", badge: "2-4" },
  { label: "プレイ時間", value: "20〜30分", color: "bg-sky-600", badge: "30" },
  { label: "対象年齢", value: "6歳以上", color: "bg-emerald-600", badge: "6+" },
] as const;

const FEATURES = [
  {
    title: "その一手で運命がゆれる！",
    body: "積む位置、積む順番、積む高さ。一つの判断が、そのまま勝敗の分かれ道になるバランス勝負。",
    bubble: "yellow" as const,
  },
  {
    title: "ハラハラドキドキのバランス勝負！",
    body: "石をゆらす瞬間の緊張感。崩れそうで崩れない、崩れたら一気に形勢逆転のドキドキ体験。",
    bubble: "dark" as const,
  },
  {
    title: "河原のあの感覚を、テーブルに",
    body: "賽の河原で石を積むあの感覚と、サイの迫力。キャンプ場でも、家族でも、気軽に盛り上がれる。",
    bubble: "yellow" as const,
  },
] as const;

const STEPS = [
  { step: "01", title: "石を積む", body: "手札から石を選び、バランスを見ながら塔に重ねていきます。" },
  { step: "02", title: "ゆらす", body: "ターンの流れで塔がゆらぐ。崩れないか、全員の視線が一点に集まります。" },
  { step: "03", title: "くずしたら負け！？", body: "塔を崩してしまったプレイヤーはペナルティ。最後まで塔を守り抜いた人の勝ち！" },
] as const;

const COMPONENTS = [
  { name: "カラフル石トークン", note: "紫・青・赤など、箱絵のカラフルな石" },
  { name: "スコアボード", note: "得点管理用ボード" },
  { name: "ルールブック", note: "日本語ルール説明書" },
  { name: "プレイマット", note: "夕暮れの河原をイメージしたマット" },
] as const;

const NEWS = [
  {
    date: "2026.06.21",
    title: "公式ホームページを公開しました",
    body: "「サイの河原」の公式ホームページを公開しました。ゲーム紹介や遊び方、購入情報はこちらからご覧いただけます。",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0f24] text-stone-100">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/40 via-orange-900/20 to-[#1a0f24]" />
          <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 top-32 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pb-20 lg:pt-16">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-bold tracking-[0.3em] text-amber-300/90 sm:text-sm">
                BOARD GAME
              </p>
              <GameTitle className="mt-3" />
              <p className="mt-4 text-lg font-bold leading-relaxed text-white sm:text-xl">
                石をつんで、ゆらして、くずしたら負け!?
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <SpeechBubble variant="yellow">
                  その一手で運命がゆれる!
                </SpeechBubble>
                <SpeechBubble variant="dark">
                  ハラハラドキドキのバランス勝負!
                </SpeechBubble>
              </div>

              <div id="news" className="mt-8">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-stone-300">
                  <span className="h-px flex-1 bg-purple-800/60" />
                  お知らせ
                  <span className="h-px flex-1 bg-purple-800/60" />
                </h2>
                <ul className="mt-4 space-y-3">
                  {NEWS.map((item) => (
                    <li
                      key={item.date}
                      className="rounded-xl border border-purple-800/50 bg-purple-950/40 p-4 backdrop-blur"
                    >
                      <time
                        dateTime={item.date.replace(/\./g, "-")}
                        className="text-xs text-amber-400/90"
                      >
                        {item.date}
                      </time>
                      <h3 className="mt-1 text-sm font-semibold text-stone-100 sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-stone-400 sm:text-sm">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#howto"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-500/60 bg-amber-500/10 px-6 py-3.5 text-sm font-bold text-amber-200 transition hover:bg-amber-500/20 sm:w-auto"
              >
                遊び方を見る
                <span aria-hidden>↓</span>
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <BoxArtImage className="aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none" priority />
            </div>
          </div>
        </section>

        {/* Specs ribbon — matches box art icons */}
        <section className="border-y border-purple-900/40 bg-[#12091a]/80">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-8 sm:gap-6 sm:py-10">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-3"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black text-white shadow-lg ${spec.color}`}
                >
                  {spec.badge}
                </span>
                <div>
                  <p className="text-[11px] text-stone-500">{spec.label}</p>
                  <p className="text-base font-bold text-white">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="About"
              title="ゲーム紹介"
              description="夕暮れの河原で、カラフルな石を積み上げるハラハラ系パーティゲーム。"
            />

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <BoxArtImage className="aspect-[3/4] w-full max-w-xs mx-auto lg:max-w-sm" objectPosition="center top" />
              <div className="space-y-5 text-sm leading-relaxed text-stone-300 sm:text-base">
                <p>
                  「サイの河原」は、日本の「賽の河原」と動物の「サイ」を掛け合わせた
                  石積みボードゲーム。カラフルな石を高く積み、バランスを保ちながら
                  ライバルと駆け引く、ハラハラの一戦が楽しめます。
                </p>
                <p>
                  石をつんで、ゆらして、くずしたら負け——
                  シンプルなルールなのに、毎ターンの緊張感が違います。
                  キャンプ場や家族の集まりでも、すぐに盛り上がれる設計です。
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col rounded-2xl border border-purple-800/40 bg-purple-950/30 p-6"
                >
                  <SpeechBubble variant={feature.bubble} className="text-xs sm:text-sm">
                    {feature.title}
                  </SpeechBubble>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — box art detail crops */}
        <section id="gallery" className="border-y border-purple-900/40 bg-gradient-to-b from-purple-950/40 to-[#1a0f24] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Visual"
              title="プレイイメージ"
              description="パッケージイラストをベースにしたビジュアル。プレイ写真は後日追加予定。"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <BoxArtImage className="aspect-square w-full sm:col-span-2 lg:col-span-2 lg:aspect-[16/10]" objectPosition="center 40%" />
              <BoxArtImage className="aspect-square w-full" objectPosition="right center" />
              <ImagePlaceholder label="プレイ風景 — COMING SOON" aspect="aspect-[4/3]" />
              <ImagePlaceholder label="コンポーネント写真 — COMING SOON" aspect="aspect-[4/3]" />
            </div>
          </div>
        </section>

        {/* How to play */}
        <section id="howto" className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="How to Play"
              title="遊び方"
              description="石をつんで、ゆらして、くずしたら負け!? ルールはこれだけ。"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-purple-800/40 bg-gradient-to-b from-purple-900/20 to-transparent p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3b3b] to-[#4db8ff] text-sm font-black text-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="border-t border-purple-900/40 bg-purple-950/20 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Contents"
              title="収録内容"
              description="カラフルな石トークンを中心に、すぐ遊べるコンポーネント一式。"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {COMPONENTS.map((item, i) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-purple-800/40 bg-[#1a0f24]/80"
                >
                  {i === 0 ? (
                    <BoxArtImage className="aspect-[16/9] w-full" objectPosition="center 55%" />
                  ) : (
                    <ImagePlaceholder
                      label={`${item.name} — COMING SOON`}
                      aspect="aspect-[16/9]"
                    />
                  )}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-stone-100">{item.name}</h3>
                    <p className="mt-1 text-sm text-stone-500">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.15),_transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border-2 border-purple-700/40 p-8 text-center sm:p-12">
            <BoxArtImage className="absolute inset-0 opacity-20" objectPosition="center" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">
                Get the Game
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                キャンプ場でも、仲間と。
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">
                ハラハラドキドキのバランス勝負を、みんなで体験しよう。
              </p>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/40 transition hover:from-orange-400 hover:to-amber-400 sm:w-auto sm:text-base"
              >
                購入ページへ進む
              </a>
              <p className="mt-3 text-xs text-stone-500">
                ※ 外部の販売サイトに移動します
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-900/40 bg-[#12091a] px-4 py-10 text-center sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["X", "Instagram", "YouTube"].map((name) => (
            <a
              key={name}
              href="#"
              className="min-w-[7rem] rounded-xl border border-purple-700/50 bg-purple-950/50 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-amber-500/50 hover:bg-purple-900/40"
            >
              {name}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-stone-600">
          © {new Date().getFullYear()} サイの河原
        </p>
      </footer>
    </div>
  );
}
