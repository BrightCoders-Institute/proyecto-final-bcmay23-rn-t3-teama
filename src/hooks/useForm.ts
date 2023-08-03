import { useState } from 'react';

interface FormState {
  [key: string]: any;
}

interface FormActions {
  onInputChange: (name: string, value: any) => void;
  onResetForm: () => void;
}

export const useForm = (initialForm: FormState = {}): FormState & FormActions => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = (name: string, value: any) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};