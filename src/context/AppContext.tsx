import React, { createContext, useReducer } from 'react';
import { appReducer } from './appReducer';

export interface AppContextState {
    isLoggedIn: boolean;
    consumedCalories: number;
    caloriesPerDay: number;
    patientMetaData: PacientMetaDataProps;
    userData: UserDataInfo;
    // otras cosas para almacenar
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

interface PacientMetaDataProps {
    profilePhotoUrl: string;
    name: string;
    lastName: string;
}

// estado inicial del context
export const appInitialState: AppContextState = {
  isLoggedIn: false,
  consumedCalories: 1600,
  caloriesPerDay: 3200,
  patientMetaData: {
    profilePhotoUrl: 'https://www.pasala.com.mx/wp-content/uploads/2020/06/PAS200623-MEDIO-MAMADO-01.jpg',
    name: 'Jhon',
    lastName: 'Needham',
  },
  userData: {
    name: 'Jhon',
    lastName: 'Needham',
    userKey: '123456',
    height: 1.80,
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
    image: 'https://www.pasala.com.mx/wp-content/uploads/2020/06/PAS200623-MEDIO-MAMADO-01.jpg',
  },
//   futuros valores para almacenar
};

// todo lo que queremos que se exponga en el context (data y métodos)
export interface AppContextProps {
    appState: AppContextState;
    signIn?: () => void;
    logout?: () => void;
    updateCalories?: (calories: number) => void;
    updateDayOfWeek?: (day: string) => void;
    getContextUserData: (userData: UserDataInfo) => void;
    // futuras acciones
}

// Context
export const AppContext = createContext( {} as AppContextProps);

// proveedor del estado
export const AppProvider = ({ children }: any) => {

    const [appState, dispatch] = useReducer( appReducer, appInitialState );

    const signIn = () => {
        dispatch({type: 'signIn'});
    };

    const getContextUserData = (userData: UserDataInfo) => {
        dispatch({type: 'getContextUserData', payload: userData});
    };

    return (
        <AppContext.Provider value={{
            appState,
            signIn,
            getContextUserData,
        }}>
            { children }
        </AppContext.Provider>
    );
};
