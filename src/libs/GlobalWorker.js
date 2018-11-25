class GlobalWorker {
  constructor() {
    this.state = {
      currentApp: null,
      homeAppIsLoaded: false,
      sectionsAppIsLoaded: false,
      sectionAppIsLoaded: false,
      listeners: {
        onSearch: () => {},
      },
    };

    GlobalWorker.setNewLoadedApp = GlobalWorker.setNewLoadedApp.bind(this);
    GlobalWorker.changeCurrentApp = GlobalWorker.changeCurrentApp.bind(this);
    this.handleUpdateGlobalListeners = this.handleUpdateGlobalListeners.bind(
      this
    );

    window.globalWorker = {
      setNewLoadedApp: GlobalWorker.setNewLoadedApp,
      changeCurrentApp: GlobalWorker.changeCurrentApp,
      state: this.state,
    };
  }

  static setNewLoadedApp(appName) {
    this.state[appName + 'AppIsLoaded'] = true;
  }

  static changeCurrentApp(appName, listeners) {
    if (this.state.currentApp === appName) {
      return;
    }

    this.state.currentApp = appName;
    this.handleUpdateGlobalListeners(listeners);
  }

  handleUpdateGlobalListeners(listeners) {
    for (let i in listeners) {
      this.state.listeners[listeners[i].name] = listeners[i].action;
    }
  }
}

export default GlobalWorker;
