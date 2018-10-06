import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Auth/LoginForm';
import StudentDashboard from './containers/student-dashboard';
import SupervisorLogin from './components/Auth/SupervisorLogin';
import firebase from 'firebase/app';
import {DB_CONFIG} from './config';
const fireApp = firebase.initializeApp(DB_CONFIG);
export const app = fireApp; 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props)=><Login {...props} fireApp={fireApp}/>}/>
          <Route exact path='/supervisor' render={(props)=><SupervisorLogin {...props} fireApp={fireApp}/>}/>
          <Route name="student" path='/student/:email'  render={(props)=><StudentDashboard {...props} fireApp={fireApp}/>}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
