import React from 'react';

import Grid from '../Grid/Grid';

import robotService from '../../services/Robot';

import './Controls.scss';

export default class Controls extends React.Component {
    // set the default state (invalid position)
    state = {
        direction: 'NORTH',
        robot: {
            direction: null,
            x: -1,
            y: -1
        }
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.directionChange = this.directionChange.bind(this);
        this.cellClick = this.cellClick.bind(this);

        this.move = this.move.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.place = this.place.bind(this);
    }

    // onchange lets always make sure we have the most upto date robot through out the app
    onChange() {
        return this.props.onChange()
            .then((robot) => {
                this.setState({ robot });

                return robot;
            });
    }

    // update ui with selected direction
    directionChange(e) {
        this.setState({
            direction: e.target.value
        });
    }

    // what happens when i click one of the grid cells
    cellClick(x, y) {
        robotService.place(x, y, this.state.direction)
            .then(() => {
                this.onChange();
            });
    }

    // the onCLick for the "move" button
    move() {
        // call the standalone robot service
        robotService.move()
            .then(() => {
                this.onChange();
            })
    }

    // the onClick for the "left" button
    rotateLeft() {
        // call the standalone robot service
        robotService.rotateLeft()
            .then(() => {
                this.onChange();
            })
    }

    // the onClick for the "right" button
    rotateRight() {
        // call the standalone robot service
        robotService.rotateRight()
            .then(() => {
                this.onChange();
            })
    }

    // the onClick for the "place" button
    place() {
        // mock the robot to an invalid one so we can show the grid component
        this.setState({
            robot: {
                direction: null,
                x: -1,
                y: -1
            }
        });

        // removes the robot from parent state, to hide main grid
        this.props.destroyRobot();
    }

    render() {
        // do we have a robot?
        if (!this.props.robot) {
            // if not (first load)
            return <div className="controls">
                <select value={this.state.direction}
                    onChange={this.directionChange}>
                    <option value='NORTH'>North</option>
                    <option value='EAST'>East</option>
                    <option value='SOUTH'>South</option>
                    <option value='WEST'>West</option>
                </select>

                <Grid onChange={this.onChange}
                    cellClick={this.cellClick}
                    robot={this.state.robot} />
            </div>
        }

        // no, we can palce it then
        return (<div className="controls">
            <div className="controls">
                <button onClick={this.rotateLeft}>Rotate left</button>
                <button onClick={this.rotateRight}>Rotate Right</button>
                <button onClick={this.move}>Move</button>
                |
                <button onClick={this.place}>Place</button>
            </div>
        </div>);
    }
}