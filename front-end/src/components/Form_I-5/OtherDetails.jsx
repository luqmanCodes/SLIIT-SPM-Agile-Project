import React, { Component } from 'react';
import TextAreaCustom from './TextAreaCustom';

export default class OtherDetails extends Component {

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

  render() {
    // console.log(this.state);
    return (
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
      </div>
    );
  }
}