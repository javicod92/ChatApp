// import { useNavigate } from "react-router";
import { AlertTriangleIcon, TashIcon } from "../../ui/Icons";
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
        <div className={styles.cardTitle}>
          <h2>¿Reestablecer estilos?</h2>
          <p>Se eliminarán tus preferencias de fondo</p>
        </div>
        <div className={styles.modalAlert}>
          <div className={styles.alertLeftColor} />
          <div className={styles.alertTextContent}>
            <div className={styles.textContentAlertIcon}>
              <AlertTriangleIcon color={"#ff6118"} />
            </div>
            <div className={styles.textAlertDescription}>
              <h3>Advertencia</h3>
              <p>
                Esta acción borrará todas tus preferencias de fondo y volverá a
                los valores predefinidos. ¿Desea continuar?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
          <button onClick={handleConfirm} className={styles.confirmButton}>
            Aceptar <TashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
