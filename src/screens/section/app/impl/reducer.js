
/* eslint no-case-declarations: 0 */

import { SEARCH } from '../info/constants';
import createStore from '../info/createStore.js';

const configurateSectionAppReducer = (initialState) => {

    const store = createStore(initialState);

    return (state = store, action) => {

        switch (action.type) {
            case SEARCH:

                if (action.value.length === 0) {
                    state.isSearching = false;
                    return Object.assign({}, state);
                }

                // const reg = new RegExp(action.value, 'gi');
                // const searchingElement = state.section.filter((item) => {
                //     return item.display.article.match(reg) || item.display.description.match(reg);
                // });

                state.isSearching = true;
                // state.searchingElements = searchingElement;

                return Object.assign({}, state);
            default:
                return state;
        }
    };
};

export default configurateSectionAppReducer;
