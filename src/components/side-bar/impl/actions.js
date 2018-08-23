
import * as constants from '../info/constants';

export const toggleSideBar = (isOpened) => {
    return {
        type: constants.TOGGLE_SIDEBAR,
        isOpened
    };
};

export const toggleList = (listType) => {
    return {
        type: constants.TOGGLE_LIST,
        listType
    };
};

export const closeList = (listType) => {
    return {
        type: constants.CLOSE_LIST,
        listType
    };
};

export const remove = (listType, id) => {
    return {
        type: constants.REMOVE,
        listType,
        id
    };
};
