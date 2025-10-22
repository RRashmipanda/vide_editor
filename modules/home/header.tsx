import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-white/90 via-gray-50/80 to-white/90 dark:from-zinc-900/90 dark:via-zinc-800/80 dark:to-zinc-900/90 w-full backdrop-blur-md shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] border-b border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2.5 rounded-b-[28px] transition-all duration-300 ease-in-out">
          
          {/* Logo + Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" height={60} width={60} />
              <span className="hidden sm:block font-extrabold text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                VideEditor
              </span>
            </Link>

            {/* Separator */}
            <span className="text-zinc-300 dark:text-zinc-500">|</span>

            {/* Desktop Links */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/docs/components/background-paths"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Docs
              </Link>

              <Link
                href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                API
                <span className="text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-lg px-1 py-0.5 text-xs">
                  New
                </span>
              </Link>
            </div>
          </div>

          {/* Right-side items */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <UserButton />
          </div>

          {/* Mobile navigation */}
          <div className="flex sm:hidden items-center gap-4">
            <Link
              href="/docs/components/action-search-bar"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              API
            </Link>
            <ThemeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}
