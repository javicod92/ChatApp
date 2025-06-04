import styles from "./RoundedButton.module.css";

type RoundedButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  variant?: "rounded" | "large";
  handleClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function RoundedButton(props: RoundedButtonProps) {
  const {
    children,
    isSelected,
    variant = "rounded",
    handleClick,
    ...rest
  } = props;

  return (
    <div className={styles[variant]}>
      <button
        className={`${styles.roundButton} ${
          isSelected ? styles["roundButton--selected"] : ""
        }`}
        onClick={handleClick}
        {...rest}
      >
        <span className={styles.buttonIcon} aria-hidden="true">
          {children}
        </span>
      </button>
    </div>
  );
}
