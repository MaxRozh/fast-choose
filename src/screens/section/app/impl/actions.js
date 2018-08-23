
import * as constants from '../info/constants';

export const search = (value) => {
    return {
        type: constants.SEARCH,
        value
    };
};
