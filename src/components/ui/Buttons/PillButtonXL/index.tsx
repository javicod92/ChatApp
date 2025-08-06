import type React from "react";
import styles from "./PillButtonXL.module.css";

export type PillButtonProps = {
  children: React.ReactNode;
  bgColor?: "orange" | "green" | "gray";
  style?: React.CSSProperties;
  type?: "button" | "submit";
  handleClick?: () => void;
  disabled?: boolean;
};

export default function PillButtonXL({
  children,
  bgColor = "gray",
  style,
  type = "button",
  handleClick,
  disabled,
}: PillButtonProps) {
  return (
    <button
      className={`${styles.buttonXlContainer} ${styles[bgColor]} ${
        disabled ? styles.disabled : ""
      }`}
      style={style}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
