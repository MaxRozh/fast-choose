
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
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {

        const { classes } = this.props;

        return (
            <div>

                <Button size="small" onClick={this.handleOpen}>{this.props.text.signUp}</Button>
                <Button size="small" onClick={this.handleOpen}>{this.props.text.login}</Button>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%)`
                    }} className={classes.paper}>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="nickname">{this.props.text.loginPlaceholder}</InputLabel>
                            <Input
                                id="nickname"
                                autoComplete="true"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.props.onLogin(this.state.value)}
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
    classes: PropTypes.object.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    text: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginModal);
