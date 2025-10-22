"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

   if (!mounted) return null;

  return (
       <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-18 z-50 p-2 rounded-b-md bg-gray-100 dark:bg-gray-800 shadow-sm hover:scale-105 transition-transform"
    >

    
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-black transition-colors" />
      ) : (
        <Sun className="h-4 w-4 text-blue-500 transition-colors" />
      )}
    </button>
  );
}
