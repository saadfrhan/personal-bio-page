"use client";

import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="absolute right-5 top-5"
    >
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
