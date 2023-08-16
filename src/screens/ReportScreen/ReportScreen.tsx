import React from 'react';
import { View } from 'react-native';
import { ShowCalendar } from '../../components/ShowCalendar/ShowCalendar';
import { NutritionalChartProgress } from '../../components/NutritionalChartProgress/NutritionalChartProgress';
import { CircularProgressBar } from '../../components/CircularProgressBar/CircularProgressBar';
import { styles } from './styles';
import { Title } from '../../components/Title/Title';
import { SubTitle } from '../../components/SubTitle/SubTitle';

export const ReportScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.topContainer} > 
        <ShowCalendar />
      </View>

      <View style={styles.titleContainer} >
        <Title text='Nutrition intake' fontSize={25} />
      </View>

      <View style={styles.centerContainer} >
        <CircularProgressBar  radius={100}  progress={25} color="#58D164" />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Title text='Goal per day' fontSize={20} />
          <SubTitle text='  3200 Cal' color='gray' fontSize={18}/>
        </View>
      </View>
      <View style={styles.titleContainer2}>
        <Title text='Daily everage' fontSize={25} />
      </View>
      
      <View style={styles.bottomContainer}>
        <NutritionalChartProgress 
          progressCarbs={0.5} 
          progressProtein={0.3} 
          progressFat={0.2} 
          grams={50} 
          />
        </View>
    </View>
  );
};