import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import StepperCustom from './StepperCustom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:'5%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FormI5 extends React.Component {
  
  constructor(props){
      super(props);

      this.state={
        studentId: null,
        studentName:  null,
        employeeName: null,
        supervisorName: null,

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

        stepperCompleted:0,
      }
    }

    showState(){
      console.log(this.state);
    }
    
    render() {
      const { classes } = this.props;
    
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <StepperCustom />
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    }
  }

  FormI5.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  //   render() {
  //   return (
  //     <div>
  //       {/* <FormPart1 />
  //       <br />
  //       <FormPart2 />
  //       <br />
  //       <PerformanceTable />
  //       <br />
  //       <WorkHabitTable />
  //       <br />
  //       <TextAreaCustom id={'longinput1'} label={'List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)'}/>
  //       <br />
  //       <TextAreaCustom id={'longinput2'} label={'List personal characteristics that will help the student in his/her professional development'}/>
  //       <br />
  //       <TextAreaCustom id={'longinput3'} label={'How effective has the Internship Program been in meeting the needs of your organization?'}/>
  //       <br />
  //       <TextAreaCustom id={'longinput4'} label={'Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.'}/>
  //       <br />
  //       <TextAreaCustom id={'longinput5'} label={'Please comment on the appropriateness of the student\'s academic training as it related to a position in your organization.'}/>
  //       <br />
  //       <TextAreaCustom id={'longinput6'} label={'Any other comments about the student or on the Faculty Advisor:'}/>
  //       <br />
  //       <PerformanceOverall /> */}

  //       <StepperCustom />

  //     </div>
  //   );
  // }

export default withStyles(styles)(FormI5);