
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
