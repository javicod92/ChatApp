import styles from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={styles.welcomeContainer}>
      <div>
        <img src="Backgrounds/wa669aeJeom.png" alt="welcome image" />
      </div>
      <h1>Welcome to WhatsApp Web</h1>
    </div>
  );
}
