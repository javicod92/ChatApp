import GeneralBackground from "../backgrounds/GeneralBackground";
import styles from "./Settings.module.css";
import { solidColors } from "../backgrounds/backgroundList";
import { gradients } from "../backgrounds/backgroundList";
import { useColorBackground } from "../hooks/useColorBackground";

export default function Settings() {
  const { colorBackground, setColorBackground } = useColorBackground();

  return (
    <div className={styles.settingsContainer}>
      <GeneralBackground
        type={colorBackground.type}
        variant={colorBackground.variant}
      />

      <div className={styles.topBarContainer}>
        <h2>Establezca el color del fondo del chat</h2>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.generalContainer}>
          <div className={styles.colorCards}>
            {solidColors.map((color, index) => (
              <div
                key={`solid-${index}`}
                style={{ background: color }}
                onClick={() =>
                  setColorBackground({
                    type: "solid",
                    variant: index as 0 | 1 | 2 | 3,
                  })
                }
              ></div>
            ))}
            {gradients.map((gradient, index) => (
              <div
                key={`gradient-${index}`}
                style={{ background: gradient }}
                onClick={() =>
                  setColorBackground({
                    type: "gradient",
                    variant: index as 0 | 1 | 2 | 3,
                  })
                }
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
