import styles from "./RoundedButton.module.css";

type RoundedButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
};

export default function RoundedButton(props: RoundedButtonProps) {
  const { children, isSelected } = props;

  return (
    <div className={styles.buttonContainer}>
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
