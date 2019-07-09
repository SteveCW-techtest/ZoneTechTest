import React from 'react';

import './Cell.scss';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    // cell click
    onClick() {
        // can we click the cell?
        if (this.props.cellClick) {
            return this.props.cellClick(this.props.x, this.props.y);
        }
    }

    render() {
        let classNames = ['cell'];

        // if the robot is in the cell
        if (this.props.active) {
            // mark it as active
            classNames.push('active');
        }

        return (<div className={classNames.join(' ')}
            onClick={this.onClick}>
        </div>);
    }
}