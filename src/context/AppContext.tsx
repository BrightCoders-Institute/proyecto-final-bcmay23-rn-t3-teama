import React, {createContext, useReducer, useEffect} from 'react';
import {appReducer} from './appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AppContextState {
  isLoggedIn: boolean;
  consumedCalories: number;
  caloriesPerDay: number;
  userData: UserDataInfo;
  nutriologistData: NutriologistDataInfo;
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

export interface NutriologistDataInfo {
  name: string;
  major: string;
  cityAndCountry: string;
  biography: string;
  rating: string;
  NutritionistImage: string;
}

// estado inicial del context
export const appInitialState: AppContextState = {
  isLoggedIn: false,
  consumedCalories: 1600,
  caloriesPerDay: 3200,
  userData: {
    name: 'Jhon',
    lastName: 'Needham',
    userKey: '123456',
    height: 1.8,
    weight: 110.5,
    age: 12,
    bmi: 80.2,
    email: '',
    caloriesPerDay: 0,
    bust: 520.5,
    fatPercentage: 0,
    waist: 12.8,
    hips: 80.4,
    goal: '',
    image:
      'https://www.pasala.com.mx/wp-content/uploads/2020/06/PAS200623-MEDIO-MAMADO-01.jpg',
  },
  nutriologistData: {
    name: 'Dr. Aimep3 Fischer',
    major: 'Ph.D. in Nutrition',
    cityAndCountry: 'Colima, Mx.',
    biography: 'Harvard-educated nutritionist empowering healthier lives. Personalized meal plans, engaging workshops, and evidence-based guidance for weight management, sports nutrition, and overall well-being. Join our app for a transformative wellness journey today!',
    rating: '4.5',
    NutritionistImage:
      'https://www.fitactiva.com/wp-content/uploads/2022/10/nutricionista-fitactiva.png',
  },
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
  getContextNutritionistData: (nutriologistData: NutriologistDataInfo) => void;
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
        const savedUserData = await AsyncStorage.getItem('userData');
        if (savedIsLoggedIn !== null) {
          dispatch({
            type: 'loadLoggedInState',
            payload: JSON.parse(savedIsLoggedIn),
          });
        }
        if (savedUserData !== null) {
          dispatch({
            type: 'loadUserDataState',
            payload: JSON.parse(savedUserData),
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
    await AsyncStorage.removeItem('userData');
    dispatch({type: 'logOut'});
  };

  const getContextUserData = async (userData: UserDataInfo) => {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    dispatch({type: 'getContextUserData', payload: userData});
  };

  const getContextNutritionistData = async (nutriologistData: NutriologistDataInfo) => {
    await AsyncStorage.setItem('nutriologistData', JSON.stringify(nutriologistData));
    dispatch({type: 'getContextNutritionistData', payload: nutriologistData});
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        signIn,
        logOut,
        getContextUserData,
        getContextNutritionistData,
      }}>
      {children}
    </AppContext.Provider>
  );
};
