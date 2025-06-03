import styles from "./RoundedButton.module.css";

type RoundedButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  type?: "rounded" | "large";
  handleClick?: () => void;
};

export default function RoundedButton(props: RoundedButtonProps) {
  const { children, isSelected, type = "rounded", handleClick } = props;

  return (
    <div className={styles[type]}>
      <button
        className={`${styles.roundButton} ${
          isSelected ? styles["roundButton--selected"] : ""
        }`}
        onClick={handleClick}
      >
        <span className={styles.buttonIcon} aria-hidden="true">
          {children}
        </span>
      </button>
    </div>
  );
}
