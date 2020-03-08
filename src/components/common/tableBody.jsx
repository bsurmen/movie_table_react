import React, { Component } from 'react';
import Joi, { abort } from "joi-browser";
import _ from "lodash";

class TableBody extends Component {

    // state = {
    //     account: { username: "", password: "" },
    //     error: {}
    // }

    // schema = {
    //     username: Joi.string().required(),
    //     password: Joi.string().required(),
    // }

    // validate = () => {
    //     const result = Joi.validate(this.state.account, this.schema, { abortEarly: false });
    //     if (!result.error) return null;
    //     const errors = {};
    //     for (let item of result.error.details)
    //         errors[item.path[0]] = item.message;
    //     return errors;
    // }

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();
        console.log("sdfsd");
        const username = this.username.current.value;
    }

    renderCell = (item, column) => {
        if (column.content) return column.content(item);

        return _.get(item, column.path)
    };

    createKey = (item, column) => {
        return item._id + (column.path || column.key)
    }

    render() {

        const { data, columns } = this.props;

        return (


            <tbody>
                {data.map(item => <tr key={item._id}>
                    {columns.map(column => <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>)}
                </tr>)}

            </tbody>


        );
    }
}

export default TableBody;

{/* <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group"><label htmlFor="username">Username</label><input autoFocus ref={this.username} id="username" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="password">Password</label><input id="password" type="text" className="form-control" /></div>
                    <button className="btn btn-primary">Login</button>
                </form> */}
