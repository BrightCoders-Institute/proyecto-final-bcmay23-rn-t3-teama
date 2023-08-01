import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';

export const TextFieldForm = ({
  placeholder,
  inputValue,
  onInputChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);

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
        ]}
        value={inputValue}
        onChangeText={onInputChange}
        autoCapitalize="none"
        onBlur={handleBlur}
        onFocus={handleFocus}
        cursorColor="#5C65B1"
      />
    </View>
  );
};
