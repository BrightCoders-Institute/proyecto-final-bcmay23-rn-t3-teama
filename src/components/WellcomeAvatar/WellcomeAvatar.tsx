import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { wellcomeAvatarProps } from '../../interfaces/interfaces';
import { styles } from './styles';
import {AppContext} from '../../context/AppContext';

export const WellcomeAvatar = ({size}: wellcomeAvatarProps) => {

  const {appState: {patientMetaData}} = useContext(AppContext)

  const imageSize = size || 50;

  return (
    <View style={[styles.avatarContainer, { width: imageSize, height: imageSize }]}>
    <Image
      source={{
        uri: patientMetaData.profilePhotoUrl,
      }}
      style={[styles.avatar, { width: imageSize, height: imageSize }]}
    />
  </View>
  );
};
