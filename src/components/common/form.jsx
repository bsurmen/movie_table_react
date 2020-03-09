import React, { Component } from 'react';
import Input from './input';
import Select from './select';


class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {

        return null
        // const errors = {};

        // const { data } = this.state;
        // if (data.username.trim() === "")
        //     errors.username = "Username is required.";
        // if (data.password.trim() === "")
        //     errors.password = "Password is required.";
        // return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = ({ name, value }) => {
        return null

        // if (name === "username") {
        //     if (value.trim() === "") return "Username is required."
        // }
        // if (name === "password") {
        //     if (value.trim() === "") return "Password is required."
        // }
    }

    renderButton(label) {
        return <button
            disabled={this.validate()}
            className="btn btn-primary"
        >{label}</button>
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;
        return <Input
            type={type}
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
        />
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
}

export default Form;