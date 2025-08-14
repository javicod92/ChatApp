import { backgroundPatterns, colorsPallette } from "./colorsPallette";
import styles from "./GeneralBackground.module.css";

type GeneralBackgroundProps = {
  colorId: number;
  patternId: number;
};

export default function GeneralBackground({
  colorId,
  patternId,
}: GeneralBackgroundProps) {
  const background = colorsPallette[colorId]?.color;
  const patternUrl = backgroundPatterns[patternId]?.pattern;

  return (
    <div
      className={styles.backgroundContainer}
      style={{
        background: `${background}`,
        maskImage: `url(${patternUrl})`,
      }}
    ></div>
  );
}
