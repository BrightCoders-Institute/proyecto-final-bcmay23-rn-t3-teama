import React from 'react';
import { View } from 'react-native';
import { ShowCalendar } from '../../components/ShowCalendar/ShowCalendar';
import { NutritionalChartProgress } from '../../components/NutritionalChartProgress/NutritionalChartProgress';

export const ReportScreen = () => {
  return (
    <View>
      <ShowCalendar />
      <NutritionalChartProgress 
        progressCarbs={0.5} 
        progressProtein={0.3} 
        progressFat={0.2} 
        grams={50} 
        />
    </View>
  );
};
