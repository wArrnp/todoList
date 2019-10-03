import React, { Component, Fragment } from "react";

import "./css/header.css";

class Header extends Component {
  render() {
    const { onAdd, onChange, text } = this.props;
    return (
      <Fragment>
        <div className="title">
          <span>MY-TODO</span>
        </div>
        <div className="input-box">
          <input
            type="text"
            className="input-text"
            value={text}
            onChange={onChange}
            placeholder="할 일을 입력하시오."
          />
          <button onClick={onAdd} className="submit-button">
            +
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Header;
