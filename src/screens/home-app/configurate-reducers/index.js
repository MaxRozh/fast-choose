
import { combineReducers } from 'redux';

import configurateHomeAppReducer from '../home/impl/reducer';

export const configurateReducers = (store) => {

    return combineReducers({
        homeApp: configurateHomeAppReducer(store)
    });
};

export default configurateReducers;
