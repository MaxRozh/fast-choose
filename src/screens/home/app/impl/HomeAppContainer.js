
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {banners, articles, news, searchingElements, isSearching, text} = props.homeApp;

    return {
        banners,
        articles,
        news,
        isSearching,
        searchingElements,
        text: text
    };
};

export const mapDispatchToProps = (dispatch) => {

    window.globalWorker.changeCurrentApp('home', [
        {
            name: 'onSearch',
            action: (value) => {
                dispatch(actions.search(value));
            }
        }
    ]);

    return {
        onChooseArticle: (id) => dispatch(actions.chooseArticle(id))
    };
};
