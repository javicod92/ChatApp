import { colorsPallette } from "./colorsPallette";
import styles from "./GeneralBackground.module.css";

type GeneralBackgroundProps = {
  id: number;
};

export default function GeneralBackground({ id }: GeneralBackgroundProps) {
  const background = colorsPallette[id].color;

  return (
    <div
      className={styles.backgroundContainer}
      style={{
        background,
      }}
    ></div>
  );
}
