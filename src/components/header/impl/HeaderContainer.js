import * as actions from './actions';
import { toggleSideBar } from '../../side-bar/impl/actions';

export const mapStateToProps = props => {
  const {
    isSignIn,
    name,
    text,
    isProfileMenuOpened,
    profileAnchorEl,
  } = props.header;

  return {
    isSignIn,
    name,
    text,
    isProfileMenuOpened,
    profileAnchorEl,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(actions.signIn()),
    onLogin: value => dispatch(actions.login(value)),
    onLogout: () => dispatch(actions.logout()),
    onSearch: value => dispatch(actions.search(value)),
    onOpenProfileMenu: event => dispatch(actions.openProfileMenu(event)),
    onOpenSideBar: () => dispatch(toggleSideBar(true)),
  };
};
