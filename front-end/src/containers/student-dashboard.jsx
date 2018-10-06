import React from 'react';
import FormI1 from "./form.I-1.student";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import CompanyRegistration from './CompanyRegistration';
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
                    <div>
                    <Route exact path="/student/:email/formI1" render={(props) => <FormI1 fireApp={this.props.fireApp}/>}/>
                    <Route exact path="/student/:email/companyRegistration" render={(props) => <CompanyRegistration fireApp={this.props.fireApp}/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}