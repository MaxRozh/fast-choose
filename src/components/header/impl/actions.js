
import * as constants from '../info/constants';

export const login = (value) => {
    return {
        type: constants.LOGIN,
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
        onSearch: window.globalWorker.state.listeners.onSearch,
        value
    };
};

export const openProfileMenu = (event) => {
    return {
        type: constants.OPEN_PROFILE_MENU,
        event
    };
};
