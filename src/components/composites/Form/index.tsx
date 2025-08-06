import { Button, Input } from "./components";
import styles from "./Form.module.css";

type FormProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

export default function Form({ children, onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.formContent} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

Form.Input = Input;
Form.Button = Button;
