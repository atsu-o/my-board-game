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
      <header className="sticky top-0 z-50 border-b border-stone-800/50 bg-[#141218]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="truncate text-base font-bold tracking-wide text-white sm:text-lg">
            サイの河原
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 text-stone-400 transition hover:bg-stone-800/60 hover:text-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
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
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100%,18rem)] flex-col border-l border-stone-800/60 bg-[#141218] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-stone-800/60 px-5 py-4">
          <span className="text-sm text-stone-500">Menu</span>
          <button
            type="button"
            onClick={close}
            className="rounded-lg p-2 text-stone-400 transition hover:bg-stone-800/60"
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
                className="block px-4 py-3 text-sm text-stone-300 transition hover:bg-stone-800/40 hover:text-white"
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
