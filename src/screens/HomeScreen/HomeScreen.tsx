import { View, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext, UserDataInfo } from '../../context/AppContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AdviceModal } from '../../components/AdviceModal/AdviceModal';


const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
  successCompletedModalImg: require('../../assets/img/successDoctorModal.png'),
  guyMeditating: require('../../assets/img/meditantingGuy.png'),
};

interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ navigation }: Props) => {
  const { appState: { userData: { userKey } }, logOut, getContextUserData } = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  // console.log(appState);

  useEffect(() => {
    // getUserData();
  }, []);

  const getUserData = () => {
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
        // setUserData(data);
        // getContextUserData(data);
        console.log('a', data);
      })
      .catch((error) => {
        console.error('Error al consultar Firestore:', error);
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

  const [ advice, setAdvice ] = useState('');
  const [ author, setAuthor ] = useState('');
  const viewAdvice = async() => {
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
      return null;
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <AdviceModal 
         isVisible={isModalVisible}
         isLoading={false}
         imgSource={iconType.successCompletedModalImg}
         title="Take care your mind"
         advice={advice}
         author={author}
         isSuccessful={true}
         onClose={closeModal}
      />
      <Button title="Cerrar" onPress={logout} />
      <WellcomeCard />
      <WellcomeProgressCard title="Consumed today" />
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
    </View>

  );
};

export default HomeScreen;
