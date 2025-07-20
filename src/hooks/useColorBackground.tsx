import { useEffect, useState } from "react";

export function useColorBackground() {
  const STORAGE_KEY = "color-background";

  const [colorBackground, setColorBackground] = useState<number>(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue ? Number(storedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, colorBackground.toString());
  }, [colorBackground]);

  const handleColorBackground = (id: number) => setColorBackground(id);

  return { colorBackground, handleColorBackground };
}
