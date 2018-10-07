import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';

import firebase from 'firebase';
import {DB_CONFIG} from './config';
import FormI5 from './components/Form_I-5/FormI5';
import Menu from './components/MainUI/Menu';

import SupervisorDashboard from './containers/SupervisorDashboard'
import FormI3_part1 from './containers/FormI3_part1';
import FormI3_part2 from './containers/FormI3_part2';
import FormI3_part3 from './containers/FormI3_part3';
import formI1 from './containers/form.I-1.student';

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

          <Route exact path='/supervisorDashboard' component={SupervisorDashboard}/>
          <Route exact path='/FormI3_part1' component={FormI3_part1}/>
          <Route exact path='/FormI3_part2' component={FormI3_part2}/>
          <Route exact path='/FormI3_part3' component={FormI3_part3}/>
          <Route exact path='/FormI1' component={formI1}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;