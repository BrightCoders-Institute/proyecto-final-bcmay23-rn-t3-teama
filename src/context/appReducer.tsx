import { AppContextState, NutriologistDataInfo, UserDataInfo } from './AppContext';

type AppAction = { type: 'signIn' } | { type: 'logOut' } | { type: 'getContextNutritionistData', payload: NutriologistDataInfo } | { type: 'getContextUserData', payload: UserDataInfo } | { type: 'loadLoggedInState', payload: boolean } | { type: 'loadUserDataState', payload: UserDataInfo };


export const appReducer = ( state: AppContextState, action: AppAction ): AppContextState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
            };
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
            };
        case 'loadLoggedInState':
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case 'loadUserDataState':
            return {
                ...state,
                userData: action.payload,
            };
        case 'getContextUserData':
            return {
                ...state,
                userData: action.payload,
            };
        case 'getContextNutritionistData':
            return {
                ...state,
                nutriologistData: action.payload,
            };

        default:
            return state;
    }
};
