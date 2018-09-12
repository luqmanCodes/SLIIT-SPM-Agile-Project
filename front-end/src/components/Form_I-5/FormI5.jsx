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
    
    render() {
      const { classes } = this.props;
      
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <StepperCustom formValue={this.state}/>
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

export default withStyles(styles)(FormI5);