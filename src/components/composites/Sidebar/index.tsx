import NavButtons from "./components/NavButtons";
import UserOptions from "./components/UserOptions";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <header className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {/* Navigation Buttons */}
        <div className={styles.sidebarWrapper}>
          <NavButtons />
        </div>

        {/* User section */}
        <div className={styles.userSection}>
          <UserOptions />
        </div>
      </div>
    </header>
  );
}
