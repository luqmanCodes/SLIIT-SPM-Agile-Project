import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextAreaCustom from './TextAreaCustom';
import Button from '@material-ui/core/Button';

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

class OtherDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      longinput1: null,
      longinput2: null,
      longinput3: null,
      longinput4: null,
      longinput5: null,
      longinput6: null,
      data: null,
    }
  }

  handleInput(data){
    // console.log(data);
    this.setState({
      data: data,
    });
  }

  componentWillUnmount() {
    // console.log(this.state);
    // this.props.getAllval(this.state);
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
      <div>
        <div>
        <TextAreaCustom id={'longinput1'} getData={this.handleInput.bind(this)} label={'List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)'}/>
        <br />
        <TextAreaCustom id={'longinput2'} getData={this.handleInput.bind(this)} label={'List personal characteristics that will help the student in his/her professional development'}/>
        <br />
        <TextAreaCustom id={'longinput3'} getData={this.handleInput.bind(this)} label={'How effective has the Internship Program been in meeting the needs of your organization?'}/>
        <br />
        <TextAreaCustom id={'longinput4'} getData={this.handleInput.bind(this)} label={'Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.'}/>
        <br />
        <TextAreaCustom id={'longinput5'} getData={this.handleInput.bind(this)} label={'Please comment on the appropriateness of the student\'s academic training as it related to a position in your organization.'}/>
        <br />
        <TextAreaCustom id={'longinput6'} getData={this.handleInput.bind(this)} label={'Any other comments about the student or on the Faculty Advisor:'}/>
        <br />
        </div>
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
        </div>  
      </div>
    );
  }
}

OtherDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OtherDetails);