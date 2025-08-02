import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerBorders}></div>
      <p>Cargando...</p>
    </div>
  );
}
