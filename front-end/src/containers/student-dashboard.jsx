import React from 'react';
import FormI1 from "./form.I-1.student";
import { BrowserRouter as Router,Route } from 'react-router-dom';

export default class StudentDashboard extends React.Component {

    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
            <div>
                Common to all
            </div>
                <Router>
                    <Route exact path="/student/:email/formI1" render={(props) => <FormI1 fireApp={this.props.fireApp}/>}/>
                </Router>
            </div>
        )
    }
}