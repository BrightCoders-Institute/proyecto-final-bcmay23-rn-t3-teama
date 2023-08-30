import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';

const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
};

const HomeScreen = () => {

  const { appState } = useContext( AppContext );

  return (
    <View>
      {/* <Text>{ JSON.stringify( appState, null, 4 ) }</Text> */}
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
