import React, { Component } from "react";
import "./new_input.css";

export default class input_text extends Component {
  render() {
    return (
      <div className="loginbox">
        <h2>Login</h2>
        <form>
          <div className="userbox">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="userbox">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
        </form>
      </div>
    );
  }
}
