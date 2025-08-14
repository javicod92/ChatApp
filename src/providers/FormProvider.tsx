import { useState } from "react";
import { FormContext } from "../context/FormContext";

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider
      value={{ formData, setFormData, isFormOpen, setIsFormOpen }}
    >
      {children}
    </FormContext.Provider>
  );
}
