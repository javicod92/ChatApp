import type React from "react";
import { useSidebar } from "../../../hooks/useSidebar";
import styles from "./ContentBox.module.css";
import { useOutsideClick } from "../../../hooks/useCloseSidebar";

export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const sidebarRef = useOutsideClick(closeSidebar);

  // if (!isSidebarOpen) return null;

  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      id="sidebar"
      ref={sidebarRef}
    >
      {children}
    </div>
  );
}
