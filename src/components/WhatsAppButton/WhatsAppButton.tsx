import React from 'react';
import { Linking, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface WhatsAppButtonProps {
    onPress?: () => void;
  }

export const WhatsAppButton = ({ onPress }: WhatsAppButtonProps) => {
    const handelWhatsAppPress = async () => {
        await Linking.openURL('https://wa.me/text=Mensaje predefinido');
    }
  return (
    <TouchableOpacity
    style={ styles.buttonContainer }
    onPress={handelWhatsAppPress}>
    <Icon name={'logo-whatsapp'} size={50} color={'white'} />
  </TouchableOpacity>
  )
}
