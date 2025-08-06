import styles from "./Settings.module.css";

import ContentBox from "../components/ui/ContentBox";
import GeneralBackground from "../backgrounds/GeneralBackground";
import {
  backgroundPatterns,
  colorsPallette,
} from "../backgrounds/colorsPallette";
import { useColorBackground } from "../hooks/useColorBackground";
import { useState } from "react";
import ResetModal from "../components/composites/ResetModal";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const { colorBackground, setBackgroundId, setPatternId } =
    useColorBackground();

  return (
    <>
      {/* Left Panel */}
      <ContentBox>
        {/* Main Header: Page title */}
        <header className={styles.leftSidePanel__Header}>
          <h1>Ajustes</h1>
        </header>

        <div className={styles.leftSidePanel__cardsContainer}>
          {/* Color Cards Section */}
          <div className={styles.cardsContainer__colorCardsSection}>
            <h2>Establece el color de fondo del chat</h2>
            <div className={styles.colorCardsSection__gridContainer}>
              {colorsPallette.map((backgroundVariant) => (
                <div
                  key={backgroundVariant.id}
                  className={`${styles.gridContainer__card} ${
                    backgroundVariant.id === colorBackground.backgroundId
                      ? styles["gridContainer__card--selected"]
                      : ""
                  }`}
                  onClick={() => setBackgroundId(backgroundVariant.id)}
                >
                  <div
                    className={styles.card__before}
                    style={{ background: `${backgroundVariant.color}` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Patterns Cards Section */}
          <div className={styles.cardsContainer__patternsCardsSection}>
            <h2>Establece el motivo de fondo del chat</h2>
            <div className={styles.patternsCardsSection__gridContainer}>
              {backgroundPatterns.map((backgroundPattern) => (
                <div
                  key={backgroundPattern.id}
                  className={`${styles.gridContainer__card} ${
                    backgroundPattern.id === colorBackground.patternId
                      ? styles["gridContainer__card--selected"]
                      : ""
                  }`}
                  onClick={() => setPatternId(backgroundPattern.id)}
                >
                  <div
                    className={styles.card__before}
                    style={{
                      backgroundImage: `url(${backgroundPattern.image})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.leftSidePanelRestoreButton}
            onClick={() => setShowModal(true)}
          >
            Restablecer estilos
          </button>
        </div>
      </ContentBox>

      {/* Right Container */}
      <div className={styles.settingRightContainer}>
        <GeneralBackground
          colorId={colorBackground.backgroundId}
          patternId={colorBackground.patternId}
        />

        <div className={styles.rightContainerTopLabel}>
          <h2>Vista previa del fondo</h2>
        </div>
      </div>
      {showModal && <ResetModal onClose={() => setShowModal(false)} />}
    </>
  );
}
