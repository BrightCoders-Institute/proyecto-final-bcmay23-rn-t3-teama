import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import firestore from '@react-native-firebase/firestore';
import { PaperProvider } from 'react-native-paper';
import { enableLatestRenderer } from 'react-native-maps';
import { AppProvider } from './src/context/AppContext';

enableLatestRenderer();

function App(): JSX.Element {

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const users = await firestore()
      .collection('test')
      .doc('GG4SP9YyFlVEEpS81N7J')
      .get();
    console.log(users._data.name);
  };

  return (
    <NavigationContainer>
      <AppState>
        <PaperProvider >
          <StackNavigator />
        </PaperProvider>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any ) => {
  return (
    <AppProvider>
      { children }
    </AppProvider>
  );
};

export default App;
