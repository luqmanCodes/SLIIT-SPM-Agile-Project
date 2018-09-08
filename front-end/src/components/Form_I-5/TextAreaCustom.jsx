import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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
  constructor(props){
    super(props);
  }
  
  state = {

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id={this.props.id}
          label={this.props.label}
          multiline
          InputLabelProps={{
            shrink: true,
          }}
          placeholder=""
          onChange={this.handleChange.bind(this)}
          helperText="150 Words"
          fullWidth
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
