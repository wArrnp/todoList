import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from '../modules/todo';

import ResetTodo from '../components/resetBtn';

class componentName extends Component {
    handleReset = () => {
        const { TodoActions } = this.props;

        TodoActions.resetTodo();
    }

    render() {
        return (
            <div>
                <ResetTodo onReset={this.handleReset} />
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(componentName);