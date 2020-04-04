import React from "react";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  doSubmit = () => {
    console.log("Submitted");
  };

    render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;