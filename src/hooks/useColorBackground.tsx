import { useEffect, useState } from "react";

type BackgroundSettings = {
  backgroundId: number;
  patternId: number;
};

const DEFAULT_BACKGROUND: BackgroundSettings = {
  backgroundId: 0,
  patternId: 0,
};

export function useColorBackground() {
  const STORAGE_KEY = "type-background";

  const [colorBackground, setColorBackground] = useState<BackgroundSettings>(
    () => {
      try {
        const storedValue = localStorage.getItem(STORAGE_KEY);
        if (storedValue) {
          const parsedValue = JSON.parse(storedValue);

          if (!parsedValue.backgroundId || !parsedValue.patternId) {
            throw new Error("Stored background settings have invalid format");
          }

          return parsedValue;
        }
        return DEFAULT_BACKGROUND;
      } catch (error) {
        throw new Error(
          `Failed to initialize background settings: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(colorBackground));
    } catch (error) {
      throw new Error(
        `Failed to persist background settings: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }, [colorBackground]);

  const updateBackground = (settings: Partial<BackgroundSettings>) => {
    try {
      setColorBackground((prev) => ({
        ...prev,
        ...settings,
      }));
    } catch (error) {
      throw new Error(
        `Failed to update background settings: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const setBackgroundId = (id: number) =>
    updateBackground({ backgroundId: id });
  const setPatternId = (id: number) => updateBackground({ patternId: id });

  return {
    colorBackground,
    updateBackground,
    setBackgroundId,
    setPatternId,
  };
}
