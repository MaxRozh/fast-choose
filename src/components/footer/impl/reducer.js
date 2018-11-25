import createStore from '../info/createStore';

const configurateFooterReducer = initialState => {
  const store = createStore(initialState);

  return (state = store, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
};

export default configurateFooterReducer;
