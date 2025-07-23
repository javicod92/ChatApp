// import { useNavigate } from "react-router";
import styles from "./ResetModal.module.css";

export default function ResetModal({ onClose }: { onClose: () => void }) {
  // const navigate = useNavigate();

  const handleConfirm = () => {
    localStorage.removeItem("color-mode");
    localStorage.removeItem("type-background");

    // navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <h2>¿Reestablecer estilos?</h2>
        <p>Se eliminarán tus preferencias de fondo. ¿Continuar?</p>
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
          <button onClick={handleConfirm} className={styles.confirmButton}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
