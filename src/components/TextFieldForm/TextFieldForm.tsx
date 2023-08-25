import React, { useState, useEffect } from 'react';
import {View, TextInput, Text} from 'react-native';
import { styles } from './styles';
import { TextFieldFormProps } from '../../interfaces/interfaces'

export const TextFieldForm: React.FC<TextFieldFormProps> = ({
  placeholder,
  inputValue,
  onInputChange,
  invalidText,
  isInputValid = true,
  setInputValid = undefined,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (setInputValid) {
      setInputValid(true);
    }
  }, []);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <View style={styles.fieldContainer}>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.inputField,
          isFocus || inputValue.trim() !== '' ? styles.focus : '',
          !isInputValid && { borderColor: 'red' }
        ]}
        value={inputValue}
        onChangeText={onInputChange}
        secureTextEntry={placeholder === 'Password' && true}
        autoCapitalize="none"
        keyboardType={placeholder === 'Client Key' ? 'numeric' : 'default'}
        onBlur={handleBlur}
        onFocus={handleFocus}
        cursorColor="#5C65B1"
        placeholderTextColor="#595959"
      />
      {!isInputValid ? (
        <Text style={styles.feedbackValidation}>{invalidText}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};
