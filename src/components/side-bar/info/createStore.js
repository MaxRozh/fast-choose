const testFavorites = [
  {
    id: 32123132,
    link: '#',
    text: 'favorite 1',
  },
  {
    id: 32155132,
    link: '#',
    text: 'favorite 2',
  },
  {
    id: 33332313,
    link: '#',
    text: 'favorite 3',
  },
];

const testLibrary = [
  {
    id: 32000032,
    link: '#',
    text: 'library 1',
  },
  {
    id: 32111132,
    link: '#',
    text: 'library 2',
  },
  {
    id: 33334541,
    link: '#',
    text: 'library 3',
  },
];

const testHistory = [
  {
    id: 44123132,
    link: '#',
    text: 'history 1',
  },
  {
    id: 55155132,
    link: '#',
    text: 'history 2',
  },
  {
    id: 88332313,
    link: '#',
    text: 'history 3',
  },
];

const createStore = (params, favorites, library, history, loginParams) => {
  return {
    text: params.text.sideBarText,
    favorites: favorites || testFavorites,
    library: library || testLibrary,
    history: history || testHistory,
    openedListType: null,
    isLogin: loginParams ? loginParams.isLogin : false,
    isSideBarOpened: false,
  };
};

export default createStore;
