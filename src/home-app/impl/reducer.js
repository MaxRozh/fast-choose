
/* eslint no-case-declarations: 0 */

// import { HomeAppActions } from './actions';
import { CHOOSE_ARTICLE, SEARCH } from '../info/constants';

const configurateHomeAppReducer = (initialState) => {

    return (state = initialState, action) => {

        log.warn('i state', initialState);

        initialState.isSearching = false;
        initialState.searchingElements = [];

        switch (action.type) {
            case CHOOSE_ARTICLE:

                // console.group('CHOOSE_ARTICLE');
                // console.warn('choose with - ' + action.id);

                return state;

            case SEARCH:

                if (action.value.length === 0) {
                    state.isSearching = false;
                    return state;
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
