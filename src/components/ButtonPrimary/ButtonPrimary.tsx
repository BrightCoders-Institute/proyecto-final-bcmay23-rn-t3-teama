import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  isValid?: boolean;
  imgSource?: any;
}

export const ButtonPrimary = ({
  title,
  onPress,
  imgSource,
  isValid,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid,
      ]}
      onPress={onPress}>
      {imgSource && <Image source={imgSource} style={styles.buttonImage} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
