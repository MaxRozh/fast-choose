import { connect } from 'react-redux';

import Footer from './view/Footer';
import { mapStateToProps, mapDispatchToProps } from './impl/FooterContainer';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
