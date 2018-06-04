
import LocalStorageParams from './LocalStorageParams.js';

class LocalStorageWorker {

    constructor(screenType) {

        let psAppLocalStorage = window.localStorage.getItem('ps_messenger') ? JSON.parse(window.localStorage.getItem('ps_messenger')) : {};

        if (screenType !== 'room') {
            psAppLocalStorage = {};
        }

        this.LocalStorageParams = new LocalStorageParams(psAppLocalStorage);

        LocalStorageWorker.resetLocalStorageContainer = LocalStorageWorker.resetLocalStorageContainer.bind(this);
        LocalStorageWorker.resetLocalStorage = LocalStorageWorker.resetLocalStorage.bind(this);
        LocalStorageWorker.setLocalStorageContainer = LocalStorageWorker.setLocalStorageContainer.bind(this);
        LocalStorageWorker.getLocalStorageContainer = LocalStorageWorker.getLocalStorageContainer.bind(this);
        LocalStorageWorker.checkLocalStorageWorkerPresence = LocalStorageWorker.checkLocalStorageWorkerPresence.bind(this);

        this.handleLocalStorageMessagesUpdate = this.handleLocalStorageMessagesUpdate.bind(this);
        this.handleLocalStorageUpdate = this.handleLocalStorageUpdate.bind(this);
    }

    static setLocalStorageContainer(container, value) {

        if (container == 'messages') {

            this.handleLocalStorageMessagesUpdate(value);
            return;
        }

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
        window.localStorage.setItem('ps_messenger', JSON.stringify(this.LocalStorageParams));
    }

    handleLocalStorageMessagesUpdate(message) {
        const messages = this.LocalStorageParams.messages ? this.LocalStorageParams.messages : [];

        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id == message.id) return;
        }
        messages.push(message);

        this.LocalStorageParams.messages = messages;
        this.handleLocalStorageUpdate();
    }

    static checkLocalStorageWorkerPresence() {
        return this.LocalStorageParams !== undefined;
    }
}

export default LocalStorageWorker;
