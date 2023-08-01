import { useState } from 'react';

export interface FieldValidation {
    isNameValid: boolean;
    isPasswordValid: boolean;
    isClientKeyValid: boolean;
    errorNameText: string;
    errorPwText: string;
    errorClientKeyText: string;
    setIsNameValid: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
    setIsClientKeyValid: React.Dispatch<React.SetStateAction<boolean>>;
    handleFieldValidation: (name: string, userInput: any) => void;
    setErrorNameText: React.Dispatch<React.SetStateAction<string>>;
    setErrorPwText: React.Dispatch<React.SetStateAction<string>>;
    setErrorClientKeyText: React.Dispatch<React.SetStateAction<string>>;
}

export const useFieldValidation = (): FieldValidation => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isClientKeyValid, setIsClientKeyValid] = useState(false);
  const [errorNameText, setErrorNameText] = useState('');
  const [errorPwText, setErrorPwText] = useState('');
  const [errorClientKeyText, setErrorClientKeyText] = useState('');

  const nameRegex = /^[\p{L}']+(\s[\p{L}']+)+$/u;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const clientKeyRegex = /^\d{6}$/;

  const handleFieldValidation = (name: string, userInput: any) => {
    let regEx = '';

    if (name === 'name') {
      regEx = nameRegex;
      const isValid = regEx.test(userInput.trim());

      isValid
        ? setErrorNameText('')
        : setErrorNameText('Please enter full name');
        setIsNameValid(isValid);
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
    isNameValid,
    isPasswordValid,
    isClientKeyValid,
    errorNameText,
    errorPwText,
    errorClientKeyText,
    setIsNameValid,
    setIsPasswordValid,
    setIsClientKeyValid,
    handleFieldValidation,
    setErrorNameText,
    setErrorPwText,
    setErrorClientKeyText,
  };
};
