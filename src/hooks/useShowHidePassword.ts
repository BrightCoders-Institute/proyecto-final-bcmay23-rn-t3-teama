import {useState} from 'react';

export const useShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    handleShowPassword,
  };
};
