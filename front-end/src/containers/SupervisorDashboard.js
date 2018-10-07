import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
//import { mailFolderListItems } from './tileData';
import SupervisorDashboardList from './SupervisorDasboardList';
import Button from '@material-ui/core/Button';
import '../Supervisor.css';
import firebase from 'firebase';
//import tileData from './tileData';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import formi5 from '../components/Form_I-5/FormI5';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  toolbar: theme.mixins.toolbar,
});

class SupervisorDashboard extends Component {
    
  constructor(props){
    super(props);
    
    this.db = firebase.database().ref('company');
    this.state = {
   
         login:false,
         company:''
    };
    
  }
  
  static defaultProps = {

    Students :['Stu1', 'Stu2','Stu3','Stu4']
    }  
  
    handleChange = ()=> {
     
      if(this.login.state===false)
      {
        this.setState({
          login:true
        });
      }
      else
      {
        
      }
     
    };

    handleClear = event => {
      let prevState = this.state;
        for(let key in prevState) {
          prevState[key] = '';
          this.setState({prevState});
          this.setState({name:''});
    }}  
    
    componentDidMount() {
     /* this.db.orderByChild("name").equalTo(localStorage.getItem("email")).limitToFirst(1).once("value").then(snap => {
          let retObj = snap.val()[localStorage.getItem("name")];
          this.setState({data:{...retObj}})
      }).catch(err => {
          console.log(err);
      })   */
      this.db.orderByChild("name").equalTo("99X").once("value").then(snapshot => {
      
          console.log(snapshot.key + " was " + snapshot.val().name );
          let cname=snapshot.val().name;
          console.log(cname);
          this.setState({company:cname});
          //this.setState({company:"works"});
        
      });
      /*this.db.orderByChild("name").equalTo("99X").then(snapshot => {
        console.log(snapshot.key + " was " + snapshot.val().name );
        //let cname=snapshot.val().name;
        //console.log(cname);
        this.setState({company:snapshot.val().name});
      }).catch(err => {
        console.log(err);
      });*/
    }

handleClick(e){
 e.preventDefault();
}

render() {
  const { classes } = this.props;
  return (
      <div className={classes.root}>
     
         <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
             <Typography variant="title" color="inherit" noWrap>
               Supervisor Dashboard
             </Typography>
             <div className="log">
             <Button variant="outlined" className={classes.button}>
                Log Out
             </Button>
             </div>
          </Toolbar>
         </AppBar>
         <Drawer
         variant="permanent"
         classes={{
            paper: classes.drawerPaper,
         }}
         >
        <div className={classes.toolbar} />
        <List><ListItem button onClick={this.handleClick}>     
                

             <ListItemText primary="IT16159518" />
              </ListItem></List>     
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{''}</Typography>
        </main>
    
      </div>
  );
}

}
SupervisorDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupervisorDashboard);