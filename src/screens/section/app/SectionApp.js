
import { connect } from 'react-redux';

import SectionApp from './view/SectionApp.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/SectionAppContainer';

export default connect(mapStateToProps, mapDispatchToProps)(SectionApp);
