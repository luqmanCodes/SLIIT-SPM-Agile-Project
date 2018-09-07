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
 * Form I-1 part 1 the static part
 * It will be required only to be filled once
 */
class FormI3_part1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className={classes.root} container justify="center" alignItems="center">
                    <Paper className={classes.root} elevation={2}>
                        <form>
                            <Grid container item justify="center" alignItems="center" direction="column">
                                <Grid item>
                                    <Typography gutterBottom="true" variant="display3">FORM I-3 PART 1</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="headline">Intern's Daily Diary</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="subheading">Intern's Information</Typography>
                                </Grid>
                                <Grid  direction="column" spacing={40} justify="center">
                                    <Grid container item >
                                        <Typography gutterBottom>
                                            <Grid item container direction="row" justify="space-around">
                                                <Grid item>
                                                    <TextField required label="Intern's Name" />
                                                </Grid>
                                                <Grid item>
                                                    <TextField required label="Student ID" />
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <TextField required multiline fullWidth={440} label="Intern's Private Address" />
                                            </Grid>
                                            <Grid  item justify="center">
                                                <TextField required label="Contact Number" />
                                            </Grid>
                                            <Grid item >
                                                <TextField required multiline type="email" label="Email Addresses" helperText="Use Comma(,) to seperate multiple e-mail addresses providing both company e-mail and personal email" />
                                            </Grid>
                                        </Typography>
                                    </Grid>
                                    
                                    <Grid item>
                                        <br/>
                                    </Grid>
                                    <Grid container spacing={40} item direction="column">
                                        <Grid item justify="center">
                                            <Typography gutterBottom variant="subheading">Internship Information</Typography>
                                        </Grid>
                                        <Grid item container direction="row" justify="space-around">
                                            <Grid item>
                                                <TextField required label="Internship Title" />
                                            </Grid>
                                            <Grid item>
                                                <TextField required label="Specialization" />
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row" justify="space-around">
                                            <Grid item>
                                                <TextField required type="date" helperText="Internship Period From"/>
                                            </Grid>
                                            <Grid item>
                                                <TextField required type="date" helperText="Period To" />
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
