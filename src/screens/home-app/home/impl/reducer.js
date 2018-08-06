
/* eslint no-case-declarations: 0 */

import { CHOOSE_ARTICLE, SEARCH } from '../info/constants';
import createStore from '../info/createStore.js';

const configurateHomeAppReducer = (initialState) => {

    const store = createStore(initialState);

    return (state = store, action) => {

        switch (action.type) {
            case CHOOSE_ARTICLE:
                return state;
            case SEARCH:

                log.check('SEARCH', action);

                if (action.value.length === 0) {
                    state.isSearching = false;
                    return Object.assign({}, state);
                }

                const reg = new RegExp(action.value, 'gi');
                const searchingElement = state.articles.filter((item) => {
                    return item.display.article.match(reg) || item.display.description.match(reg);
                });

                state.isSearching = true;
                state.searchingElements = searchingElement;

                return Object.assign({}, state);
            default:
                return state;
        }
    };
};

export default configurateHomeAppReducer;
