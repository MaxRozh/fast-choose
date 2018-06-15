
import { SIGN_IN, LOGIN, SEARCH, LOGOUT } from '../info/constants';
import createStore from '../info/createStore';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker.js';

const configurateHeaderReducer = (initialState) => {

    const store = createStore(initialState, LocalStorageWorker.getLocalStorageContainer('loginParams'));

    return (state = store, action) => {

        switch (action.type) {
            case SIGN_IN:

                // console.group('SIGN_IN');
                // console.warn('choose with:');
                // console.table(action);

                return state;
            case LOGIN:

                if (!action.isStartedLogin) {
                    state.isStartedLogin = true;
                } else {

                    state.name = action.value;
                    state.isSignIn = true;

                    LocalStorageWorker.setLocalStorageContainer('loginParams', {
                        isLogin: true,
                        name: action.value
                    });
                }

                return Object.assign({}, state);
            case LOGOUT:

                state.name = '';
                state.isSignIn = false;
                state.isStartedLogin = false;

                LocalStorageWorker.resetLocalStorageContainer('loginParams');

                return Object.assign({}, state);
            case SEARCH:
                return state;
            default:
                return state;
        }
    };
};

export default configurateHeaderReducer;
