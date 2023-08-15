import React from 'react';
import { View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Title } from '../Title/Title';
import { SubTitle } from '../SubTitle/SubTitle';
import { CircularProgressBarProps } from '../../interfaces/interfaces';

export const CircularProgressBar = ({radius, progress, color}: CircularProgressBarProps) => {
  return (
    <View>
    <ProgressCircle
      percent={progress}
      radius={radius}
      borderWidth={20}
      color={color}
      shadowColor="#999"
      bgColor="#fff"
    >
      <Title text='1600' fontSize={30}/>
      <SubTitle text='/ 3200' color='gray' fontSize={18} />
      <SubTitle text='Your calories eaten today' color='gray' fontSize={12} />
    </ProgressCircle>
  </View>
  )
};