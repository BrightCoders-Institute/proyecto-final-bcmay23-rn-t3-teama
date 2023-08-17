import React from 'react';
import { Image, View } from 'react-native';
import { wellcomeAvatarProps } from '../../interfaces/interfaces';
import { styles } from './styles';

export const WellcomeAvatar = ({size}: wellcomeAvatarProps) => {

  const imageSize = size || 50;

  return (
    <View style={[styles.avatarContainer, { width: imageSize, height: imageSize }]}>
    <Image
      source={{
        uri: 'https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg',
      }}
      style={[styles.avatar, { width: imageSize, height: imageSize }]}
    />
  </View>
  );
};
