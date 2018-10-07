import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { fetchData, submitPart1 } from '../../actions/formI5Part1-actions';
import { compose } from 'redux';

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

class FormPart1 extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      studentId: '',
      studentName: '',
      employeeName: '',
      supervisorName: '',
      formPart2val: '',
    };
  }

  handleChange = () => event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    // console.log(event.target.id+' '+event.target.value);
  }

  componentWillMount() {
    this.props.fetchData();
  }

  componentWillUnmount() {
    this.props.setFormPart1Value(this.state);
  }

  validateField() {
    if(this.state.employeeName === '' || 
    this.state.supervisorName === '' || this.state.formPart2val === '') {
      alert('Please fill out the form');
    } else {
      let values = {
        employeeName: this.state.employeeName,
        supervisorName: this.state.supervisorName,
        formPart2val: this.state.formPart2val,
      }
      this.props.submitPart1(values);
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
      <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="studentId"
          label="Student ID"
          value={this.props.studentId}
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="studentName"
          label="Student Name"
          value={this.props.studentName}
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="employeeName"
          label="Employee Name"
          value={this.state.employeeName}
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        <TextField
          required
          id="supervisorName"
          label="Supervisor Name"
          value={this.state.supervisorName}
          className={classes.textField}
          onChange={this.handleChange()}
          margin="normal"
        />
        </div>
        <div>
          <TextField
            id='formPart2val'
            label="Describe the differences, if any, between student's initial
            contract and actual assignment which developed"
            value={this.state.formPart2val}
            onChange={this.handleChange()}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            helperText="50 Words"
            fullWidth
            margin="normal"
            />
        </div>
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
        </div>
      </form>
    );
  }
}

FormPart1.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  
};

const mapStateToProps = state => ({
  studentId: state.formPart1.studentId,
  studentName: state.formPart1.studentName
})

// export default connect(null, { fetchData }, withStyles(styles))(TextFields);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchData, submitPart1 }),
)(FormPart1);
