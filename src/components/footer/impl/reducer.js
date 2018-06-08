
import createStore from '../info/createStore';

const configurateFooterReducer = (initialState) => {

    log.warn(initialState);

    const store = createStore(initialState);

    log.warn(store);

    return (state = store, action) => {

        switch (action.type) {
            default:
                return state;
        }
    };
};

export default configurateFooterReducer;
