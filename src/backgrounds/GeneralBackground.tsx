import styles from "./GeneralBackground.module.css";
import { solidColors } from "./backgroundList";
import { gradients } from "./backgroundList";

type BackgroundType = "solid" | "gradient";

type GeneralBackgroundProps = {
  type: BackgroundType;
  variant: 0 | 1 | 2 | 3;
};

export default function GeneralBackground({
  type,
  variant,
}: GeneralBackgroundProps) {
  const background =
    type === "solid" ? solidColors[variant] : gradients[variant];

  return (
    <div
      className={styles.backgroundContainer}
      style={{
        background,
      }}
    ></div>
  );
}
