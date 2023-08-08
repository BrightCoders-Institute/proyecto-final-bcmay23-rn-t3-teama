import { useState } from 'react';

export interface FieldValidation {
    isEmailValid: boolean;
    isPasswordValid: boolean;
    isClientKeyValid: boolean;
    errorEmailText: string;
    errorPwText: string;
    errorClientKeyText: string;
    setIsEmailValid: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
    setIsClientKeyValid: React.Dispatch<React.SetStateAction<boolean>>;
    handleFieldValidation: (name: string, userInput: any) => void;
    setErrorEmailText: React.Dispatch<React.SetStateAction<string>>;
    setErrorPwText: React.Dispatch<React.SetStateAction<string>>;
    setErrorClientKeyText: React.Dispatch<React.SetStateAction<string>>;
}

export const useFieldValidation = (): FieldValidation => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isClientKeyValid, setIsClientKeyValid] = useState(false);
  const [errorEmailText, setErrorEmailText] = useState('');
  const [errorPwText, setErrorPwText] = useState('');
  const [errorClientKeyText, setErrorClientKeyText] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const clientKeyRegex = /^\d{6}$/;

  const handleFieldValidation = (name: string, userInput: any) => {
    let regEx = '';

    if (name === 'email') {
      regEx = emailRegex;
      const isValid = regEx.test(userInput.trim());

      isValid
        ? setErrorEmailText('')
        : setErrorEmailText('Please enter a valid email');
        setIsEmailValid(isValid);
    } else if (name === 'password') {
      regEx = passwordRegex;
      const isValid = regEx.test(userInput);

      isValid ? setErrorPwText('') : setErrorPwText('Please enter a valid password');
      setIsPasswordValid(isValid);
    } else if (name === 'clientKey') {
        regEx = clientKeyRegex;
        const isValid = regEx.test(userInput);

        isValid ? setErrorClientKeyText('') : setErrorClientKeyText('Please enter more than 6 numbers');
        setIsClientKeyValid(isValid);
    }
  };

  return {
    isEmailValid,
    isPasswordValid,
    isClientKeyValid,
    errorEmailText,
    errorPwText,
    errorClientKeyText,
    setIsEmailValid,
    setIsPasswordValid,
    setIsClientKeyValid,
    handleFieldValidation,
    setErrorEmailText,
    setErrorPwText,
    setErrorClientKeyText,
  };
};
