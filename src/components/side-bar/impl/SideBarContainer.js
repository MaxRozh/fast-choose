
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {favorites, library, history, openedListType, isLogin} = props.sideBar;

    return {
        favorites,
        library,
        history,
        openedListType,
        isLogin
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFavorite: (id) => dispatch(actions.removeFavorite(id)),
        onRemoveLibrary: (id) => dispatch(actions.removeLibrary(id)),
        onRemoveHistory: (id) => dispatch(actions.removeHistory(id)),
        onOpenList: (listType, notClosedElem) => dispatch(actions.openList(listType, notClosedElem,
            () => { dispatch(actions.closeList()); })
        )
    };
};
