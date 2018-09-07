import React, { Component } from 'react';
import FormPart1 from './FormPart1';
import FormPart2 from './FromPart2';
import PerformanceTable from './PerfomanceTable';
import WorkHabitTable from './WorkHabitTable';
import TextAreaCustom from './TextAreaCustom';
import PerformanceOverall from './PerfomanceOverall';

export default class FormI5 extends Component {
  
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
      }
    }

    HandleDetails(e) {
      // this.setState({this.state.studentId: studentId,
      //                studentName: studentName,
      //                employeeName: employeeName,
      //                supervisorName: supervisorName,
      // });
      console.log('clicked');
      e.preventDefault();
    }

    showState(){
      console.log(this.state);
    }
    
    render() {
    return (
      <div>
        <FormPart1 />
        <br />
        <FormPart2 />
        <br />
        <PerformanceTable />
        <br />
        <WorkHabitTable />
        <br />
        <TextAreaCustom label={'List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)'}/>
        <br />
        <TextAreaCustom label={'List personal characteristics that will help the student in his/her professional development'}/>
        <br />
        <TextAreaCustom label={'How effective has the Internship Program been in meeting the needs of your organization?'}/>
        <br />
        <TextAreaCustom label={'Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.'}/>
        <br />
        <TextAreaCustom label={'Please comment on the appropriateness of the student\'s academic training as it related to a position in your organization.'}/>
        <br />
        <TextAreaCustom label={'Any other comments about the student or on the Faculty Advisor:'}/>
        <br />
        <PerformanceOverall />
      </div>
    );
  }
}
