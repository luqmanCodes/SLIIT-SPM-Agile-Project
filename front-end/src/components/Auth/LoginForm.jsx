import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardContent, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
const styles = {
    card: {
        maxWidth: 300,
        minHeight: 250,
    },
    button: {
        background: green[500],
        color: 'white',
        maxWidth: 220,
        minWidth: 220,
        "&:hover": {
            background: 'black'
        }
    },
    root: {
        position: 'absolurete',
        marginTop: '50%',
        marginLeft: '50%',
        zIndex: 5
    }
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInBy: 'null'

        }
        this.loginOnClick = this.loginOnClick.bind(this);
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.setCustomParameters({ hd: 'my.sliit.lk' });
        console.log(this.props.history);
    }
    setLocalStorage(result) {
        localStorage.setItem("loginEmail", result.user.email);
        let displayNameArr = result.user.displayName.split(" ");
        localStorage.setItem("loginName",displayNameArr[1] + displayNameArr[2] );
        localStorage.setItem("loginItNo",displayNameArr[0]);
    }
    loginOnClick(e) {
        e.preventDefault();
        const id = e.target.id;
        switch (id) {
            case "student":
                firebase.auth().signInWithPopup(this.provider)
                    .then(result => {
                        this.setLocalStorage(result);
                        console.log(result);
                        this.props.history.push("/student/" + result.user.email);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                break;
            case "supervisor":
                    this.props.history.push("/supervisor");
                break;
            case "manager":
                firebase.auth().signInWithPopup(this.provider)
                    .then(result => {
                        this.setLocalStorage(result);
                        this.props.history.push("/manager/" + result.user.email);
                    })
                    .catch(err => {
                        //TO-DO Error message
                    });
                break;
            default:
        }

    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card className={classes.card} elevation={5}>
                    <CardContent>
                        <Grid container direction="column" spacing={40}>
                            <Grid item>
                                <Button className={classes.button} id='student' onClick={this.loginOnClick}>Student Login</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button} id='supervisor' onClick={this.loginOnClick}>Supervisor Login</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button} id='manager' onClick={this.loginOnClick}>Manager Login</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>);
    }
}

export default withStyles(styles)(LoginForm);