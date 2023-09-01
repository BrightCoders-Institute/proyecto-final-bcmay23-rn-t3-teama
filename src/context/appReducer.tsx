import { AppContextState, UserDataInfo } from './AppContext';

type AppAction = { type: 'signIn' } | { type: 'logOut' } | { type: 'getContextUserData', payload: UserDataInfo } | { type: 'loadLoggedInState', payload: boolean };


export const appReducer = ( state: AppContextState, action: AppAction ): AppContextState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                // username: 'no-username-yet',
            };
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                // username: 'no-username-yet',
            };
        case 'loadLoggedInState':
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case 'getContextUserData':
            return {
                ...state,
                userData: action.payload,
            };

        default:
            return state;
    }
};
