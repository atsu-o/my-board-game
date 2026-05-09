export default function Home() {
  return (
    <main className="cg-playmat flex-1">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <header className="cg-surface rounded-3xl px-6 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="cg-card-title text-3xl font-semibold text-white sm:text-4xl">
                My Card Game
              </h1>
              <p className="mt-1 text-sm text-white/70">
                ターン制カードゲームっぽいUI（手札・フィールド・山札）
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-xs text-white/70">
                Turn <span className="font-semibold text-white">1</span>
              </div>
              <button className="cg-button rounded-xl px-4 py-2 text-sm font-semibold">
                ゲーム開始
              </button>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="cg-surface rounded-3xl p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="cg-card-title text-base font-semibold text-white/90">
                Battlefield
              </h2>
              <div className="text-xs text-white/60">
                Drag & Drop は後で実装
              </div>
            </div>

            <div className="mt-5 grid gap-5">
              <div className="grid gap-3">
                <div className="text-xs font-semibold tracking-wide text-white/60">
                  Opponent
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`op-${i}`} className="cg-slot aspect-[2.5/3.5]" />
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="text-xs font-semibold tracking-wide text-white/60">
                  Field
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  <article className="cg-card aspect-[2.5/3.5] p-3">
                    <div className="flex h-full flex-col">
                      <div className="text-[11px] font-semibold text-white/85">
                        Sword Knight
                      </div>
                      <div className="mt-2 flex-1 rounded-lg bg-black/25" />
                      <div className="mt-2 flex items-center justify-between text-[11px] text-white/70">
                        <span>ATK 3</span>
                        <span>HP 2</span>
                      </div>
                    </div>
                  </article>

                  <article className="cg-card aspect-[2.5/3.5] p-3">
                    <div className="flex h-full flex-col">
                      <div className="text-[11px] font-semibold text-white/85">
                        Arcane Bolt
                      </div>
                      <div className="mt-2 flex-1 rounded-lg bg-black/25" />
                      <div className="mt-2 text-[11px] text-white/70">
                        Deal 2 damage.
                      </div>
                    </div>
                  </article>

                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`field-${i}`} className="cg-slot aspect-[2.5/3.5]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="cg-surface rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="cg-card-title text-sm font-semibold text-white/90">
                  Deck
                </h3>
                <span className="text-xs text-white/60">30</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="cg-card aspect-[2.5/3.5] p-3">
                  <div className="text-[11px] font-semibold text-white/80">
                    Draw
                  </div>
                  <div className="mt-2 text-[11px] text-white/65">
                    Click to draw
                  </div>
                </div>
                <div className="cg-card aspect-[2.5/3.5] p-3">
                  <div className="text-[11px] font-semibold text-white/80">
                    Grave
                  </div>
                  <div className="mt-2 text-[11px] text-white/65">
                    0 cards
                  </div>
                </div>
              </div>
            </div>

            <div className="cg-surface rounded-3xl p-5 sm:p-6">
              <h3 className="cg-card-title text-sm font-semibold text-white/90">
                Player
              </h3>
              <div className="mt-3 grid gap-2 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span>HP</span>
                  <span className="font-semibold text-white">20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Energy</span>
                  <span className="font-semibold text-white">1</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <div className="cg-surface rounded-3xl p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="cg-card-title text-base font-semibold text-white/90">
                Hand
              </h2>
              <div className="text-xs text-white/60">5 cards</div>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-3">
              {[
                "Forest Sprite",
                "Shield Wall",
                "Quick Strike",
                "Mana Stone",
                "Sky Drake",
              ].map((name) => (
                <article
                  key={name}
                  className="cg-card w-[150px] shrink-0 snap-start p-3"
                >
                  <div className="text-[11px] font-semibold text-white/85">
                    {name}
                  </div>
                  <div className="mt-2 h-[120px] rounded-lg bg-black/25" />
                  <div className="mt-2 text-[11px] text-white/70">
                    Tap to play
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}