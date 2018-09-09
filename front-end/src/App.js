import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';

import FormI1Student from './containers/form.I-1.student';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
import FormI5 from './components/Form_I-5/FormI5';
import Menu from './components/MainUI/Menu';

class App extends Component {

  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
  } 
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Menu}/>
          <Route exact path='/student' component={Menu}/>
          <Route exact path='/supervisor' component={Menu}/>
          <Route exact path='/formI5' component={FormI5}/>
        </div>
      </Router>
    );
  }
}

export default App;
