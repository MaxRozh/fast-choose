
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {

    const { classes, text, onLogin } = this.props;
    const { value, open } = this.state;

    return (
      <div>

        <Button size="small" onClick={this.handleOpen}>{text.signUp}</Button>
        <Button size="small" onClick={this.handleOpen}>{text.login}</Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%)`}} className={classes.paper}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="nickname">{text.loginPlaceholder}</InputLabel>
              <Input
                id="nickname"
                autoComplete="true"
                autoFocus
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => onLogin(value)}
              >
                Submit
              </Button>
            </FormControl>
          </div>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  text: PropTypes.shape({}).isRequired,
  onLogin: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginModal);
