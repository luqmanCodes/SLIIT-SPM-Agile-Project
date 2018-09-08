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
                                    <Typography gutterBottom="true" variant="display3">FORM I-3 PART 3</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="headline">Intern's Daily Diary</Typography>
                                </Grid>

                                
                                <Grid item>
                                    <Table className={classes.table} >
                                        <TableHead>
                                            <TableRow>
                                                <CustomTableCell>
                                                REMARKS AND CERTIFICATION BY THE EXTERNAL SUPERVISOR FOR THE MONTH OF SEPTEMBER/2018
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell>
                                                    <TextField fullWidth={1000} label="Remarks" multiline required />
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <Checkbox
                                        value="checkedA"
                                    />
                                    I certify that I have reviewed and confirmed the work carried out by the Intern is as specified above
                                    Note : The checkbox needs to be ticked by the external supervisor 
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
