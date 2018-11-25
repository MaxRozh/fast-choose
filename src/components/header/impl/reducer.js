/* eslint no-case-declarations: 0 */

import {
  SIGN_IN,
  LOGIN,
  SEARCH,
  LOGOUT,
  OPEN_PROFILE_MENU,
} from '../info/constants';
import createStore from '../info/createStore';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker';

const configurateHeaderReducer = initialState => {
  const store = createStore(
    initialState,
    LocalStorageWorker.getLSContainer('loginParams')
  );

  return (state = store, action) => {
    switch (action.type) {
      case SIGN_IN:
        log.warn('SIGN IN', action);

        return state;
      case LOGIN:
        const loginValue = action.value.trim();

        if (loginValue.length === 0) {
          return state;
        }

        state.name = loginValue;
        state.isSignIn = true;

        LocalStorageWorker.setLSContainer('loginParams', {
          isLogin: true,
          name: loginValue,
        });

        return Object.assign({}, state);
      case LOGOUT:
        state.name = '';
        state.isSignIn = false;
        state.isStartedLogin = false;

        LocalStorageWorker.resetLSContainer('loginParams');

        return Object.assign({}, state);
      case SEARCH:
        const value = action.value.trim();

        action.onSearch(value);

        return state;
      case OPEN_PROFILE_MENU:
        state.isProfileMenuOpened = !state.isProfileMenuOpened;
        state.profileAnchorEl = action.event.currentTarget;

        return Object.assign({}, state);
      default:
        return state;
    }
  };
};

export default configurateHeaderReducer;
