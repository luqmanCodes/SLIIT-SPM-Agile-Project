import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserTextField from './UserTextField';
import SelectPerformance from './SelectPerfomance'; 
import RadioCustom from './RadioCustom';

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
    minWidth: 650,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      hover: true,
      
    },
  },
});

let id = 0;
function createData(name, performance, comments) {
  id += 1;
  return { id, name, performance, comments };
}

function HandleRadio(e) {
    console.log(event.target.value);
    e.preventDefault();
}

function HandleTextfield(e) {
  e.
  e.preventDefault();
}

const rows = [
    createData('Volume of work'),
    createData('Quality of Work'),
    createData('Analytical ability'),
    createData('Ability to resolve problems'),
    createData('Accuracy and thoroughness'),
    createData('Ability to work under pressure'),
    createData('Oral communications'),
    createData('Written communications'),
    createData('Original and critical thinking'),
    createData('Ability to learn'),
  ];

const data = [];

function CustomizedTable(props) {
  const { classes } = props;

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

            let name;
            let performance;
            let comment; 

            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell ><RadioCustom onChange={HandleRadio.bind(this)}/></CustomTableCell>
                <CustomTableCell ><UserTextField onChange={HandleTextfield.bind(this)} value={comment}/></CustomTableCell>
              </TableRow>
            );
 
            data.push(createData(name, performance, comment));

          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
