import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

/*
    author : Luqman
*/
//CSS styles
const styles = theme => ({
    root: {
        height: '600px',
        marginTop: '30px'
    },
    container: {
        marginTop: '5%'
    },
    subButton: {
        color: 'white',
        background: 'green',
        marginTop: '30px'
    },
    fullTextField: {
        width: 440
    }
});
// Jsx class which extends React.Component
class FormI1Student extends Component {

    constructor(props) {
        super(props);
       // this.db = this.props.app.database().ref().child('students');
        this.state = {

            data: {
                stdId: 'IT16154254',
                name: 'A.H Luqman',
                address: 'No 240/1, Dodangolla Akurana',
                homePhone: '0812304613',
                mobilePhone: '0768976540',
                email: 'm.luqman077@gmail.com',
                semester: '2',
                year: '2',
                cgpa: '2',
            },
            error: {
                homePhone: {
                    isError: false,
                    message: 'Invalid Phone Number'
                }
            }
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    componentDidMount() {
       /* this.db.once('value').then( snap => {
            console.log(snap.val());
        })*/
    }
    //handler to attend all changes that happen to the form
    handleOnChange(e) {
        let prevError = this.state.error;
        if (prevError[e.target.id] != null)
            prevError[e.target.id].isError = false;

        let prevData = this.state.data;
        prevData[e.target.id] = e.target.value;
        this.setState({
            data : prevData,
            error: prevError
        });
        e.preventDefault();
    }
    onSubmitHandler(e) {
        e.preventDefault();
       // this.db.push().set(this.state.data);
    }
    phonenumber(inputtxt) {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if ((inputtxt.match(phoneno))) {
            return true;
        }
        else {
            const prevError = this.state.error;
            prevError.homePhone.isError = true;
            this.setState({
                error: prevError
            })
            return false;
        }
    }
    //render method built using react material ui. Grid layout is used
    render() {
        const { classes } = this.props;
        return (
            <div  >
                <Grid container alignItems="center" justify="center">
                    <Paper className={classes.root} elevation={4}>
                        <form onSubmit={this.onSubmitHandler}>
                            <Grid className={classes.container} direction='column' container alignItems="center" justify="center" spacing={16}>
                                <Grid item md>
                                    <Typography variant='headline'>Form I-1</Typography>
                                    <Typography variant='subheading'>Internship Acceptance Form</Typography>
                                </Grid>
                                <Grid direction='row' alignItems="center" justify="center" container item md spacing={40}>
                                    <Grid item>
                                        <TextField value={this.state.data.stdId} id='stdId' onChange={this.handleOnChange} label='Student ID' required />
                                    </Grid>
                                    <Grid item>
                                        <TextField value={this.state.data.name} id='name' onChange={this.handleOnChange} label='Student Name' required />
                                    </Grid>
                                </Grid>
                                <Grid item md>
                                    <TextField className={classes.fullTextField} value={this.state.data.address} id='address' fullWidth onChange={this.handleOnChange} label='Address' required />
                                </Grid>
                                <Grid direction='row' alignItems="center" justify="center" container item md spacing={40}>
                                    <Grid item >
                                        <TextField
                                            value={this.state.data.homePhone}
                                            id='homePhone'
                                            name='homePhone'
                                            onChange={this.handleOnChange}
                                            label='Home Phone'
                                            type='tel'
                                            required
                                            error={this.state.error.homePhone.isError}
                                            helperText={this.state.error.homePhone.isError ? this.state.error.homePhone.message : ''}
                                        />
                                    </Grid>
                                    <Grid item >
                                        <TextField value={this.state.data.mobilePhone} id='mobilePhone' onChange={this.handleOnChange} label='Mobile Phone' type='tel' required />
                                    </Grid>
                                </Grid>
                                <Grid item md>
                                    <TextField
                                        value={this.state.data.email}
                                        id='email'
                                        onChange={this.handleOnChange}
                                        label='E-mail'
                                        helperText='Use Comma(,) to seperate multiple e-mail addresses'
                                        required
                                        multiline
                                        className={classes.fullTextField}
                                    />
                                </Grid>
                                <Grid container item direction='row' spacing={8} md>
                                    <Grid item md>
                                        <TextField value={this.state.data.semester} id='semester' onChange={this.handleOnChange} label='Semester' type='number' min="1" max="2" required />
                                    </Grid>
                                    <Grid item md>
                                        <TextField value={this.state.data.year} id='year' onChange={this.handleOnChange} label='Year' type='number' min="1" max="4" required />
                                    </Grid>
                                    <Grid item md>
                                        <TextField value={this.state.data.cgpa} id='cgpa' onChange={this.handleOnChange} label='CGPA' type='number' required />
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid item md>
                                    <Button variant='contained' className={classes.subButton} type='submit'>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </div>
        );
    }
}
FormI1Student.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(FormI1Student);