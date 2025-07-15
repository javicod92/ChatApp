import { Link } from "react-router";
import styles from "./NotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.messageContent}>
        <h1>404</h1>
        <div className={styles.description}>
          <h2>¡Ups! The page could not be found</h2>
        </div>
      </div>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}
