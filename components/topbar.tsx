"use client";

import { Moon, Sun, Bot } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Topbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <Bot className="h-8 w-8" />
        <Link href="/" className="text-xl font-bold">
          obot.ai
        </Link>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
