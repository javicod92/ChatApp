import type React from "react";
import { useSidebar } from "../../../hooks/useSidebar";
import styles from "./ContentBox.module.css";

export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      id="sidebar"
    >
      {children}
    </div>
  );
}
