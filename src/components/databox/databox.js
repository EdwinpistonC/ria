import React, { Component } from "react";

export default class databox extends Component {
  render() {
    return (
      <div className="loginbox">
        <h2>Login</h2>
        <form>{this.props.children}</form>
      </div>
    );
  }
}
