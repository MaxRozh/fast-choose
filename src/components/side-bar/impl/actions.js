
import * as constants from '../info/constants';

export const removeFavorite = (id) => {
    return {
        type: constants.REMOVE_FAVORITE,
        id
    };
};

export const removeLibrary = (id) => {
    return {
        type: constants.REMOVE_LIBRARY,
        id
    };
};

export const removeHistory = (id) => {
    return {
        type: constants.REMOVE_HISTORY,
        id
    };
};

export const openList = (listType, notClosedElem, onCloseList) => {
    return {
        type: constants.OPEN_LIST,
        listType,
        notClosedElem,
        onCloseList
    };
};

export const closeList = () => {
    return {
        type: constants.CLOSE_LIST
    };
};
