
import { connect } from 'react-redux';

import HomeApp from './component/HomeApp.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/HomeAppContainer';

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
