import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { green, red, lightBlue, lightGreen, blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { submitOverAll } from '../../actions/form5OverAll-actions';
import { fetchData } from '../../actions/formI5Part1-actions';
import { compose } from 'redux';
import store from '../../store';
import {app} from '../../App';

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

class PerformanceOverAll extends React.Component {
  state = {
    supervisor: null,
    date : null,
  };

  componentWillMount(){
    this.setState({
      date : new Date().toString,
    });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ selectedValue: event.target.value });
    
  };

  validateField() {

    let check = false;
    if(this.state.selectedValue === null) {
      check = false;
    } else {
      check = true;
    }
    if(check) {
      console.log(this.state);
      this.props.submitOverAll(this.state);
      this.props.clickNext();
      let prevStore = store.getState();
      app.database().ref(`students/${prevStore.formPart1.studentId}`).once("value").then(snap => {
          const prevFB = snap.val();
          app.database().ref(`students/${prevStore.formPart1.studentId}`).set({...prevFB,...prevStore});
      })
    } else {
      alert("Select overall performance");
    }
  }
  
  handleBack() {
    if(true) {
      this.props.clickBack();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Radio
            checked={this.state.selectedValue === 'a'}
            onChange={this.handleChange}
            value={"a"}
            id={'A'}
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
            value={"b"}
            id={'B'}
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
            value={"c"}
            id={'C'}
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
            value={"d"}
            id={'D'}
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
            value={"e"}
            id={'E'}
            classes={{
              root: classes.root_5,
              checked: classes.checked,
            }}
          />
          <label>
          Unsatisfactory
          </label>
        </div>
      <br />
      <div>
        <Button
          disabled={this.props.actiStep === 0}
          onClick={this.handleBack.bind(this)}
          className={classes.backButton}
        >
          Back
        </Button>
        <label></label>&nbsp;<label> </label>
        <Button variant="contained" color="primary" onClick={this.validateField.bind(this)}>
                    Submit
        </Button>
        <br />
        <p> </p>
      </div>
      </div>
    );
  }
}

PerformanceOverAll.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

})

// export default withStyles(styles)(PerformanceOverAll);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { submitOverAll, fetchData }),
)(PerformanceOverAll);