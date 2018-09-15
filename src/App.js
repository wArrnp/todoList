import React, { Component } from 'react';

import HeaderContainer from './containers/headerContainer';
import TodoListContainer from './containers/todoListContainer';
import ResetContainer from './containers/resetContainer';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main-container">
          <HeaderContainer />
          <TodoListContainer />
          <ResetContainer />
        </div>
      </div>
    );
  }
}

export default App;
