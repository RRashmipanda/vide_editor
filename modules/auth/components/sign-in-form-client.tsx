"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Sparkles } from "lucide-react";
import { handleGoogleSignIn } from "../actions/sign-in-actions";

const SignInFormClient = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh]">
      {/* Soft background glow */}
      <div className="absolute -inset-16 -z-10 bg-gradient-to-tr from-purple-700/10 via-blue-600/10 to-cyan-500/5 blur-[100px]" />

      <Card className="w-full max-w-md bg-[#0d0d16]/80 backdrop-blur-xl border border-zinc-800 shadow-[0_0_40px_rgba(56,189,248,0.05)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(79,70,229,0.15)] rounded-2xl">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sign In
          </CardTitle>
          <CardDescription className="text-zinc-400 text-base">
            Access your AI-powered development environment
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 mt-4">
          <form action={handleGoogleSignIn}>
            <Button
              type="submit"
              variant="outline"
              className="w-full relative border border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:text-white hover:border-blue-500 hover:bg-zinc-800/70 transition-all duration-300 py-6 text-lg font-medium rounded-xl flex items-center justify-center gap-3 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-purple-500/50 before:to-blue-500/50 before:opacity-0 hover:before:opacity-100 before:-z-10"
            >
              <Chrome className="h-5 w-5 text-blue-400" />
              <span>Sign in with Google</span>
            </Button>
          </form>

          <div className="text-center text-sm text-zinc-500 mt-3">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInFormClient;
