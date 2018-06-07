
import { connect } from 'react-redux';

import Footer from './component/Footer.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/FooterContainer';

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
