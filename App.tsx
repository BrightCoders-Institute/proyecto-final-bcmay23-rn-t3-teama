import 'react-native-gesture-handler';
import React, { useEffect, useState, useContext } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import firestore from '@react-native-firebase/firestore';
import { PaperProvider } from 'react-native-paper';
import { enableLatestRenderer } from 'react-native-maps';
import { AppContext, AppProvider } from './src/context/AppContext';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

enableLatestRenderer();

function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const loadInitialState = async () => {
  //     try {
  //       // Recuperar el estado guardado de AsyncStorage
  //       const savedInitializing = await AsyncStorage.getItem('initializing');
  //       const savedUser = await AsyncStorage.getItem('user');

  //       if (savedInitializing !== null && savedUser !== null) {
  //         setInitializing(JSON.parse(savedInitializing));
  //         setUser(JSON.parse(savedUser));
  //       } else {
  //         setInitializing(false);
  //       }
  //     } catch (error) {
  //       console.error('Error loading state from AsyncStorage:', error);
  //     }
  //   };

  //   loadInitialState();
  // }, []);

  // useEffect(() => {
  //   // Almacenar el estado en AsyncStorage cada vez que cambie
  //   AsyncStorage.setItem('initializing', JSON.stringify(initializing));
  //   AsyncStorage.setItem('user', JSON.stringify(user));
  // }, [initializing, user]);

  // const handleAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, [initializing]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <AppState>
          <StackNavigator />
        </AppState>
      </NavigationContainer>
    );
  }

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
