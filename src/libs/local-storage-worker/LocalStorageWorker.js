import LocalStorageParams from './LocalStorageParams';

class LocalStorageWorker {
  constructor() {
    this.lsName = 'ls_fc';
    let psAppLocalStorage = window.localStorage.getItem(this.lsName)
      ? JSON.parse(window.localStorage.getItem(this.lsName))
      : {};

    this.LocalStorageParams = new LocalStorageParams(psAppLocalStorage);

    LocalStorageWorker.resetLSContainer = LocalStorageWorker.resetLSContainer.bind(
      this
    );
    LocalStorageWorker.resetLS = LocalStorageWorker.resetLS.bind(this);
    LocalStorageWorker.setLSContainer = LocalStorageWorker.setLSContainer.bind(
      this
    );
    LocalStorageWorker.getLSContainer = LocalStorageWorker.getLSContainer.bind(
      this
    );
    LocalStorageWorker.checkLSWorkerPresence = LocalStorageWorker.checkLSWorkerPresence.bind(
      this
    );

    this.onUpdateLSParams = this.onUpdateLSParams.bind(this);
    this.handleLSUpdate = this.handleLSUpdate.bind(this);
  }

  static setLSContainer(container, value) {
    this.onUpdateLSParams();

    this.LocalStorageParams[container] = value;
    this.handleLSUpdate();
  }

  static resetLSContainer(container) {
    this.onUpdateLSParams();

    this.LocalStorageParams[container] = null;
    this.handleLSUpdate();
  }

  static resetLS() {
    this.LocalStorageParams = {};
    this.handleLSUpdate();
  }

  static getLSContainer(container) {
    this.onUpdateLSParams();
    return this.LocalStorageParams[container];
  }

  onUpdateLSParams() {
    const lsItem = JSON.parse(window.localStorage.getItem(this.lsName));
    this.LocalStorageParams.updateLSParams(lsItem || {});
  }

  handleLSUpdate() {
    this.LocalStorageParams.lifeTime = +new Date();
    window.localStorage.setItem(
      this.lsName,
      JSON.stringify(this.LocalStorageParams)
    );
  }

  static checkLSWorkerPresence() {
    return this.LocalStorageParams !== undefined;
  }
}

export default LocalStorageWorker;
