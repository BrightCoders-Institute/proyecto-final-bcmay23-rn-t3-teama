import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';
import auth from '@react-native-firebase/auth';

const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
};

const HomeScreen = () => {

  const { appState, logOut } = useContext( AppContext );
  console.log(appState);

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        logOut();
        console.log('User signed out!');
      });
  };

  return (
    <View>
      <Button title='Cerrar' onPress={logout} />
      <WellcomeCard />
      <WellcomeProgressCard title="Consumed today" />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainar}>
          <Title text="Nutrition Tips" fontSize={20} />
        </View>
        <WellnesCard
          title="Healthy habits today"
          backgroundColor="#83C8FB"
          imgSource={iconType.fruitsImage} />
        <View style={styles.titleContainar}>
          <Title text="Workout tips" fontSize={20} />
        </View>
        <WellnesCard
          title="Workout at Home"
          backgroundColor="#7B5FEC"
          imgSource={iconType.anloImage} />
        <View style={styles.titleContainar}>
          <Title text="Mindfulness" fontSize={20} />
        </View>
        <WellnesCard
          title="Take Care of your mind"
          backgroundColor="#58D164"
          imgSource={iconType.arnoldImage} />
      </View>
    </View>

  );
};

export default HomeScreen;
