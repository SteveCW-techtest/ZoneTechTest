import React from 'react';
import Grid from './components/Grid/Grid';
import Controls from './components/Controls/Controls';

import robotService from './services/Robot';

import './App.scss';

export default class App extends React.Component {
  // set the default state (invalid position)
  state = {
    robot: null
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.destroyRobot = this.destroyRobot.bind(this);
  }

  destroyRobot() {
    this.setState({ robot: null });
  }

  // when anything within the app changes, i want to be able to get the most up to date version of the robot
  // strictly speaking this isnt needed as each endpoint returns the robot
  onChange() {
    return robotService.report()
      .then((response) => {
        this.setState({
          robot: response
        });

        return response;
      });
  }

  render() {
    return (
      <div className="App">
        <Controls onChange={this.onChange}
          robot={this.state.robot}
          destroyRobot={this.destroyRobot} />
        <Grid onChange={this.onChange}
          robot={this.state.robot} />
      </div>
    );
  }
}
