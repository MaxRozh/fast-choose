
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {favorites, library, history, isLogin} = props.sideBar;

    return {
        favorites,
        library,
        history,
        isLogin
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => dispatch(actions.removeFavorite()),
        removeLibrary: (id) => dispatch(actions.removeLibrary(id)),
        removeHistory: (id) => dispatch(actions.removeLibrary(id)),
    };
};
