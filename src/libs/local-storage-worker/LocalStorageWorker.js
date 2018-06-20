
import LocalStorageParams from './LocalStorageParams.js';

class LocalStorageWorker {

    constructor(localStorageType) {

        this.lsName = 'ls_fc_' + localStorageType;
        let psAppLocalStorage = window.localStorage.getItem(this.lsName) ? JSON.parse(window.localStorage.getItem(this.lsName)) : {};

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
        window.localStorage.setItem(this.lsName, JSON.stringify(this.LocalStorageParams));
    }

    static checkLocalStorageWorkerPresence() {
        return this.LocalStorageParams !== undefined;
    }
}

export default LocalStorageWorker;
