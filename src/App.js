import React, { Component } from 'react';

import HeaderContainer from './containers/headerContainer';
import TodoListContainer from './containers/todoListContainer';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
