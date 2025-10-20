"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Terminal, Cpu, Rocket, Globe2, Code2, MessageSquare, FolderTree } from "lucide-react";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";

const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0c0c16] text-white">
      {/*  Top-right Sign In Button */}
      {!showSignIn && (
        <div className="absolute top-6 right-6 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSignIn(true)}
            className="relative text-sm px-5 py-2 border-none font-medium text-white bg-zinc-900/50 backdrop-blur-sm 
            hover:bg-zinc-800/80 transition-all rounded-full before:absolute before:inset-0 
            before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:-z-10 
            before:opacity-70 hover:before:opacity-100"
          >
            Sign In
          </Button>
        </div>
      )}

      {/*  Animated Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-gradient-to-r from-purple-700/20 via-blue-700/15 to-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-blue-600/20 via-teal-500/10 to-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Hero / SignIn Section */}
      {!showSignIn ? (
        <>
          <HeroSection onSignIn={() => setShowSignIn(true)} />
          <FeatureSection />
          <FooterSection />
        </>
      ) : (
        <div className="relative z-10 w-full flex justify-center items-center px-6 py-20">
          <SignInFormClient />
        </div>
      )}
    </main>
  );
};

export default Page;

/* ---------------- Hero Section ---------------- */
const HeroSection = ({ onSignIn }: { onSignIn: () => void }) => (
  <section className="relative text-center px-6 max-w-3xl z-10 py-24">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 backdrop-blur-md border border-zinc-700 mb-8">
      <Sparkles className="w-4 h-4 text-cyan-400" />
      <span className="text-sm text-zinc-400">AI-Powered Web IDE</span>
    </div>

    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(79,70,229,0.2)]">
      Videcode Editor
    </h1>

    <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
      A blazing-fast, AI-integrated web IDE built with Next.js, WebContainers, and local LLMs — 
      code, collaborate, and deploy instantly.
    </p>

    <Button
      onClick={onSignIn}
      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-300 text-white text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-700/30 hover:scale-[1.03]"
    >
      Launch Editor
    </Button>

    {/* Code Preview Mockup */}
    <div className="relative mt-16 mx-auto max-w-xl text-left font-mono text-sm bg-[#101020] border border-zinc-800 rounded-2xl p-6 shadow-[0_0_40px_rgba(56,189,248,0.05)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-zinc-300">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">videCode</span> = () =&gt; {"{"}
        {"\n  "}
        <span className="text-cyan-400">return</span>{" "}
        <span className="text-green-400">"AI-powered coding reimagined."</span>;
        {"\n"}
        {"}"}{"\n\n"}
        <span className="text-gray-500">// Run instantly inside your browser 🚀</span>
      </pre>
    </div>
  </section>
);

/* ---------------- Feature Section ---------------- */
const FeatureSection = () => (
  <section className="relative z-10 py-24 px-6 w-full bg-gradient-to-b from-transparent to-[#0e0e1a]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
        ⚡ Everything You Need to Build Instantly
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          {
            icon: Globe2,
            title: "WebContainers Runtime",
            desc: "Run full-stack apps directly in your browser — no setup, no servers.",
          },
          {
            icon: Terminal,
            title: "Built-in Terminal",
            desc: "Experience a native-like terminal with xterm.js integration.",
          },
          {
            icon: Cpu,
            title: "AI Autocomplete",
            desc: "Get real-time suggestions powered by Ollama LLMs running locally.",
          },
          {
            icon: Code2,
            title: "Monaco Editor",
            desc: "Fully-featured, VS Code–like editing experience with syntax highlighting.",
          },
          {
            icon: FolderTree,
            title: "Custom File Explorer",
            desc: "Create, rename, and manage your project structure seamlessly.",
          },
          {
            icon: Rocket,
            title: "Instant Deployment",
            desc: "Ship your app instantly from the browser — powered by Next.js 15.",
          },
          {
            icon: MessageSquare,
            title: "AI Chat Assistant",
            desc: "Get code help, refactors, or explanations in real-time via AI chat.",
          },
          {
            icon: Sparkles,
            title: "Modern UI & Themes",
            desc: "Switch between dark/light mode with elegant transitions.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#111122]/70 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(59,130,246,0.05)]"
          >
            <Icon className="w-10 h-10 mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Footer Section ---------------- */
const FooterSection = () => (
  <footer className="relative z-10 w-full border-t border-zinc-800 py-8 bg-[#0a0a12]/80 backdrop-blur-lg mt-24">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-500">
      <p>
        © {new Date().getFullYear()} Videcode Editor — AI-Powered Web IDE built with ❤️ using{" "}
        <span className="text-cyan-400">Next.js, WebContainers, and Ollama</span>.
      </p>
      <div className="flex gap-6 mt-4 sm:mt-0">
        <a href="#" className="hover:text-white transition-colors">Docs</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);
