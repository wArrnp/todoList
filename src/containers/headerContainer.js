import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import * as todoActions from '../modules/todo';

import header from '../components/header';

class header extends Component {
    handleAdd = () => {
        const { TodoAction } = this.props;

        const base = Map({
            id: this.id++,
            text: this.state.input,
            done: false
        })

        TodoAction.addTodo(base);
    }

    id = 0

    state = {
        input: ''
    }

    render() {
        return (
            <div>
                <header onAdd={this.handleAdd} />
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        TodoAction: bindActionCreators(todoActions, dispatch)
    })
)(header);