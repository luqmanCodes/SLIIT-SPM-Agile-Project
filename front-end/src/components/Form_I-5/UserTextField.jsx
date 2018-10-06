import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      id:this.props.perfId
    }; 
  }
  
  handleChange(e) {
    e.preventDefault(e);
    console.log([e.target.id] + '  ' + e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
    
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id={this.props.prefId}
          label=""
          value={this.state.comment}
          className={classes.textField}
          onChange={this.handleChange}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
