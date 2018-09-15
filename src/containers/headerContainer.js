import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import * as todoActions from '../modules/todo';

import Header from '../components/header';

class headerContainer extends Component {
    handleAdd = () => {
        const { TodoAction } = this.props;

        const base = Map({
            id: this.id++,
            text: this.state.text,
            done: false
        })
        
        this.setState({
            text: ''
        })

        TodoAction.addTodo(base);
    }

    
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    state = {
        text: ''
    }

    id = 0


    render() {
        return (
            <Fragment>
                <Header onAdd={this.handleAdd} onChange={this.handleChange} text={this.state.text} />
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