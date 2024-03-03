"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
