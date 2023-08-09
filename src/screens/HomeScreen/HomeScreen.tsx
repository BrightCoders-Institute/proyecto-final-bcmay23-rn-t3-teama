import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { WellcomeCard } from '../../components/WellcomeCard/WellcomeCard';
import { WellcomeProgressCard } from '../../components/WellcomeProgressCard/WellcomeProgressCard';
import { WellnesCard } from '../../components/WellnesCard/WellnesCard';
import { Title } from '../../components/Title/Title';
import fruitsImage from '../../assets/img/stack-of-three-red-apples-hc-studio-removebg-preview.png';
import anloImage from '../../assets/img/anlo.png';
import arnoldImage from '../../assets/img/arnold.png';
import { styles } from './styles';
import MealInfoBadge from '../../components/MealInfoBadge/MealInfoBadge';
import FlameBadgeIcon from '../../assets/img/FlameBadgeIcon.png';

const HomeScreen = () => {
  return (
    <ScrollView>
      <WellcomeCard />
      <WellcomeProgressCard title="Consumed Today" />
      <View style={styles.titleContainar}>
        <Title text="Nutrition Tips" fontSize={20} />
      </View>
      <WellnesCard
        title="Healthy habits today"
        backgroundColor="#83C8FB"
        imgSource={fruitsImage} />
      <View style={styles.titleContainar}>
        <Title text="Nutrition Tips" fontSize={20} />
      </View>
      <WellnesCard
        title="Healthy habits today"
        backgroundColor="#7B5FEC"
        imgSource={anloImage} />
      <View style={styles.titleContainar}>
        <Title text="Nutrition Tips" fontSize={20} />
      </View>
      <WellnesCard
        title="Healthy habits today"
        backgroundColor="#68A76E"
        imgSource={arnoldImage} />

      <MealInfoBadge
        type="level"
        icon={FlameBadgeIcon}
        data="20-30"
      />
    </ScrollView>

  );
};

export default HomeScreen;
