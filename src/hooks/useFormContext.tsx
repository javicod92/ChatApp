import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  const { formData, setFormData, isFormOpen, setIsFormOpen } = context;
  return { formData, setFormData, isFormOpen, setIsFormOpen };
}
