import React, { useState, useEffect } from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { TextFieldFormProps } from '../../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextFieldForm: React.FC<TextFieldFormProps> = ({
  placeholder,
  inputValue,
  onInputChange,
  invalidText,
  isInputValid = true,
  extraData,
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
      <View style={styles.inputFieldContainer}>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.inputField,
            isFocus || inputValue.trim() !== '' ? styles.focus : '',
            !isInputValid && { borderColor: 'red' }
          ]}
          value={inputValue}
          onChangeText={onInputChange}
          secureTextEntry={placeholder === 'Password' && !extraData?.showPassword}
          autoCapitalize="none"
          keyboardType={placeholder === 'Client Key' ? 'numeric' : 'default'}
          onBlur={handleBlur}
          onFocus={handleFocus}
          cursorColor="#5C65B1"
          placeholderTextColor="#595959"
        />
        { extraData !== undefined && (
          <TouchableOpacity
            onPress={extraData.handleShowPassword}
            style={styles.iconContainer}>
            <Icon
              name={extraData.showPassword ? 'eye' : 'eye-off'}
              size={25}
              color="#888888"
            />
          </TouchableOpacity>
        ) }
      </View>

      {!isInputValid ? (
        <Text style={styles.feedbackValidation}>{invalidText}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};
