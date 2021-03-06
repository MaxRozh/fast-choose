
class LocalStorageParams {

    constructor(params) {
        this.favorites = params.favorites;
        this.history = params.history;
        this.library = params.library;
        this.loginParams = params.loginParams;
        this.lifeTime = +new Date();
    }

    updateLSParams(params) {
        this.favorites = params.favorites;
        this.history = params.history;
        this.library = params.library;
        this.loginParams = params.loginParams;
    }
}

export default LocalStorageParams;
