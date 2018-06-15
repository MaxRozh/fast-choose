
import * as actions from './actions';
import { search as onSearch } from '../../../home-app/impl/actions';

export const mapStateToProps = (props) => {

    log.warn('props', props.header);

    const {isSignIn, name, text, isStartedLogin} = props.header;

    return {
        isSignIn,
        name,
        text,
        isStartedLogin
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: () => dispatch(actions.signIn()),
        onLogin: (isStartedLogin, value) => dispatch(actions.login(isStartedLogin, value)),
        onLogout: () => dispatch(actions.logout()),
        onSearch: (value) => {
            dispatch(actions.search(value));
            dispatch(onSearch(value));
        }
    };
};
