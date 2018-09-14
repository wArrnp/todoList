import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import * as todoActions from '../modules/todo';

import Header from '../components/header';

class headerContainer extends Component {
    handleAdd = (text) => {
        const { TodoAction } = this.props;

        const base = Map({
            id: this.id++,
            text: text,
            done: false
        })
        console.log(base)
        TodoAction.addTodo(base);
    }

    id = 0


    render() {
        return (
            <Fragment>
                <Header onAdd={this.handleAdd} />
            </Fragment>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        TodoAction: bindActionCreators(todoActions, dispatch)
    })
)(headerContainer);