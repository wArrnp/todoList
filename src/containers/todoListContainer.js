import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from '../modules/todo';

import TodoItem from '../components/todoItem';


class componentName extends Component {
    handleToggle = (index) => {
        const { TodoActions } = this.props;

        TodoActions.changeTodo(index);
    }

    handleRemove = (index) => {
        const { TodoActions } = this.props;

        TodoActions.removeTodo(index);
    }

    render() {
        const { todos } = this.props;
        const todoList = todos.map(contact => (
            // todoItem 컴포넌트 추가
            <TodoItem 
                onToggle={this.handleToggle} 
                onRemove={this.handleRemove} 
                id={contact.get('id')} 
                text={contact.get('text')} 
                done={contact.get('done')} 
            />
        ))

        return (
            <div>
                { todoList }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        todos: state.todo
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(componentName);