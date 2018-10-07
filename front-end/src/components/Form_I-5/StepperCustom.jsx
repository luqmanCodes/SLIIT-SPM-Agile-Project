import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

//Importing user components
import FormPart1 from './FormPart1';
import PerformanceTable from './PerfomanceTable';
import WorkHabitTable from './WorkHabitTable';
import OtherDetails from './OtherDetails';
import PerformanceOverall from './PerformanceOverall';

import store from '../../store';

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeStep: 0,
  
      validation: true,

      studentId: null,
      studentName:  null,
      employeeName: null,
      supervisorName: null,

      longdata: null,

      performance: {
        performanceId: null,
        performanceLevel: null,
        comments: null
      },
      workHabit: {
        habitId: null,
        performanceLevel: null,
        comments: null,
      },

      listPositiveCharacteristics: null,
      listPersonalCharacteristics: null,
      effectiveOfInternship: null,
      suggestion: null,
      acadamicTrainingPosition: null,
      OtherComments: null,

      overAllPerformance : null,
      externalSupersorName: null,
      date: null,

    };
  }

  getSteps() {
    return ['Student, Employee and Supervisor Details and Initial Contract', 
      'Select Performances of the Student' , 'Select the Work Habits of the Student'
      , 'Other Details' , 'Select overall performance of the Student'];
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormPart1 setFormPart1Value={this.getValueFormPart1.bind(this)} className={{
            alignContent:'center'
          }} 
        clickNext={this.handleNext.bind(this)} 
        actiStep={this.state.activeStep} clickBack={this.handleBack.bind(this)}/>;
      case 1:
        return <PerformanceTable 
        clickNext={this.handleNext.bind(this)} 
        actiStep={this.state.activeStep} clickBack={this.handleBack.bind(this)}/>;
      case 2:
          return <WorkHabitTable 
          clickNext={this.handleNext.bind(this)} 
          actiStep={this.state.activeStep} clickBack={this.handleBack.bind(this)}/>;
      case 3:
          return <OtherDetails getAllval={this.getAllOtherDatails.bind(this)} 
          clickNext={this.handleNext.bind(this)} 
          actiStep={this.state.activeStep} clickBack={this.handleBack.bind(this)}/>;
      case 4:
          return <PerformanceOverall 
          clickNext={this.handleNext.bind(this)} 
          actiStep={this.state.activeStep} clickBack={this.handleBack.bind(this)}/>;
      default:
        return 'Uknown stepIndex';
    }
  }

  getValueFormPart1(data) {
    this.setState({
      studentId: data.studentId,
      studentName: data.studentName,
      employeeName: data.employeeName,
      supervisorName: data.supervisorName,
    });
  }

  getValueFormPart2(data) {
    this.setState({
      longdata: data.formPart2val,
    });
  }

  getAllOtherDatails(data) {
    console.log(data);
    this.setState({
      listPositiveCharacteristics: data.longinput1,
      listPersonalCharacteristics: data.longinput2,
      effectiveOfInternship: data.longinput3,
      suggestion: data.longinput4,
      acadamicTrainingPosition: data.longinput5,
      OtherComments: data.longinput6,
    });
  }

  checkEmpty() {
    if(this.state.studentId != null && this.state.studentName != null && 
      this.state.employeeName != null && this.state.supervisorName != null ){
        console.log('formpart1 pass');
    } 
    if(this.state.longdata != null) {
        console.log('formpart2 pass');
    }
    if(this.state.listPositiveCharacteristics != null && this.state.listPersonalCharacteristics != null &&
      this.state.effectiveOfInternship != null && this.state.suggestion != null &&
      this.state.acadamicTrainingPosition != null && this.state.OtherComments != null) {
        console.log('other details pass');
    }
  }

  handleNext = () => {

    // this.getAllOtherDatails();

    if(this.state.validation === true) {
        const { activeStep } = this.state;
        this.setState({
        activeStep: activeStep + 1,
      });
    }
    else if(this.state.validation === false) {
    }

  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {

    console.log(store.getState());

    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    console.log(this.state);
    this.checkEmpty();

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <div>All steps completed</div>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(activeStep)}</div>
              <br />
              {/* <div>
                <Button
                  disabled={activeStep === 0 || activeStep === 2}
                  onClick={this.handleBack}
                  className={classes.backButton}
                  hidden={activeStep === 0}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}
                disabled={activeStep === 2}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
