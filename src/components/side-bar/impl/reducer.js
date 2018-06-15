
import {
    REMOVE_FAVORITE, REMOVE_LIBRARY, REMOVE_HISTORY, OPEN_LIST, CLOSE_LIST
} from '../info/constants';
import createStore from '../info/createStore';
import { removeClickListener, addClickListener } from './dropdown.js';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker.js';

const configurateSideBarReducer = (initialState) => {

    const store = createStore(
        initialState,
        LocalStorageWorker.getLocalStorageContainer('favorites'),
        LocalStorageWorker.getLocalStorageContainer('library'),
        LocalStorageWorker.getLocalStorageContainer('history'),
        LocalStorageWorker.getLocalStorageContainer('loginParams'));

    return (state = store, action) => {

        log.warn('SIDEBAR REDUCE', state);

        switch (action.type) {
            case REMOVE_FAVORITE:

                log.warn('REMOVE FAVORITES BEFORE', state, action);

                state.favorites = state.favorites.filter((item) => {
                    return item.id !== action.id;
                });

                log.warn('REMOVE FAVORITES AFTER', state);

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case REMOVE_LIBRARY:

                log.warn('REMOVE LIBRARY BEFORE', state);

                state.library = state.library.filter((item) => {
                    return item.id !== action.id;
                });

                log.warn('REMOVE LIBRARY AFTER', state);

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case REMOVE_HISTORY:

                state.history = state.history.filter((item) => {
                    return item.id !== action.id;
                });

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case OPEN_LIST:

                if (state.openedListType === action.listType.replace('_icon', '')) {

                    removeClickListener();
                    state.openedListType = null;
                } else {

                    addClickListener('.' + action.listType, action.onCloseList, '.' + action.notClosedElem);
                    state.openedListType = action.listType.replace('_icon', '');
                }

                return Object.assign({}, state);
            case CLOSE_LIST:

                state.openedListType = null;

                return Object.assign({}, state);
            default:
                return state;
        }
    };
};

export default configurateSideBarReducer;
