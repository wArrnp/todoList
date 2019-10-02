import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from "../modules/todo";

import ResetTodo from "../components/ResetBtn";

class ResetContainer extends Component {
  handleReset = () => {
    const { TodoActions } = this.props;

    TodoActions.resetTodo();
  };

  render() {
    return <ResetTodo onReset={this.handleReset} />;
  }
}

export default connect(
  null,
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(ResetContainer);
