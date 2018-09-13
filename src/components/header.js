import React, { Component } from 'react';

class header extends Component {
    render() {
        const { onAdd } = this.props;

        return (
            <div>
                <div className="title">
                    <span className="title-text">MY-TODO</span>
                </div>
                <div onClick={onAdd}>

                </div>
            </div>
        );
    }
}

export default header;