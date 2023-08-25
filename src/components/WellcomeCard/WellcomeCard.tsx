import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SubTitle } from '../SubTitle/SubTitle';
import { Title } from '../Title/Title';
import { WellcomeAvatar } from '../WellcomeAvatar/WellcomeAvatar';

export const WellcomeCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <SubTitle text='Hello, John' color='black'/>
        <Title text='Welcome' />
      </View>
      <View style={styles.avatarContainer}>
        <WellcomeAvatar size={50} />
      </View>
    </View>
  );
};

