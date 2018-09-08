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
  state = {

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <p>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="describeDifferent"
            label="Describe the differences, if any, between student's initial
            contract and actual assignment which developed"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            helperText="50 Words"
            fullWidth
            margin="normal"
        />
      </form>
      </p>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
