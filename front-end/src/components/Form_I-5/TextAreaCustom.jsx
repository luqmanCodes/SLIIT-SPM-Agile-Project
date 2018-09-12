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
    };
  
  }

  handleChange = () => event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    // console.log(event.target.id+' '+event.target.value);
    // return (event.target.id+' '+event.target.value);
  };

  component

  componentWillUnmount() {
    this.props.getData(this.state);
  }

  render() {
    const { classes } = this.props;
    // console.log(this.state);
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
          onChange={this.handleChange()}
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
