"use client";

import { useState } from "react";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-teal-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Landing / SignIn Content */}
      {!showSignIn ? (
        <div className="text-center px-6 max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
            Code. Collaborate. Create.
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            Build and share your projects in an instant — right from your browser.
          </p>
          <Button
            variant="default"
            onClick={() => setShowSignIn(true)}
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-all shadow-lg shadow-purple-800/20"
          >
            Sign In to Continue
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <SignInFormClient />
        </div>
      )}

      {/* Subtle Footer Text */}
      {!showSignIn && (
        <footer className="absolute bottom-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Your App Name — Inspired by Replit
        </footer>
      )}
    </main>
  );
};

export default Page;
