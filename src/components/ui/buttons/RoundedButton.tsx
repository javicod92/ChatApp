import styles from "./RoundedButton.module.css";

type RoundedButtonProps = {
  children: React.ReactNode;
};

export default function RoundedButton(props: RoundedButtonProps) {
  const { children } = props;

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.roundButton}>
        <span className={styles.buttonIcon} aria-hidden="true">
          {children}
        </span>
      </button>
    </div>
  );
}
