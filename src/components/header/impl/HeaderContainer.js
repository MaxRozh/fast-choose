
import * as actions from './actions';
import { search as onSearch } from '../../../home-app/impl/actions';

export const mapStateToProps = (props) => {

    const {isSignIn, name, isStartedLogin} = props.header;

    return {
        isSignIn,
        name,
        isStartedLogin
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: () => dispatch(actions.signIn()),
        onLogin: (isStartedLogin, value) => dispatch(actions.login(isStartedLogin, value)),
        onSearch: (value) => {
            dispatch(actions.search(value));
            dispatch(onSearch(value));
        }
    };
};
