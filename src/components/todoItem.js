import React, { Component } from 'react';

import './css/todoItem.css';

class todoItem extends Component {

    render() {
        const { onToggle, onRemove, id, text, done } = this.props;

        return (
            <div className={`todo-item ${done? 'done': ''}`}>
                <p className="todo-text" onClick={() => onToggle(id)}>{text}</p>
                <button className="todo-remove" onClick={() => onRemove(id)}>엑스</button>
            </div>
        );
    }
}

export default todoItem;