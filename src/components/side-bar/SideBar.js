
import { connect } from 'react-redux';

import SideBar from './view/SideBar.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/SideBarContainer';

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
