import type React from "react";
import styles from "./PillButton.module.css";

type PillButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
};

export default function PillsButton({
  children = "none",
  isSelected = false,
}: PillButtonProps) {
  return (
    <button
      className={`${styles.buttonContainer} ${
        isSelected ? styles.selected : ""
      }`}
    >
      {children}
    </button>
  );
}
