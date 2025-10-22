"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-white/90 via-gray-50/80 to-white/90 
        dark:from-zinc-900/90 dark:via-zinc-800/80 dark:to-zinc-900/90 
        w-full backdrop-blur-md shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] 
        border-b border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)] 
        transition-all duration-300 ease-in-out"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">

          {/* 🔹 Left Section (Logo + Nav Links) */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" height={45} width={45} />
              <span className="hidden sm:block font-extrabold text-lg bg-gradient-to-r 
                from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text 
                tracking-tight"
              >
                VideEditor
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden sm:flex items-center gap-5 ml-4">
              <Link
                href="/docs"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/api"
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                API
                <span className="text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-lg px-1 py-0.5 text-xs">
                  New
                </span>
              </Link>
            </nav>
          </div>

          {/* 🔹 Right Section (Theme + UserButton) */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <UserButton />
          </div>

          {/* 🔹 Mobile Controls */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md border border-gray-300/50 dark:border-zinc-700/60 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-start gap-3 px-6 py-3 border-t border-gray-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg">
            <Link
              href="/docs"
              className="w-full text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/api"
              className="w-full text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              API <span className="text-xs text-blue-500 ml-1">(New)</span>
            </Link>

            {/* Divider */}
            <div className="pt-2 border-t border-gray-200 dark:border-zinc-700 w-full flex justify-end">
              <UserButton />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
