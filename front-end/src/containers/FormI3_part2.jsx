/**
 * @author D.Dev
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * 
 * CSS Styles 
 */
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


/**
 * Form I-1 part 1 the static part
 * It will be required only to be filled once
 */
class FormI3_part2 extends Component {
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
                            <Grid container item justify="center" alignItems="center" direction="column" direction="column" spacing={40}>
                                <Grid item>
                                    <Typography gutterBottom="true" variant="display3">FORM I-3 PART 2</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="headline">Intern's Daily Diary</Typography>
                                </Grid>

                                <Grid item>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <CustomTableCell>Trainning Party</CustomTableCell>
                                                <CustomTableCell>Training Party</CustomTableCell>
                                                <CustomTableCell>From</CustomTableCell>
                                                <CustomTableCell>To</CustomTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField multiline /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                                <CustomTableCell><TextField type="date" /></CustomTableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Grid>

                                <Grid item>
                                    <Table className={classes.table} >
                                        <TableHead>
                                            <TableRow>
                                                <CustomTableCell>
                                                SUMMARY OF THE KEY TASKS COMPLETED FOR THE MONTH OF AUGUST/2018
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell>
                                                    <TextField multiline
                                                        helperText="(Interns should maintain weekly entries at minimum in this area, providing the summary of the task and the task duration. Interns are also advised to maintain a blog where the intern can mention blog URL here.)"
                                                    />
                                                </CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell>
                                                    DETAILS AND NOTES OF WORK CARRIED OUT, PROBLEMS ENCOUNTERED AND HOW SOLVED ETC., SKETCHES AND DIMENSIONS TO BE GIVEN WHEREVER POSSIBLE
                                                </CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell>
                                                    <TextField multiline
                                                        helperText="(Interns should maintain weekly entries at minimum in this area, providing the summary of the task and the task duration. Interns are also advised to maintain a blog where the intern can mention blog URL here.)"
                                                    />
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <Checkbox
                                        value="checkedA"
                                    />
                                    I certify that above information is correct and genuine work of mine
                                    Note : The checkbox needs to be ticked by the Intern confirming authenticity of the information provided
                                </Grid>





                                <Grid item>
                                    <Typography gutterBottom>
                                        <Button varient="contained" type="submit" className={classes.subButton}>SUBMIT</Button>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </form>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

FormI3_part2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormI3_part2);
