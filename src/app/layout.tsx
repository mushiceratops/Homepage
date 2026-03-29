import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  preload: false,
});

export const metadata: Metadata = {
  title: "Sohei Tsukahara",
  description:
    "塚原壮平のホームページ。理論物理学（場の量子論・量子重力）の研究と Web エンジニアとしての活動を発信します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
      >
        <Header />
        <main className="max-w-[860px] mx-auto px-6 pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
