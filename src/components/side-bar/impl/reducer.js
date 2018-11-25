import {
  TOGGLE_SIDEBAR,
  TOGGLE_LIST,
  CLOSE_LIST,
  REMOVE,
} from '../info/constants';
import createStore from '../info/createStore';
// import { removeClickListener, addClickListener } from './dropdown.js';

import LocalStorageWorker from '../../../libs/local-storage-worker/LocalStorageWorker';

const configurateSideBarReducer = initialState => {
  const store = createStore(
    initialState,
    LocalStorageWorker.getLSContainer('favorites'),
    LocalStorageWorker.getLSContainer('library'),
    LocalStorageWorker.getLSContainer('history'),
    LocalStorageWorker.getLSContainer('loginParams')
  );

  return (state = store, action) => {
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        state.isSideBarOpened = action.isOpened;

        return Object.assign({}, state);
      case TOGGLE_LIST:
        state.openedListType =
          action.listType === state.openedListType ? null : action.listType;

        return Object.assign({}, state);
      case CLOSE_LIST:
        state.openedListType = null;

        return Object.assign({}, state);
      case REMOVE:
        if (state[action.listType]) {
          state[action.listType] = state[action.listType].filter(
            item => item.id !== action.id
          );
        }

        return Object.assign({}, state);
      default:
        return state;
    }
  };
};

export default configurateSideBarReducer;
