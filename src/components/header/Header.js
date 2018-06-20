
import { connect } from 'react-redux';

import Header from './view/Header.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/HeaderContainer';

export default connect(mapStateToProps, mapDispatchToProps)(Header);
