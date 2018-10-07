/**
 * @author D.Dev
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Button } from '@material-ui/core';

/**
 * 
 * CSS Styles 
 */
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    subButton: {
        color: 'white',
        background: 'green',
        marginTop: '30px'
    },
});


/**
 * Form I-3 part 1 the static part
 * It will be required only to be filled once
 */
class FormI3_part1 extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {
                name: "Dev",
                studentId: "IT16558342",
                address: "kandy",
                phoneNumber: "0772028181",
                email: "",
                title: "asd",
                specialization: "se",
                from: "",
                to: ""
            },
            error: {
                phoneNumber: {
                    isError: false,
                    message: "invad phone Number"
                },
                email: {
                    isError: false,
                    message: "invalid emalil, seperate emails by using ,"
                }
            }
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    handleOnChange(e) {
        let prevError = this.state.error;

        if (prevError[e.target.id] != null)
            prevError[e.target.id].isError = false;

        let prevData = this.state.data;
        prevData[e.target.id] = e.target.value;
        this.setState({
            data: prevData,
            error: prevError
        });
        e.preventDefault();
    }

    onSubmitHandler(e) {
        e.preventDefault();
        if (this.validatePhoneNumber(this.state.data.phoneNumber, 'phoneNumber') && this.validateMultipleEmails(this.state.data.email, 'email')) {
            console.log(this.state.data);
        }
        // this.db.push().set(this.state.data);
    }

    validateMultipleEmails(emailString, stateId) {

        const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let correctCount = 0;
        let emailArr = emailString.split(',');
        emailArr.forEach(element => {
            if (element.match(emailRegEx))
                correctCount++;
        });

        if (correctCount === emailArr.length) {
            const prevError = this.state.error;
            prevError[stateId].isError = false;
            this.setState({
                error: prevError
            });

            return true;
        } else {
            const prevError = this.state.error;
            prevError[stateId].isError = true;
            this.setState({
                error: prevError
            })
            return false;
        }
    }

    validatePhoneNumber(phoneNo, stateId) {
        const phoneNoRegEx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (phoneNo.match(phoneNoRegEx)) {
            const prevError = this.state.error;
            prevError[stateId].isError = false;
            this.setState({
                error: prevError
            });
            return true;
        }   
        else {
            const prevError = this.state.error;
            prevError[stateId].isError = true;
            this.setState({
                error: prevError
            });
            return false;
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className={classes.root} container justify="center" alignItems="center">
                    <Paper className={classes.root} elevation={2}>
                        <form onSubmit={this.onSubmitHandler}>
                            <Grid container item justify="center" alignItems="center" direction="column">
                                <Grid item>
                                    <Typography gutterBottom variant="display3">FORM I-3 PART 1</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="headline">Intern's Daily Diary</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="subheading">Intern's Information</Typography>
                                </Grid>
                                <Grid container item direction="column" spacing={40} justify="center">
                                    <Grid container item >
                                        <Typography gutterBottom>
                                            <Grid item container direction="row" justify="space-around">
                                                <Grid item>
                                                    <TextField value={this.state.data.name} id='name' onChange={this.handleOnChange} required label="Intern's Name" />
                                                </Grid>
                                                <Grid item>
                                                    <TextField value={this.state.data.studentId} id='studentId' onChange={this.handleOnChange} required label="Student ID" />
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <TextField value={this.state.data.address} id='address' onChange={this.handleOnChange} required multiline fullWidth label="Intern's Private Address" />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    value={this.state.data.phoneNumber}
                                                    id='phoneNumber'
                                                    onChange={this.handleOnChange}
                                                    error={this.state.error.phoneNumber.isError}
                                                    helperText={this.state.error.phoneNumber.isError ? this.state.error.phoneNumber.message : ''}
                                                    required
                                                    label="Contact Number"
                                                />
                                            </Grid>
                                            <Grid item >
                                                <TextField
                                                    value={this.state.data.email}
                                                    id='email'
                                                    onChange={this.handleOnChange}
                                                    error={this.state.error.email.isError}
                                                    helperText={this.state.error.email.isError ? this.state.error.email.message : ''}
                                                    required multiline
                                                    label="Email Address"
                                                />
                                            </Grid>
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <br />
                                    </Grid>
                                    <Grid container spacing={40} item direction="column">
                                        <Grid item>
                                            <Typography gutterBottom variant="subheading">Internship Information</Typography>
                                        </Grid>
                                        <Grid item container direction="row" justify="space-around">
                                            <Grid item>
                                                <TextField value={this.state.data.title} id='title' onChange={this.handleOnChange} required label="Internship Title" />
                                            </Grid>
                                            <Grid item>
                                                <TextField value={this.state.data.specialization} id='specialization' onChange={this.handleOnChange} required label="Specialization" />
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row" justify="space-around">
                                            <Grid item>
                                                <TextField value={this.state.data.from} id='from' onChange={this.handleOnChange} required type="date" helperText="Internship Period From" />
                                            </Grid>
                                            <Grid item>
                                                <TextField value={this.state.data.to} id='to' onChange={this.handleOnChange} required type="date" helperText="Period To" />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Typography gutterBottom>
                                            <Button varient="contained" type="submit" className={classes.subButton}>SUBMIT</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

FormI3_part1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormI3_part1);
