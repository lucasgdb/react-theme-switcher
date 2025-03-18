"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Theme Switcher Demo
        </h1>
        <p className="text-muted-foreground">
          A simple demonstration of theme switching in Next.js with Tailwind CSS
        </p>
      </div>

      <div className="flex justify-center">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Light Mode</CardTitle>
            <CardDescription>Clean and bright for daytime use</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <SunIcon className="h-8 w-8 text-primary-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Optimized for readability in well-lit environments
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dark Mode</CardTitle>
            <CardDescription>
              Easy on the eyes for nighttime browsing
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <MoonIcon className="h-8 w-8 text-primary-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Reduces eye strain in low-light conditions
            </p>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Element</CardTitle>
          <CardDescription>
            See how interactive elements look in different themes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">{count}</p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setCount(count - 1)}>
              Decrease
            </Button>
            <Button onClick={() => setCount(count + 1)}>Increase</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Typography Example</h2>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading 1
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Heading 2
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Heading 3
          </h3>
          <p className="leading-7">
            This is a paragraph of text. Notice how the colors and contrast
            change when you switch between light and dark modes. The theme
            system is designed to maintain readability and visual comfort in
            both modes.
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;Design is not just what it looks like and feels like. Design
            is how it works.&quot; — Steve Jobs
          </blockquote>
        </div>
      </div>
    </div>
  );
}
