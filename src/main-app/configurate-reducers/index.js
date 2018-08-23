
import { combineReducers } from 'redux';

export const configurateReducers = (store, configurateHeaderReducer, configurateSideBarReducer,
                                    configurateFooterReducer) => {

    return combineReducers({
        header: configurateHeaderReducer(store),
        sideBar: configurateSideBarReducer(store),
        footer: configurateFooterReducer(store)
    });
};

export default configurateReducers;
