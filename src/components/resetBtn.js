import React, { Component } from "react";

import "./css/resetBtn.css";

class ResetBtn extends Component {
  oz;
  render() {
    const { onReset } = this.props;

    return (
      <div className="todo-reset">
        <button onClick={onReset}>CLEAR</button>
      </div>
    );
  }
}

export default ResetBtn;
