import { View, Text, Button, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { months } from '../../helpers/getCurrentWeekdays';
import { AdviceModal } from '../../components/AdviceModal/AdviceModal';

const iconType = {
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
  guyMeditating: require('../../assets/img/meditantingGuy.png'),
  modalImage: require('../../assets/img/lotoFlower.png')
};

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [consumedCaloriesData, setConsumedCaloriesData] = useState(null);
  const { logOut, getContextUserData, getContextConsumedCalories, appState: { userKey, userData, consumedCalories } } = useContext( AppContext );
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [ advice, setAdvice ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);

  useEffect(() => {
    if (userKey) {
      getUserData();
    }
  }, [userKey]);

  useFocusEffect(
    useCallback(() => {
      getNutritionalData();
    }, [userKey])
  );

  const getUserData = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('userData')
        .where('userKey', '==', userKey)
        .get();

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

      await getNutritionalData();

    } catch (error) {
      console.error('Error al consultar Firestore:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getNutritionalData = async () => {
    setIsLoading(true);
    const fechaHoy = new Date();
    const day = fechaHoy.getDate();
    const month = months[fechaHoy.getMonth()];
    const year = fechaHoy.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate);
    console.log(userKey);

    try {
      const nutritionalRef = firestore()
        .collection('nutritionalContribution')
        .where('userKey', '==', userKey);

      const querySnapshot = await nutritionalRef.get();

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

    } catch (error) {
      console.error('Error al consultar nutritionalContribution:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        logOut();
        console.log('User signed out!');
      });
  };

  const viewAdvice = async() => {
    setIsLoadingAdvice(true);
    setModalVisible(true);
    try {
      const resp = await fetch('https://favqs.com/api/qotd');
      const data = await resp.json();
  
      if (data && data.quote) {
        const fetchedAdvice = data.quote.body;
        setAdvice(fetchedAdvice);
        const fetchedAuthor = data.quote.author;
        setAuthor(fetchedAuthor);
      } else {
        console.error('No se pudo obtener un consejo aleatorio.');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener consejo:', error);
    } finally {
      setIsLoadingAdvice(false);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      { isLoading || !userData || !consumedCaloriesData ? (
        <ActivityIndicator style={{marginTop: '90%'}} size={70} color="#7B5FEC" />
      ) : (
        <>
          <Button title='Cerrar' onPress={logout} />
          <AdviceModal 
            isVisible={isModalVisible}
            isLoading={isLoadingAdvice}
            imgSource={iconType.modalImage}
            title="Take care of your mind"
            advice={advice}
            author={author}
            isSuccessful={true}
            onClose={closeModal}
          />
          <WellcomeCard />
          <WellcomeProgressCard title="Consumed today" onPress={() => navigation.navigate('ReportScreen')}/>
          <View style={styles.mainContainer}>
            <View style={styles.titleContainar}>
              <Title text="Nutrition Tips" fontSize={20} />
            </View>
            <WellnesCard
              title="Healthy habits today"
              backgroundColor="#83C8FB"
              imgSource={iconType.anloImage} />
            <View style={styles.titleContainar}>
              <Title text="Workout tips" fontSize={20} />
            </View>
            <WellnesCard
              title="Workout exercises"
              backgroundColor="#7B5FEC"
              imgSource={iconType.arnoldImage}
              onPress={() => navigation.navigate('Workout Tips')} />
            <View style={styles.titleContainar}>
              <Title text="Mindfulness" fontSize={20} />
            </View>
            <WellnesCard
              title="Take Care of your mind"
              backgroundColor="#58D164"
              imgSource={iconType.guyMeditating} 
              onPress={viewAdvice}
            />
          </View>
        </>
      ) }
    </View>
  );
};

export default HomeScreen;
