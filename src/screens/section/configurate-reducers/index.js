
import { combineReducers } from 'redux';

import configurateSectionAppReducer from '../app/impl/reducer';

export const configurateReducers = (store) => {

    return combineReducers({
        sectionApp: configurateSectionAppReducer(store)
    });
};

export default configurateReducers;
