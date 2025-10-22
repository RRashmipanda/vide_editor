"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const words = ["AI-powered.", "Fast.", "Beautiful."];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const current = words[index];
    const interval = setInterval(() => {
      setDisplayed(current.slice(0, i++));
      if (i > current.length) {
        clearInterval(interval);
        setTimeout(() => setIndex((index + 1) % words.length), 1500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-5 py-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      {/* Glowing grid background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(to_right,rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <h1
          className="z-20 mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 
          tracking-tight leading-[1.2] drop-shadow-[0_0_20px_rgba(0,0,255,0.2)] transition-all duration-300"
        >
          Build with Intelligence.
        </h1>

        {/* Animated tagline */}
        <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-300 mt-2 min-h-[28px]">
          {displayed}
          <span className="animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-center leading-relaxed mt-4">
          Experience next-generation AI collaboration that writes, refines, and optimizes your code — so you can focus on innovation, not syntax.
        </p>

        {/* Button */}
        <Link href="/dashboard">
          <Button
            variant="default"
            size="lg"
            className="mt-6 group flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
