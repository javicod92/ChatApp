import { useEffect, useState } from "react";

export function useColorMode() {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    return (
      (localStorage.getItem("color-mode") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", mode);
    localStorage.setItem("color-mode", mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return { mode, toggleMode };
}
