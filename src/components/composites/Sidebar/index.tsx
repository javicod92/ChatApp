import NavButtons from "./components/NavButtons";
import UserOptions from "./components/UserOptions";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  handleClick: () => void;
}

export default function Sidebar({ handleClick }: SidebarProps) {
  return (
    <header className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {/* Navigation Buttons */}
        <div className={styles.sidebarWrapper}>
          <NavButtons handleClick={handleClick} />
        </div>

        {/* User section */}
        <div className={styles.userSection}>
          <UserOptions />
        </div>
      </div>
    </header>
  );
}
