import { View, Text, Button, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext, UserDataInfo } from '../../context/AppContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
};

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logOut, getContextUserData, appState: { userKey, userData } } = useContext( AppContext );

  useEffect(() => {
    if (userKey) {
      getUserData();
    }
  }, [userKey]);

  const getUserData = () => {
    setIsLoading(true);
    firestore()
      .collection('userData')
      .where('userKey', '==', userKey)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setIsLoading(false);
        getContextUserData(data[0]);
        // console.log('a', data[0]);
      })
      .catch((error) => {
        console.error('Error al consultar Firestore:', error);
        setIsLoading(false);
      });
  };

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
      { isLoading || !userData ? (
        <ActivityIndicator style={{marginTop: '100%'}} size={70} color="#7B5FEC" />
      ) : (
        <>
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
        </>
      ) }
    </View>
  );
};

export default HomeScreen;
