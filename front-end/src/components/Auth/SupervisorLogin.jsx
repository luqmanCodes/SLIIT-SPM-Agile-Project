import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField,Grid } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
};

class SupervisorLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    setLocalStorage(result) {
        localStorage.setItem("loginEmail", result.user.email);
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.fireApp.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
            console.log(error);
        })
        .then(result => {
            this.setLocalStorage(result);
            this.props.history.push("/supervisor/"+result.user.email);
        });
    }
    render() {
        
        const { classes } = this.props;
        return (
            <div style={{margin:'15%'}}>
                <Grid container justify="center">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="headline" component="h2" color="textSecondary">
                                Supervisor Sign in
                            </Typography>
                            <TextField
                                required
                                value={this.state.username}
                                onChange={this.onChange.bind(this)}
                                name="username"
                                label="Email"
                                type="email">
                            </TextField><br />
                            <TextField
                                required
                                value={this.state.password}
                                onChange={this.onChange.bind(this)}
                                type="password"
                                name="password"
                                label="Password">
                            </TextField>
                            <br/>
                            <br />
                            <Button
                                style = { {
                                    backgroundColor:green[500]
                                    }
                                }
                                justify="center"
                                type="submit"
                                variant="contained"
                                color="primary">
                                Log in
                            </Button>
                        </CardContent>
                    </Card>
                </form>
                </Grid>
            </div>
        );
    }
}

SupervisorLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SupervisorLogin);
