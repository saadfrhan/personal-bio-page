"use client";

import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
