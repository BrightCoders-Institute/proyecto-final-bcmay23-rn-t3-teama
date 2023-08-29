import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Interfaz del context
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
}

// estado inicial del context
export const authInitialState: AuthState = {
    isLoggedIn: false,
};

// todo lo que queremos que se exponga en el context (data y métodos)
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// Context
export const AuthContext = createContext( {} as AuthContextProps);

// proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'});
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
        }}>
            { children }
        </AuthContext.Provider>
    );
};
