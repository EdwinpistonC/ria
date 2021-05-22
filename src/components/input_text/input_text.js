import React, { Component } from "react";
import "./input_text.css";

export default class input_text extends Component {
  render() {
    return (
      <div className="userbox">
        <input type="password" name="" required="" />
        <label>Password</label>
      </div>
    );
  }
}
