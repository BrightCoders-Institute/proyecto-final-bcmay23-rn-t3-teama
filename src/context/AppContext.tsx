import React, {createContext, useReducer, useEffect} from 'react';
import {appReducer} from './appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AppContextState {
  isLoggedIn: boolean;
  consumedCalories: number;
  caloriesPerDay: number;
  userData: UserDataInfo;
  userKey: string;
}
export interface UserDataInfo {
  bmi: number;
  age: number;
  email: string;
  lastName: string;
  caloriesPerDay: number;
  bust: number;
  height: number;
  name: string;
  fatPercentage: number;
  waist: number;
  hips: number;
  userKey: string;
  goal: string;
  weight: number;
  image: string;
}

// estado inicial del context
export const appInitialState: AppContextState = {
  isLoggedIn: false,
  consumedCalories: 1600,
  caloriesPerDay: 3200,
  userData: {
    name: '',
    lastName: '',
    userKey: '',
    height: 0,
    weight: 0,
    age: 0,
    bmi: 0,
    email: '',
    caloriesPerDay: 0,
    bust: 0,
    fatPercentage: 0,
    waist: 0,
    hips: 0,
    goal: '',
    image:
      'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  userKey: '',
  //   futuros valores para almacenar
};

// todo lo que queremos que se exponga en el context (data y métodos)
export interface AppContextProps {
  appState: AppContextState;
  signIn?: () => void;
  logOut?: () => void;
  updateCalories?: (calories: number) => void;
  updateDayOfWeek?: (day: string) => void;
  getContextUserData: (userData: UserDataInfo) => void;
  getContextUserKey: (userKey: string) => void;
  // futuras acciones
}

// Context
export const AppContext = createContext({} as AppContextProps);

// proveedor del estado
export const AppProvider = ({children}: any) => {
  const [appState, dispatch] = useReducer(appReducer, appInitialState);

  useEffect(() => {
    const loadLoggedInState = async () => {
      try {
        const savedIsLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const savedUserKey = await AsyncStorage.getItem('userKey');
        if (savedIsLoggedIn !== null) {
          dispatch({
            type: 'loadLoggedInState',
            payload: JSON.parse(savedIsLoggedIn),
          });
        }
        if (savedUserKey !== null) {
          dispatch({
            type: 'loadUserKeyState',
            payload: savedUserKey,
          });
        }
      } catch (error) {
        console.error('Error loading isLoggedIn from AsyncStorage:', error);
      }
    };
    loadLoggedInState();
  }, []);

  const signIn = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    dispatch({type: 'signIn'});
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('userKey');
    dispatch({type: 'logOut'});
  };

  const getContextUserKey = async (userKey: string) => {
    await AsyncStorage.setItem('userKey', userKey);
    dispatch({type: 'getUserKey', payload: userKey});
  };

  const getContextUserData = async (userData: UserDataInfo) => {
    // await AsyncStorage.setItem('userData', JSON.stringify(userData));
    dispatch({type: 'getContextUserData', payload: userData});
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        signIn,
        logOut,
        getContextUserKey,
        getContextUserData,
      }}>
      {children}
    </AppContext.Provider>
  );
};
