import React, {useContext} from 'react';
import { View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import { CircularProgressBarProps } from '../../interfaces/interfaces';
import {AppContext} from '../../context/AppContext';

export const CircularProgressBar = ({radius, progress, color}: CircularProgressBarProps) => {
 
  const {appState} = useContext(AppContext)

  return (
    <View>
    <ProgressCircle
      percent={progress}
      radius={radius}
      borderWidth={20}
      color={color}
      shadowColor="#F4F3F3"
      bgColor="#FFFF"
    >
      <Title text={`${appState.consumedCalories}`} fontSize={30}/>
      <SubTitle text={`/ ${appState.caloriesPerDay}`} color='gray' fontSize={18} />
      <SubTitle text='Your calories eaten today' color='gray' fontSize={10} />
    </ProgressCircle>
  </View>
  )
};