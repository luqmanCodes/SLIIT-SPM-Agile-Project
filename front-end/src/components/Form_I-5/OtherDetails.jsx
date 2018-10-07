import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextAreaCustom from './TextAreaCustom';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import { connect } from 'react-redux';
import { fetchData, submitOtherDetails } from '../../actions/form5OtherDetails-actions';
import { compose } from 'redux';

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

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    // // console.log(data);
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log([e.target.id]+" "+e.target.value);
  }

  validateField() {

    let check = false;
    // let data = this.
    // this.state.forEach(x => {
    //   if(x === null){
    //     check = false;
    //   } else {
    //     check = true;
    //   }
    // });

    console.log(this.state);
    if(check) {
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
        <br />
        <TextField id={'longinput1'} fullWidth={true} onChange={this.handleInput} label={'List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)'}/>
        <br /><br /><br />

        <TextField id={'longinput2'} fullWidth={true} onChange={this.handleInput} label={'List personal characteristics that will help the student in his/her professional development'}/>
        <br /><br /><br />

        <TextField id={'longinput3'} fullWidth={true} onChange={this.handleInput} label={'How effective has the Internship Program been in meeting the needs of your organization?'}/>
        <br /><br /><br />

        <TextField id={'longinput4'} fullWidth={true} onChange={this.handleInput} label={'Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.'}/>
        <br /><br /><br />

        <TextField id={'longinput5'} fullWidth={true} onChange={this.handleInput} label={'Please comment on the appropriateness of the student\'s academic training as it related to a position in your organization.'}/>
        <br /><br /><br />

        <TextField id={'longinput6'} fullWidth={true} onChange={this.handleInput} label={'Any other comments about the student or on the Faculty Advisor:'}/>
        <br /><br /><br />

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

const mapStateToProps = state => ({

})

// export default withStyles(styles)(OtherDetails);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, {submitOtherDetails}),
)(OtherDetails);