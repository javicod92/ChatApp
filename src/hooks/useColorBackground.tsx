import { useEffect, useState } from "react";

type BackgroundType = "solid" | "gradient";
type ColorBackground = { type: BackgroundType; variant: 0 | 1 | 2 | 3 };

const STORAGE_KEY = "color-background";

function getInitialColorBackground(): ColorBackground {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (
        (parsed.type === "solid" || parsed.type === "gradient") &&
        [0, 1, 2, 3].includes(parsed.variant)
      ) {
        return parsed;
      }
    } catch {
      // If an error has occurred, the code continues with its default value.
    }
  }
  return { type: "solid", variant: 0 };
}

export function useColorBackground() {
  const [colorBackground, setColorBackground] = useState<ColorBackground>(
    getInitialColorBackground
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colorBackground));
  }, [colorBackground]);

  return {
    colorBackground,
    setColorBackground,
  };
}
