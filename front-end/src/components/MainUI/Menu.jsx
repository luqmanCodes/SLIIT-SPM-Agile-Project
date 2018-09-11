import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin:'5%',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Menu extends React.Component{

HandleButton = e => {
    console.log(e.target.value);
    e.preventDefault();
}

render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="display2" gutterBottom>
              Dummy Login
            </Typography>
            <Typography variant="display1" gutterBottom>
              SPM Project 2018
            </Typography>
            <Typography variant="headline" gutterBottom>
              SE3080 2018 Scrum - Group 19
            </Typography>
            <Button variant="outlined" color="primary" className={classes.button} >
              Student
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Supervisor
            </Button>
            <br />
            <Button variant="outlined" className={classes.button}>
              Form I-3
            </Button>
            <Button variant="outlined" className={classes.button} href='/formI5'>
              Form I-5
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
