import { AppContextState } from './AppContext';

type AppAction = { type: 'signIn' } | { type: 'logOut' };


export const appReducer = ( state: AppContextState, action: AppAction ): AppContextState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                // username: 'no-username-yet',
            };

        default:
            return state;
    }
};
