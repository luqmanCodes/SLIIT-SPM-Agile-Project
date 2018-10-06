import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const styles = {
  root_1: {
    // color: blue[600],
    '&$checked': {
      color: blue[500],
    },
  },
  
  root_2: {
    // color: red[600],
    '&$checked': {
      color: red[500],
    },
  },

  root_3: {
    // color: green[600],
    '&$checked': {
      color: green[500],
    },
  },

  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class RadioButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      performanceId : this.props.perfId,
      selectedValue: '',
    };

  }
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
    this.props.onChange(event,this.state.performanceId);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root_3,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="a"
          classes={{
            root: classes.root_1,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
          classes={{
            root: classes.root_2,
            checked: classes.checked,
          }}
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
