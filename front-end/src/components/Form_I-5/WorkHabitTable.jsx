import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TextField from './UserTextField';

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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
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

let id = 0;
function createData(name, performance, comments) {
  id += 1;
  return { id, name, performance, comments };
}

const rows = [
  createData('Effective in organizing work'),
  createData('Takes the initiative'),
  createData('Flexible to non-routine work'),
  createData('Active and alert'),
  createData('Attitude toward organization'),
  createData('Team player'),
  createData('Deligence and perseverance'),
  createData('Accepts responsiblity'),
];

class WorkHabitTable extends React.Component{

  HandleCheckBox(e, data) {
      console.log(data);
      e.preventDefault();
  }

  validateField() {
    if(true) {
      this.props.clickNext();
    }
  }
  
  handleBack() {
    if(true) {
      this.props.clickBack();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell >Category</CustomTableCell>
              <CustomTableCell >Performance</CustomTableCell>
              <CustomTableCell >Comments, Examples, Observations</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell ></CustomTableCell>
                  <CustomTableCell ><TextField /></CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <br />
        <div>
          <Button
            disabled={this.props.actiStep === 0}
            onClick={this.handleBack.bind(this)}
            className={classes.backButton}
          >
            Back
          </Button>
          <label></label>&nbsp;<label> </label>
          <Button variant="contained" color="primary" onClick={this.validateField.bind(this)}>
                      Next
          </Button>
          <br />
          <p> </p>
        </ div>
      </Paper>
    );
  }
}

WorkHabitTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkHabitTable);
