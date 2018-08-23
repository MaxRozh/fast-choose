
const createStore = (params, loginParams) => {

    return {
        text: params.text.headerText,
        isSignIn: loginParams ? loginParams.isLogin : false,
        name: loginParams ? loginParams.name : '',
        isProfileMenuOpened: false,
        profileAnchorEl: {}
    };
};

export default createStore;
