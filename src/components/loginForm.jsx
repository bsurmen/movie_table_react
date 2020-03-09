import React, { Component } from 'react';
import Form from "./common/form"





class LoginForm extends Form {


    state = {
        data: { username: "", password: "" },
        errors: {}
    }


    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);

        this.setState({ errors: errors || {} });
        if (errors) return;
    }

    handleChange = ({ currentTarget: input }) => {

        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    }


    render() {

      

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                 

                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}

export default LoginForm;





    // componentDidMount() {
    //     this.username.current.focus();
    // }

