import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "サイの河原 | 石積みボードゲーム",
  description:
    "石をつんで、ゆらして、くずしたら負け!? 2〜4人・20〜30分・6歳以上。ハラハラドキドキのバランス勝負。",
  openGraph: {
    title: "サイの河原 | 石積みボードゲーム",
    description:
      "石をつんで、ゆらして、くずしたら負け!? ハラハラドキドキのバランス勝負。",
    images: [{ url: "/images/box-art.png", width: 1200, height: 1200, alt: "サイの河原 パッケージ" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a0f24] text-stone-100">
        {children}
      </body>
    </html>
  );
}
