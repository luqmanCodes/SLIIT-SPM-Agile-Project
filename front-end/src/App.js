import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import FormI5 from './components/Form_I-5/FormI5';
import Menu from './components/MainUI/Menu';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
import FormI1 from './containers/form.I-1.student';
class App extends Component {

  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
  } 
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Menu }/>
          <Route exact path='/student' component={FormI1}/>
          <Route exact path='/supervisor' component={Menu}/>
          <Route exact path='/formI5' component={FormI5}/>
        </div>
      </Router>
    );
  }
}

export default App;
