import React, { Component } from 'react';
import './App.css';
import FormI1Student from './containers/form.I-1.student';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
class App extends Component {

  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
  } 
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
