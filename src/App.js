import React, { Component } from "react";

import HeaderContainer from "./containers/HeaderContainer";
import TodoListContainer from "./containers/TodoListContainer";
import ResetContainer from "./containers/ResetContainer";

import "./App.css";

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
