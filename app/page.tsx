"use client";

import { useState } from "react";

type Hand = "グー" | "チョキ" | "パー";
type RoundResult = "勝ち" | "負け" | "あいこ";

const HANDS: Hand[] = ["グー", "チョキ", "パー"];

function judge(player: Hand, cpu: Hand): RoundResult {
  if (player === cpu) return "あいこ";
  if (
    (player === "グー" && cpu === "チョキ") ||
    (player === "チョキ" && cpu === "パー") ||
    (player === "パー" && cpu === "グー")
  ) {
    return "勝ち";
  }
  return "負け";
}

export default function Home() {
  const [playerHand, setPlayerHand] = useState<Hand | null>(null);
  const [cpuHand, setCpuHand] = useState<Hand | null>(null);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const play = (hand: Hand) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setPlayerHand(hand);
    setCpuHand(null);
    setResult(null);

    const nextCpuHand = HANDS[Math.floor(Math.random() * HANDS.length)];
    const nextResult = judge(hand, nextCpuHand);

    window.setTimeout(() => {
      setCpuHand(nextCpuHand);
      setResult(nextResult);
      setIsAnimating(false);

      if (nextResult === "勝ち") setWins((prev) => prev + 1);
      if (nextResult === "負け") setLosses((prev) => prev + 1);
      if (nextResult === "あいこ") setDraws((prev) => prev + 1);
    }, 800);
  };

  const reset = () => {
    setPlayerHand(null);
    setCpuHand(null);
    setResult(null);
    setIsAnimating(false);
    setWins(0);
    setLosses(0);
    setDraws(0);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur md:p-10">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-zinc-400">
          Janken App
        </p>
        <h1 className="mt-3 text-center text-4xl font-bold text-white md:text-5xl">
          じゃんけんバトル
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-zinc-300">
          手を選んでCPUと対戦。連勝を目指そう。
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {HANDS.map((hand) => (
            <button
              key={hand}
              type="button"
              onClick={() => play(hand)}
              disabled={isAnimating}
              className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {hand}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/50 p-5">
          <div className="grid gap-2 text-sm sm:grid-cols-3">
            <p>
              あなた:{" "}
              <span className={`font-semibold ${isAnimating ? "inline-block animate-bounce" : ""}`}>
                {playerHand ?? "-"}
              </span>
            </p>
            <p>
              CPU:{" "}
              <span className={`font-semibold ${isAnimating ? "inline-block animate-bounce" : ""}`}>
                {isAnimating ? "..." : (cpuHand ?? "-")}
              </span>
            </p>
            <p>
              結果:{" "}
              <span
                className={`inline-flex min-w-20 items-center justify-center rounded-full px-3 py-1 text-base font-extrabold tracking-wide ${
                  result === "勝ち"
                    ? "bg-emerald-400/20 text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.45)] animate-[result-win-pop_0.35s_ease-out]"
                    : result === "負け"
                      ? "bg-rose-500/20 text-rose-200 shadow-[0_0_24px_rgba(244,63,94,0.45)] animate-[result-shake_0.35s_ease-in-out_2,result-loss-flash_0.35s_ease-in-out_2]"
                      : result === "あいこ"
                        ? "bg-zinc-400/20 text-zinc-100"
                        : "bg-zinc-700/30 text-zinc-200"
                }`}
              >
                {result ?? "-"}
              </span>
            </p>
          </div>
          {isAnimating && (
            <p className="mt-3 text-xs text-zinc-400 animate-pulse">
              じゃんけん...
            </p>
          )}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 py-3">
            勝ち {wins}
          </div>
          <div className="rounded-xl border border-zinc-400/30 bg-zinc-400/10 py-3">
            あいこ {draws}
          </div>
          <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 py-3">
            負け {losses}
          </div>
        </div>

        <button
          type="button"
          onClick={reset}
          className="mt-6 w-full rounded-xl border border-zinc-500 bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
        >
          リセット
        </button>
      </section>
    </main>
  );
}