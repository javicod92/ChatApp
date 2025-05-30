import type React from "react";
import styles from "./Topbar.module.css";

type TopbarProps = {
  children: React.ReactNode;
};

export default function Topbar({ children }: TopbarProps) {
  return (
    <header className={styles.topbarContent}>
      <div className={styles.topbarwrapper}>{children}</div>
    </header>
  );
}
