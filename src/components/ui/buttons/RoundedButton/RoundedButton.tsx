import styles from "./RoundedButton.module.css";

type RoundedButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  type?: "rounded" | "large";
};

export default function RoundedButton(props: RoundedButtonProps) {
  const { children, isSelected, type = "rounded" } = props;

  return (
    <div className={styles[type]}>
      <button
        className={`${styles.roundButton} ${
          isSelected ? styles["roundButton--selected"] : ""
        }`}
      >
        <span className={styles.buttonIcon} aria-hidden="true">
          {children}
        </span>
      </button>
    </div>
  );
}
