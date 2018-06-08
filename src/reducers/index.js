
import { combineReducers } from 'redux';

import configurateHeaderReducer from '../components/header/impl/reducer';
import configurateHomeAppReducer from '../home-app/impl/reducer';

export const configurateReducers = (store) => {

    const homeAppReducer = configurateHomeAppReducer(store);
    const headerReducer = configurateHeaderReducer(store);

    return combineReducers({
        header: headerReducer,
        homeApp: homeAppReducer
    });
};

export default configurateReducers;
