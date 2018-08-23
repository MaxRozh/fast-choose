
import { combineReducers } from 'redux';

import configurateHomeAppReducer from '../app/impl/reducer';

export const configurateReducers = (store) => {

    return combineReducers({
        homeApp: configurateHomeAppReducer(store)
    });
};

export default configurateReducers;
