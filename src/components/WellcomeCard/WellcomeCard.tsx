import React, {useContext} from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SubTitle } from '../SubTitle/SubTitle';
import { Title } from '../Title/Title';
import { WellcomeAvatar } from '../WellcomeAvatar/WellcomeAvatar';
import {AppContext} from '../../context/AppContext';

export const WellcomeCard = () => {

  const { appState: { userData } } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <SubTitle text={`Hello, ${userData?.name}`} color='black'/>
        <Title text='Welcome' />
      </View>
      <View style={styles.avatarContainer}>
        <WellcomeAvatar size={50} />
      </View>
    </View>
  );
};

