import React, { createContext, useReducer } from 'react';
import { appReducer } from './appReducer';

// Interfaz del context
/* export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
} */
export interface AppContextState {
    isLoggedIn: boolean;
    consumedCalories: number;
    dayOfWeek: string;
    // otras cosas para almacenar
}

// estado inicial del context
export const appInitialState: AppContextState = {
    isLoggedIn: false,
    consumedCalories: 0,
    dayOfWeek: '',
    // futuros valores para almacenar
};

// todo lo que queremos que se exponga en el context (data y métodos)
export interface AppContextProps {
    appState: AppContextState;
    signIn?: () => void;
    logout?: () => void;
    updateCalories?: (calories: number) => void;
    updateDayOfWeek?: (day: string) => void;
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

    return (
        <AppContext.Provider value={{
            appState,
            signIn,
        }}>
            { children }
        </AppContext.Provider>
    );
};
