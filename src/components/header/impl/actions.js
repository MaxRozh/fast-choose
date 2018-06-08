
import * as constants from '../info/constants';

export const login = (isStartedLogin, value) => {
    return {
        type: constants.LOGIN,
        isStartedLogin,
        value
    };
};

export const logout = () => {
    return {
        type: constants.LOGOUT
    };
};

export const signIn = () => {
    return {
        type: constants.SIGN_IN
    };
};

export const search = (value) => {
    return {
        type: constants.SEARCH,
        value
    };
};
