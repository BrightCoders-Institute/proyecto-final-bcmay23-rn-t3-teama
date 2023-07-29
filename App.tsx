import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default App;
