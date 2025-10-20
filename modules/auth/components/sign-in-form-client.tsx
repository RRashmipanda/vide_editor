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
import { Chrome } from "lucide-react";
import { handleGoogleSignIn } from "../actions/sign-in-actions"; 

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md bg-zinc-800 text-white border-zinc-700">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center text-zinc-400">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button type="submit" variant="outline" className="w-full">
            <Chrome className="mr-2 h-4 w-4" />
            <span>Sign in with Google</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInFormClient;
