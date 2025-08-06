import { createContext } from "react";

type FormContextTypes = {
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = createContext<FormContextTypes | undefined>(
  undefined
);
