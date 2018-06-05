
import LocalStorageParams from './LocalStorageParams.js';

class LocalStorageWorker {

    constructor() {

        let psAppLocalStorage = window.localStorage.getItem('ls_fast_choose') ? JSON.parse(window.localStorage.getItem('ls_fast_choose')) : {};

        this.LocalStorageParams = new LocalStorageParams(psAppLocalStorage);

        LocalStorageWorker.resetLocalStorageContainer = LocalStorageWorker.resetLocalStorageContainer.bind(this);
        LocalStorageWorker.resetLocalStorage = LocalStorageWorker.resetLocalStorage.bind(this);
        LocalStorageWorker.setLocalStorageContainer = LocalStorageWorker.setLocalStorageContainer.bind(this);
        LocalStorageWorker.getLocalStorageContainer = LocalStorageWorker.getLocalStorageContainer.bind(this);
        LocalStorageWorker.checkLocalStorageWorkerPresence = LocalStorageWorker.checkLocalStorageWorkerPresence.bind(this);

        this.handleLocalStorageUpdate = this.handleLocalStorageUpdate.bind(this);
    }

    static setLocalStorageContainer(container, value) {

        this.LocalStorageParams[container] = value;
        this.handleLocalStorageUpdate();
    }

    static resetLocalStorageContainer(container) {

        this.LocalStorageParams[container] = null;
        this.handleLocalStorageUpdate();
    }

    static resetLocalStorage() {

        this.LocalStorageParams = {};
        this.handleLocalStorageUpdate();
    }

    static getLocalStorageContainer(container) {
        return this.LocalStorageParams[container];
    }

    handleLocalStorageUpdate() {
        this.LocalStorageParams.lifeTime = +new Date();
        window.localStorage.setItem('ls_fast_choose', JSON.stringify(this.LocalStorageParams));
    }

    static checkLocalStorageWorkerPresence() {
        return this.LocalStorageParams !== undefined;
    }
}

export default LocalStorageWorker;
