import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {

  constructor(props){
    super(props);
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails(){
    return (
      this.state = {
        studentId: null,
        studentName: null,
        empName: null,
        supName: null,
      }
    );
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  //   console.log(event.target.value);
  // };

  handleChange(e) {
    //[e.target.id] : e.target.value
    // console.log([e.target.id] + '  ' + e.target.value);

    // switch([e.target.id]) {
    //   case studentId  :
    //     return (
    //       console.log( 'id')
    //     );
    //   case studentName:
    //     return (
    //       console.log( 'name')
    //     );
    //   case employeeName:
    //     return (
    //       console.log( e.target.value)
    //     );
    //   case supervisorName:
    //     return (
    //       console.log( e.target.value)
    //     );
    // }

    if([e.target.id] == 'studentId'){
      // this.setState(
      //   {
      //     studentId : e.target.value,
      //   }
      // );
    } else if([e.target.id] == 'studentName') {
      // this.setState(
      //   {
      //     studentName : e.target.value,
      //   }
      // );
    } else if([e.target.id] == 'employeeName') {
      // this.setState(
      //   {
      //     empName : e.target.value,
      //   }
      // );
    } else if([e.target.id] == 'supervisorName') {
      // this.setState(
      //   {
      //     supName : e.target.value,
      //   }
      // );
      // console.log(this.getState());
    }
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="studentId"
          label="Student ID"
          className={classes.textField}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          required
          id="studentName"
          label="Student Name"
          className={classes.textField}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          required
          id="employeeName"
          label="Employee Name"
          className={classes.textField}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          required
          id="supervisorName"
          label="Supervisor Name"
          className={classes.textField}
          onChange={this.handleChange}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
