import React, { Component } from 'react';
import TextAreaCustom from './TextAreaCustom';

export default class OtherDetails extends Component {
  render() {
    return (
      <div>
        <TextAreaCustom id={'longinput1'} label={'List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)'}/>
        <br />
        <TextAreaCustom id={'longinput2'} label={'List personal characteristics that will help the student in his/her professional development'}/>
        <br />
        <TextAreaCustom id={'longinput3'} label={'How effective has the Internship Program been in meeting the needs of your organization?'}/>
        <br />
        <TextAreaCustom id={'longinput4'} label={'Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.'}/>
        <br />
        <TextAreaCustom id={'longinput5'} label={'Please comment on the appropriateness of the student\'s academic training as it related to a position in your organization.'}/>
        <br />
        <TextAreaCustom id={'longinput6'} label={'Any other comments about the student or on the Faculty Advisor:'}/>
      </div>
    );
  }
}