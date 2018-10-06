import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Registration.css';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    root: {
        width: '50%',
        maxWidth: 500,
    },
    root2: {
       height:650,
       width:1100,
       marginLeft:20,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    subButton: {
        color:'white',
        background:'green',
        marginLeft:10,
    },
    alignButton: {
      marginLeft:10,
    }
});


class CompanyRegistration extends Component {
    
    constructor(props){
      super(props);
      this.state = {
        name: '',
        address: '',
        email: '',
        nic:'',
        dob:'',
        mobileNo:'',
        studentNo:'',
        degreeCompleted:'',
        cgpa:'',
        companyName:'',
        companyAddress:'',
        internDuration:'',
        year:'',
        semester:'',
        register:{
          name:'',
          email:'',
          address:'',
          nic:'',
          dob:'',
          mobilePhone:'',
          stdId:'',
          year:'',
          semester:'',
          cgpa:'',
          company:{
            companyName:'',
            companyAddress:'',
          },
          internDuration:'',

        },
      };
    }
      
    componentWillMount() {
      let prevReg = this.state.register;
      prevReg.email = localStorage.getItem("loginEmail");
      prevReg.stdId = localStorage.getItem("loginItNo");
      prevReg.name = localStorage.getItem("loginName");
      this.setState({register : prevReg});
      this.setState({email:prevReg.email,studentNo:prevReg.stdId,name:prevReg.name});
    }
      handleChange = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.id]: event.target.value,
        });
      };

      handleClear = event => {
        let prevState = this.state;
          for(let key in prevState) {
            prevState[key] = '';
            this.setState({prevState});
            this.setState({name:''});
      }}  
      

      SubmitForm = (e) => {
        e.preventDefault();
         this.setState({register:{        
              name:this.state.name,
              address:this.state.address,
              email:this.state.email,
              nic:this.state.nic,
              dob:this.state.dob,
              mobilePhone:this.state.mobileNo,
              stdId:this.state.studentNo,
              year:this.state.year,
              semester:this.state.semester,
              cgpa:this.state.cGPA,
              status:"STARTED",
              company:{
                companyName:this.state.companyName,
                companyAddress:this.state.companyAddress,
              },
              internDuration:this.state.internDuration,
         }},()=>{
             this.props.fireApp.database().ref(`/students/${this.state.studentNo}`).set(this.state.register).then(snap => {
               console.log("okay")
             }).catch(err => {
               console.log(err + "dsa");
             })
         });
      }

  render() {
    const { classes } = this.props;
    return (
        <div>
        <br/>
        
        <Paper className={classes.root2}>
        <form className="container"  onSubmit={this.SubmitForm}>
        <br/>
        <Grid item md>
                <div className="root" >
                     <Typography variant="display1" gutterBottom>
                          Company Registration
                     </Typography>
                </div>
        </Grid> 
        <div className="tab">   
        <table >
            <tbody>           
            <tr>
            <br/>
            <div >
                <Typography variant="title" gutterBottom>
                    Student Details
                </Typography>
            </div>
            </tr>
                <tr>
                  <td >
                   <div >
                    <TextField
                      id="studentNo"
                      label="StudentNo"
                      className="textField"
                      value={this.state.register.stdId}
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </div>
                  </td>
                  <td >
                    <div className="Text">
                     <TextField
                      id="name"
                      label="Name"
                      className="textField"
                      value={this.state.register.name}
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </div>
                
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="email"
                      label="email"
                      className="textField"
                      value={this.state.register.email}
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />                   
                    </div>
                  </td>
                
                </tr>
 
               <tr >
                  <td>
                    <TextField
                      id="dob"
                      type="date"
                      required 
                      helperText="DOB"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="mobileNo"
                      required label="MobileNo"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="nic"
                      required label="NICNo"                     
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                <tr >
                  <td>
                   <TextField
                      id="address"
                      required label="Address"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  
                  </td>
                  <td>
                    <div className="Text"> 
                        <br/>
                    <div>
                      <TextField
                        id="year"
                        type="number"
                        required label="Year Completed"
                        className="textField"
                        onChange={this.handleChange}
                        margin="normal"
                        />
                    </div>
                    <div>
                       <TextField
                        id="semester"
                        type="number"
                        required label="Semester Completed"
                        className="textField"
                        onChange={this.handleChange}
                        margin="normal"
                        />
                    </div>             
                       
                     
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="cGPA"
                      type="number"
                      required label="CGPA"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                <br/>
                <tr>
                    <td> <div >
                      <Typography variant="title">
                        Company Details
                      </Typography>
                    </div></td>
                    <td></td>
                   
                </tr>
                <tr >
                  <td>
                    <TextField
                      id="companyName"
                      required label="Company Name"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="companyAddress"
                      required label="Company Address"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="internDuration"
                      required label="Epected Duration"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                
            </tbody>
        </table>
        </div>
        <br/>
        <Grid container spacing={0} justify='flex-end'>
            <Grid item md={4}>
              
            </Grid>   
            <Grid item md={4}>
             
            </Grid>   
            <Grid item md={4}>
               <Button variant='contained' type='submit' className={classes.subButton} size='large'  >Register</Button>
               <Button variant='contained' className={classes.subButton} size='large'>Clear</Button>  
            </Grid>         
        </Grid>        
      </form>
      </Paper>
      </div>
    );
  }
}
CompanyRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles (styles)(CompanyRegistration);