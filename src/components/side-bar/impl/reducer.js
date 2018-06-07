
import { REMOVE_FAVORITE, REMOVE_LIBRARY, REMOVE_HISTORY } from '../info/constants';
import { sideBarStore } from '../info/store';

export default function sideBarReducer(state = sideBarStore, action) {
    switch (action.type) {
        case REMOVE_FAVORITE:

            state.favorites = state.favorites.filter((item) => {
                return item.id !== action.id
            });

            //if (isLogin)request
            //localStorage

            return Object.assign({}, state);
        case REMOVE_LIBRARY:

            state.favorites = state.favorites.filter((item) => {
                return item.id !== action.id
            });

            //if (isLogin)request
            //localStorage

            return Object.assign({}, state);
        case REMOVE_HISTORY:

            state.favorites = state.favorites.filter((item) => {
                return item.id !== action.id
            });

            //if (isLogin)request
            //localStorage

            return Object.assign({}, state);
        default:
            return state;
    }
}
