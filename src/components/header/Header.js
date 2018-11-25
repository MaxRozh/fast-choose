import { connect } from 'react-redux';

import Header from './view/Header';
import { mapStateToProps, mapDispatchToProps } from './impl/HeaderContainer';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
