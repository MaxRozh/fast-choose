
import { connect } from 'react-redux';

import HomeApp from './view/HomeApp.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/HomeAppContainer';

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
