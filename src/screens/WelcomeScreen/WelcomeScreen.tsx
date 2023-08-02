import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/ButtonPrimary';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>Hola crayola</Text>
      <ButtonPrimary 
      title='Get started'
      onPress={() => navigation.navigate('BottomTab')}/>
    </SafeAreaView>
  );
};

export default WelcomeScreen;