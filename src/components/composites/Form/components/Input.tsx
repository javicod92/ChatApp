import { useFormContext } from "../../../../hooks/useFormContext";
import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
};

export default function Input({ label, name, ...props }: InputProps) {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.formInput}>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        type={"text"}
        value={formData[name] || ""}
        onChange={handleChange}
        id={name}
        name={name}
      />
    </div>
  );
}
