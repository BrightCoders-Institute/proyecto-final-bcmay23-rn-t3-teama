import { View, Text, Button, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext, UserDataInfo } from '../../context/AppContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { months } from '../../helpers/getCurrentWeekdays';

const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
};

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [consumedCaloriesData, setConsumedCaloriesData] = useState(null);
  const { logOut, getContextUserData, getContextConsumedCalories, appState: { userKey, userData, consumedCalories } } = useContext( AppContext );
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getNutritionalData();
    }, [])
  );

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

        if (data.length === 0) {
          setIsLoading(false);
          console.error('Usuario no encontrado');
          return;
        }
        getContextUserData(data[0]);

        getNutritionalData();
      })
      .catch((error) => {
        console.error('Error al consultar Firestore:', error);
        setIsLoading(false);
      });
  };

  const getNutritionalData = () => {
    setIsLoading(true);
    const fechaHoy = new Date();

    const day = fechaHoy.getDate();
    const month = months[fechaHoy.getMonth()];
    const year = fechaHoy.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate);

    const nutritionalRef = firestore()
      .collection('nutritionalContribution')
      .where('userKey', '==', userKey);

    nutritionalRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const nutritionalData = doc.data();
          const todaysData = nutritionalData[formattedDate];

          if (todaysData) {
            console.log('Datos de hoy:', todaysData.currentCaloriesConsumed);
            setConsumedCaloriesData(todaysData);
            getContextConsumedCalories(todaysData.currentCaloriesConsumed);
          } else {
            console.error('Datos de hoy no encontrados');
          }
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al consultar nutritionalContribution:', error);
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
      { isLoading || !userData || !consumedCaloriesData ? (
        <ActivityIndicator style={{marginTop: '90%'}} size={70} color="#7B5FEC" />
      ) : (
        <>
          <Button title='Cerrar' onPress={logout} />
          <WellcomeCard />
          <WellcomeProgressCard title="Consumed today" onPress={() => navigation.navigate('ReportScreen')}/>
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
