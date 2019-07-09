import React from 'react';

import Cell from '../Cell/Cell';

import './Grid.scss';

export default class Grid extends React.Component {
    // grid height
    width = 5;

    // grid width
    height = 5;

    // set the default state (invalid position)
    state = {
        robot: {
            x: -1,
            y: -1
        }
    }

    constructor(props) {
        super(props);

        this.state.robot = props.robot;

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        return this.props.onChange()
            .then((robot) => {
                this.setState({ robot });

                return robot;
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.robot !== this.props.robot) {
            this.setState({
                robot: this.props.robot
            });
        }
    }

    render() {
        // we have no rows yet
        let rows = [];

        if (!this.props.robot) {
            // we don't yet have a robot so don't display the grid
            return null;
        }

        for (let y = 0; y < this.height; y++) {
            // create empty row
            rows[y] = [];

            for (let x = 0; x < this.width; x++) {
                let active = false;

                // is the robot at current cell?
                if (this.state.robot && this.state.robot.x === x && this.state.robot.y === (4 - y)) {
                    // if yieldExpression.apply.
                    active = true;
                }

                // dynamically create the grid, and change the maths so X is the SOUTH WEST
                rows[y][x] = <Cell x={x}
                    y={4 - y}
                    active={active}
                    onChange={this.onChange}
                    cellClick={this.props.cellClick}
                    key={`${x}${y}`
                    } />
            }
        }

        return (<div className="grid">
            {rows}
        </div>);
    }
}