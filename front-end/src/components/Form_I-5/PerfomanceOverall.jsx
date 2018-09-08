import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { green, red, lightBlue, lightGreen, blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const styles = {
  root_1: {
    '&$checked': {
      color: green[500],
    },
  },
  root_2: {
    '&$checked': {
      color: lightGreen[500],
    },
  },
  root_3: {
    '&$checked': {
      color: blue[500],
    },
  },
  root_4: {
    '&$checked': {
      color: lightBlue[500],
    },
  },
  root_5: {
    '&$checked': {
      color: red[500],
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
  state = {
    selectedValue: '',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="Outstanging"
          aria-label="A"
          classes={{
            root: classes.root_1,
            checked: classes.checked,
          }}
        />
        <label>
        Outstanging
        </label>
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
        <label>
        Very Good
        </label>
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
        <label>
        Good
        </label>
        <Radio
          checked={this.state.selectedValue === 'd'}
          onChange={this.handleChange}
          value="d"
          name="radio-button-demo"
          aria-label="D"
          classes={{
            root: classes.root_4,
            checked: classes.checked,
          }}
        />
        <label>
        Marginal
        </label>
        <Radio
          checked={this.state.selectedValue === 'e'}
          onChange={this.handleChange}
          value="e"
          name="radio-button-demo"
          aria-label="E"
          classes={{
            root: classes.root_5,
            checked: classes.checked,
          }}
        />
        <label>
        Unsatisfactory
        </label>
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
