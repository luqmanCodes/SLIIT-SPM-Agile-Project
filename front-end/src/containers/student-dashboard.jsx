import React, { Component } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormI1 from "./form.I-1.student";
import { Route, Switch } from 'react-router-dom';
import CompanyRegistration from './CompanyRegistration';


function waitingForSubmission() {
    return (
        <div className={{ marginLeft: "50%", marginTop: "50%" }}>
            <h1>Waiting for Approval</h1>
        </div>
    )
}
class StudentDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("loginName"),
            itNo: localStorage.getItem("loginItNo"),
            status: '',
            isFirst: false
        }
        this.statusdb = this.db = this.props.fireApp.database().ref(`students/${this.state.itNo}/status`);
        this.db = this.props.fireApp.database().ref("students/" + localStorage.getItem("loginItNo"));
        this.studentDb = this.props.fireApp.database().ref().child("students");
        this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
        this.db.on("child_changed", snap => {
            console.log(snap.val());
            switch (snap.val()["status"]) {
                case "STARTED":
                    this.props.history.replace(`student/${localStorage.getItem("loginEmail")}/formI1`)
                    break;
                case "FORMI1SUBMITTED":
                    this.props.history.replace(`student/${localStorage.getItem("loginEmail")}/waiting`)
                    break;
                default:
            }
        });
    }
    componentDidMount() {

        this.statusdb.once("value").then(snap => {
            if (snap.val() == null) {
                this.setState({ isFirst: true });
            }
            else {
                switch (snap.val()) {
                    case "STARTED":
                        this.props.history.push(`student/${localStorage.getItem("loginEmail")}/formI1`)
                        break;
                    case "FORMI1SUBMITTED":
                        this.props.history.push(`student/${localStorage.getItem("loginEmail")}/waiting`)
                        break
                    default:
                }
            }
        });
    }
    handleOnButtonClick(e) {
        this.props.history.push("/student/student/" + localStorage.getItem("loginEmail") + "/companyRegistration");
    }
    render() {
        return (
            <div className='rowC'>
                <div >
                    <Card className="side" style={{ margin: 8 }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODALYDYo2dqN0DG_kPNi2X7EAy1K8SpRRZQWkNv9alC62IHggOw" alt="veiw" />
                        <br /><br />
                        <Typography variant="display1" style={{ margin: 10, alignItems: "center" }} gutterBottom>
                            {this.state.name}
                            <Typography variant="subheading" gutterBottom>
                                {this.state.itNo}
                            </Typography>
                        </Typography>
                        <br /><br />
                        {(this.state.isFirst) ? <Button variant="contained" onClick={this.handleOnButtonClick} color="primary" size="large" style={{ width: "300px", height: "50px" }} >
                            Start Internship
                        </Button> : ""}
                    </Card>
                </div>
                <div className='divRight' >
                    <Switch>
                        <div>
                            <Route exact path="/student/student/:email/formI1" render={(props) => <FormI1 fireApp={this.props.fireApp} />} />
                            <Route exact path="/student/student/:email/companyRegistration" render={(props) => <CompanyRegistration fireApp={this.props.fireApp} />} />
                            <Route exact path="/student/student/:email/waiting" component={waitingForSubmission} />
                        </div>
                    </Switch>
                </div>

            </div>

        );
    }
}

export default StudentDashboard;
