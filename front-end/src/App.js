import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './containers/Login';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
const fireApp = firebase.initializeApp(DB_CONFIG);
export const app = fireApp; 

class App extends Component {
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
