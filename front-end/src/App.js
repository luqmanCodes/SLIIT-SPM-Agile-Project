import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Auth/LoginForm';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
const fireApp = firebase.initializeApp(DB_CONFIG);
export const app = fireApp; 

class App extends Component {
 /* constructor(props){
    super(props);
    this.app=firebase.initializeApp(DB_CONFIG);
  }*/
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
