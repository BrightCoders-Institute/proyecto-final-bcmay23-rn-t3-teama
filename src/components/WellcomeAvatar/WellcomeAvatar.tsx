import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

export const WellcomeAvatar = () => {
  return (
    <View style={styles.avatarContainer}>
    <Image
      source={{
        uri: 'https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg',
      }}
      style={styles.avatar}
    />
  </View>
  )
}