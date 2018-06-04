
import * as constants from '../info/constants';

export const chooseArticle = (id) => {
    return {
        type: constants.CHOOSE_ARTICLE,
        id
    };
};

export const search = (value) => {
    return {
        type: constants.SEARCH,
        value
    };
};
