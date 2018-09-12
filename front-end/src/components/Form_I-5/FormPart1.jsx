import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {

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

    this.state = {
      studentId: null,
      studentName: null,
      employeeName: null,
      supervisorName: null,
    };
  }

  handleChange = () => event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    // console.log(event.target.id+' '+event.target.value);
    // this.props.setFormPart1Value(this.state);
  }

  componentWillUnmount() {
    this.props.setFormPart1Value(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" >
        <TextField
          required
          id="studentId"
          label="Student ID"
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="studentName"
          label="Student Name"
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="employeeName"
          label="Employee Name"
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="supervisorName"
          label="Supervisor Name"
          className={classes.textField}
          onChange={this.handleChange()}
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
