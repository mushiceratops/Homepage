"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Works", href: "/works" },
  { label: "Projects", href: "/projects" },
  { label: "Activities", href: "/activities" },
  { label: "CV", href: "/cv" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-washi/95 backdrop-blur-md border-b-2 border-green">
      <nav className="max-w-[860px] mx-auto flex items-center justify-between px-6 h-14">
        <Link
          href="/"
          className="font-serif text-base font-semibold text-green tracking-wide"
        >
          Sohei Tsukahara
        </Link>

        {/* PC ナビ */}
        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={`nav-link${pathname === href ? " nav-link-active" : ""}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ハンバーガーボタン */}
        <button
          className="md:hidden text-green text-2xl leading-none bg-transparent border-none cursor-pointer"
          aria-label="メニューを開く"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* モバイルメニュー */}
      {open && (
        <div className="md:hidden bg-washi border-t border-green-border px-6 py-2">
          <ul className="list-none flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 text-sm font-semibold tracking-wide border-b border-green-border last:border-0 ${pathname === href ? "text-green" : "text-text-sub hover:text-green"}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
