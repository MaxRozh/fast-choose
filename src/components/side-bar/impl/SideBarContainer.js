import * as actions from './actions';

export const mapStateToProps = props => {
  const {
    favorites,
    library,
    history,
    openedListType,
    isLogin,
    text,
    isSideBarOpened,
  } = props.sideBar;

  return {
    favorites,
    library,
    history,
    openedListType,
    isLogin,
    text,
    isSideBarOpened,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onToggleSideBar: isOpened => dispatch(actions.toggleSideBar(isOpened)),
    onToggleList: type => dispatch(actions.toggleList(type)),
    onCloseList: type => dispatch(actions.closeList(type)),
    onRemove: (type, id) => dispatch(actions.remove(type, id)),
  };
};
