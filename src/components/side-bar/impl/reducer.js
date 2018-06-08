
import { REMOVE_FAVORITE, REMOVE_LIBRARY, REMOVE_HISTORY } from '../info/constants';
import createStore from '../info/createStore';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker.js';

const configurateSideBarReducer = (initialState) => {

    const store = createStore(
        initialState,
        LocalStorageWorker.getLocalStorageContainer('favorites'),
        LocalStorageWorker.getLocalStorageContainer('library'),
        LocalStorageWorker.getLocalStorageContainer('history'),
        LocalStorageWorker.getLocalStorageContainer('loginParams'));

    return (state = store, action) => {

        log.warn('SIDEBAR REDUCE', store);

        switch (action.type) {
            case REMOVE_FAVORITE:

                state.favorites = state.favorites.filter((item) => {
                    return item.id !== action.id;
                });

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case REMOVE_LIBRARY:

                state.favorites = state.favorites.filter((item) => {
                    return item.id !== action.id;
                });

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case REMOVE_HISTORY:

                state.favorites = state.favorites.filter((item) => {
                    return item.id !== action.id;
                });

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            default:
                return state;
        }
    };
};

export default configurateSideBarReducer;
