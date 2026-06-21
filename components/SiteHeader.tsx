"use client";

import { useEffect, useState } from "react";
import StoneMenuIcon from "@/components/StoneMenuIcon";

const NAV_LINKS = [
  { href: "#about", label: "ゲーム紹介" },
  { href: "#news", label: "お知らせ" },
  { href: "#gallery", label: "プレイイメージ" },
  { href: "#howto", label: "遊び方" },
  { href: "#components", label: "内容物" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-purple-900/40 bg-[#1a0f24]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="truncate font-black tracking-wide">
            <span className="text-[#ff3b3b]">サイ</span>
            <span className="text-[#4db8ff]">の河原</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-purple-700/50 bg-purple-950/60 p-2 transition hover:bg-purple-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          >
            <StoneMenuIcon open={open} />
          </button>
        </div>
      </header>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={close}
          aria-label="メニューを閉じる"
        />
      )}

      <nav
        id="site-menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-purple-800/60 bg-[#1a0f24] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-purple-800/60 px-5 py-4">
          <span className="text-sm font-semibold text-stone-300">メニュー</span>
          <button
            type="button"
            onClick={close}
            className="rounded-lg border border-purple-700/50 bg-purple-950/60 p-2 transition hover:bg-purple-900/40"
            aria-label="メニューを閉じる"
          >
            <StoneMenuIcon open />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-xl px-4 py-3 text-base text-stone-200 transition hover:bg-purple-900/30 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
