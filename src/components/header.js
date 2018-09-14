import React, { Component, Fragment } from 'react';

import './css/header.css'

class header extends Component {
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        const { onAdd } = this.props;
        return (
            <Fragment>
                <div className="title">
                    <span>MY-TODO</span>
                </div>
                <br />
                <div className="input-box">
                    <input type="text" className="input-text" value={this.state.text} onChange={this.handleChange} placeholder="할 일을 입력합시오."/>
                    <button onClick={onAdd}className="submit-button">+</button>
                </div>
            </Fragment>
        );
    }
}

export default header;