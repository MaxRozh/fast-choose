
import { SIGN_IN, LOGIN, SEARCH, LOGOUT } from '../info/constants';
import createStore from '../info/createStore';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker.js';

const configurateHeaderReducer = (initialState) => {

    const store = createStore(initialState, LocalStorageWorker.getLSContainer('loginParams'));

    return (state = store, action) => {

        switch (action.type) {
            case SIGN_IN:

                log.warn('SIGN IN', action);

                return state;
            case LOGIN:

                if (!action.isStartedLogin) {
                    state.isStartedLogin = true;
                } else {

                    state.name = action.value;
                    state.isSignIn = true;

                    LocalStorageWorker.setLSContainer('loginParams', {
                        isLogin: true,
                        name: action.value
                    });
                }

                return Object.assign({}, state);
            case LOGOUT:

                state.name = '';
                state.isSignIn = false;
                state.isStartedLogin = false;

                LocalStorageWorker.resetLSContainer('loginParams');

                return Object.assign({}, state);
            case SEARCH:

                action.onSearch(action.value);

                return state;
            default:
                return state;
        }
    };
};

export default configurateHeaderReducer;
