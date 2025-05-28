import { Sidebar } from "../components/composites/sidebar";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}
