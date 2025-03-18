"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const changeTheme = (newTheme?: "light" | "dark") => {
    if (newTheme) {
      if (!document.startViewTransition) {
        setTheme(newTheme);
      }

      document.startViewTransition(() => {
        setTheme(newTheme);
      });

      return;
    }

    if (!document.startViewTransition) {
      setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    document.startViewTransition(() => {
      setTheme((theme) => (theme === "light" ? "dark" : "light"));
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => changeTheme()}
        className="mr-2"
      >
        {theme === "dark" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
        {theme === "light" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {theme === "light" ? "Light" : "Dark"}
            <span className="sr-only">Select theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => changeTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
