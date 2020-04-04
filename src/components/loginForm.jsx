import React, { Component } from "react";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
  username = React.createRef();

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
