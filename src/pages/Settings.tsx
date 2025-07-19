import GeneralBackground from "../backgrounds/GeneralBackground";
import styles from "./Settings.module.css";
import { useColorBackground } from "../hooks/useColorBackground";
import { colorsPallette } from "../backgrounds/colorsPallette";

export default function Settings() {
  const { colorBackground, handleColorBackground } = useColorBackground();

  return (
    <div className={styles.settingsContainer}>
      <GeneralBackground id={colorBackground} />

      <div className={styles.topBarContainer}>
        <h2>Establezca el color del fondo del chat</h2>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardsContainer}>
          <div className={styles.generalContainer}>
            <div className={styles.colorCards}>
              {colorsPallette.map((color) => (
                <div
                  key={color.id}
                  style={{ background: color.color }}
                  onClick={() => handleColorBackground(color.id)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
