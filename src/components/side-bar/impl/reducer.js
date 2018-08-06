
import {
    REMOVE_FAVORITE, REMOVE_LIBRARY, REMOVE_HISTORY, OPEN_LIST, CLOSE_LIST
} from '../info/constants';
import createStore from '../info/createStore';
import { removeClickListener, addClickListener } from './dropdown.js';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker.js';

const configurateSideBarReducer = (initialState) => {

    const store = createStore(
        initialState,
        LocalStorageWorker.getLSContainer('favorites'),
        LocalStorageWorker.getLSContainer('library'),
        LocalStorageWorker.getLSContainer('history'),
        LocalStorageWorker.getLSContainer('loginParams'));

    return (state = store, action) => {

        switch (action.type) {
            case REMOVE_FAVORITE:

                state.favorites = state.favorites.filter((item) => {
                    return item.id !== action.id;
                });

                //if (isLogin)request
                //localStorage

                return Object.assign({}, state);
            case REMOVE_LIBRARY:

                state.library = state.library.filter((item) => {
                    return item.id !== action.id;
                });

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
