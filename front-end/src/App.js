import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
//import firebase from 'firebase';
//import {DB_CONFIG} from './config';
import CompanyRegistration from './containers/CompanyRegistration';
// import Test from './containers/Test';

class App extends Component {
 /* constructor(props){
    super(props);
    this.app=firebase.initializeApp(DB_CONFIG);
  }*/
  render() {
    return (
      <div className="App">
        <div><CompanyRegistration/></div>
      </div>
    );
  }
}

export default App;
