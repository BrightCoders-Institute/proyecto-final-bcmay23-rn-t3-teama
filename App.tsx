import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { enableLatestRenderer } from 'react-native-maps';
import { AppProvider } from './src/context/AppContext';
import auth from '@react-native-firebase/auth';
import { MainNavigator } from './src/navigation/MainNavigator';

enableLatestRenderer();

function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) { setInitializing(false); }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) { return null; }

  if (!user) {
    return (
      <NavigationContainer>
        <AppState>
          <MainNavigator />
        </AppState>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AppState>
        <PaperProvider >
          <MainNavigator />
        </PaperProvider>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
};

export default App;
