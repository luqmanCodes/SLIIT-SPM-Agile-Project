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

// import UserTextField from './UserTextField';
import RadioCustom from './RadioCustom';
import { TextField } from '@material-ui/core';

import { connect } from 'react-redux';
import { submitHabitData } from '../../actions/form5Habit-actions';
import { compose } from 'redux';

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
      width: '300px',
    },
  },
});

let id = 0;
function createData(name, habit, comments) {
  id += 1;
  return { id, name, habit, comments };
}


const rows = [
    createData('Effective in organizing work'),
    createData('Takes the initiative'),
    createData('Flexible to non-routine work'),
    createData('Active and alert'),
    createData('Attitude toward organization'),
    createData('Team player'),
    createData('Diligence and perseverance'),
    createData('Accepts responsibility'),
  ];

class WorkHabitTabel extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        habitTableData :[],
    };
  }
  HandleRadio = (e,perfID) => {
    
    let tempState = this.state.habitTableData;
    let status = false;
    if(this.state.habitTableData.length === 0) {
      let habitObj = {
        id : perfID,
        level : e.target.value,
        comment : null
      }
      tempState.push(habitObj);
    } else {
      tempState.map (x => {
          if(x.id === perfID) {
            x.level = e.target.value
            status = true;  
          }
          return x;
      });
      if(!status) {
        let habitObj = {
          id : perfID,
          level : e.target.value,
          comment : null
        }
        tempState.push(habitObj);
      }
    }
    this.setState({
      habitTableData:tempState
    });
    console.log(this.state);
    e.preventDefault();
  }

  validateField() {
    let check = false;
    this.state.habitTableData.forEach(x => {
      if(this.state.habitTableData.length !== 8 || x.level === null 
        || x.comment === null) {
        check = false;
      } else {
        check = true;
      }
    });

    if(check) {
      this.props.submitHabitData(this.state.habitTableData);
      this.props.clickNext();
    } else {
      alert('Fill the out the form');
    }
  }
  
  handleBack() {
    if(true) {
      this.props.clickBack();
    }
  }

  handleText = (e) => {
    // console.log([e.target.id]+ "  " + e.target.value);
    let status = false;
    if(this.state.habitTableData.length === 0) {
      let perObj = {
        id: e.target.id,
        comment: e.target.value,
        level: null,
      }
      this.state.habitTableData.push(perObj);
    } else {
      this.state.habitTableData.map (x => {
        if(x.id === e.target.id) {
          x.comment = e.target.value
          status = true;
        }
        return x;
      });
      if(!status){
        let perObj = {
          id : e.target.id,
          level: null,
          comment: e.target.value,
        }
        this.state.habitTableData.push(perObj);
      }
    }
    // console.log(this.state);
    e.preventDefault();
  }

  render () {
    const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >Category</CustomTableCell>
            <CustomTableCell >Work Habits</CustomTableCell>
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
                {/* <CustomTableCell ><RadioCustom perfId={row.name} onChange={() => { this.handle(row.name); } }/></CustomTableCell> */}
                <CustomTableCell ><RadioCustom perfId={row.name} onChange={this.HandleRadio }/></CustomTableCell>
                <CustomTableCell ><TextField fullWidth={true} id={row.name} onChange={this.handleText}/></CustomTableCell>
                {/* <CustomTableCell ></CustomTableCell> */}
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

WorkHabitTabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

})

// export default withStyles(styles)(WorkHabitTabel);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, {submitHabitData}),
)(WorkHabitTabel);