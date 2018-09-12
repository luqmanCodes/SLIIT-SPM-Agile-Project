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

  constructor(props){
    super(props);
  
    this.state = {
      data: null,
    };
  }

  handleChange = () => event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  componentWillUnmount(){
    this.props.setFormPart2Value(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id='formPart2val'
          label="Describe the differences, if any, between student's initial
          contract and actual assignment which developed"
          onChange={this.handleChange()}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder=""
          helperText="50 Words"
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
