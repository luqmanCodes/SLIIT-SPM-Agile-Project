import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dash from './dashboard.jsx';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/*
this should be import in .css file

img {
  height:325px;
  width:300px;
}

side {
  width: 310px;
}

name {
  font-size: 50px;
}
*/


class App extends Component {
  render() {
    return (
        <div>
          <Card class="side" style={{margin:8}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODALYDYo2dqN0DG_kPNi2X7EAy1K8SpRRZQWkNv9alC62IHggOw" />
            <br/><br/>
            <Typography variant="display1" style={{alignItems:"center"}} gutterBottom>
              Name
               <Typography variant="subheading" gutterBottom>
                  IT No
                </Typography> 
            </Typography>
            <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          style={{ width: "300px" }}
        />
            <br/><br/>
            <Button variant="contained" color="primary" size="large"  style={{ width: "300px",height:"50px" }} >
            Start Internship
            </Button>  
              
            
         
          </Card>
        </div>
      );
    }
}

export default App;
