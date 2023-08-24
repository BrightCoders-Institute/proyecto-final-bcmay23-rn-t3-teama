import { View, ScrollView } from 'react-native';
import React from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import { styles } from './styles';

const iconType = {
  fruitsImage: require('../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png'),
  anloImage: require('../../assets/img/anlo.png'),
  arnoldImage: require('../../assets/img/arnold.png'),
  FlameBadgeIcon: require('../../assets/img/FlameBadgeIcon.png'),
};

const HomeScreen = () => {
  return (
    <ScrollView>
      <WellcomeCard />
      <WellcomeProgressCard title="Consumed today" />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainar}>
          <Title text="Nutrition Tips" fontSize={18} />
        </View>
        <WellnesCard
          title="Healthy habits today"
          backgroundColor="#83C8FB"
          imgSource={iconType.fruitsImage} />
        <View style={styles.titleContainar}>
          <Title text="Workout tips" fontSize={18} />
        </View>
        <WellnesCard
          title="Workout at Home"
          backgroundColor="#7B5FEC"
          imgSource={iconType.anloImage} />
        <View style={styles.titleContainar}>
          <Title text="Mindfulness" fontSize={18} />
        </View>
        <WellnesCard
          title="Take Care of your mind"
          backgroundColor="#58D164"
          imgSource={iconType.arnoldImage} />
      </View>
    </ScrollView>

  );
};

export default HomeScreen;

