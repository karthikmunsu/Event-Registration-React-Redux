import React, { Component } from 'react';
import { Row, Input, Button, Icon } from "react-materialize";
import './Login.css';

export default class Login extends Component {
  state = this.props;

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onReset = () => {
    this.setState({
      email: '',
      password: '',
    });
  }

  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.props.UserSignIn(this.state); 
  }

  //this.props.res will receive all the user information from the firebase.

  render() {
    return <div className="login">
        LoginComponent
        <form onSubmit={this.onSubmit}>
          <Input name="email" type="email" label="Email" s={12} value={this.state.email} required onChange={this.onChangeHandler}><Icon className="login-icon">account_circle</Icon></Input>
          <Input name="password" type="password" label="Password" s={12} value={this.state.password} required onChange={this.onChangeHandler}><Icon className="login-icon">vpn_key</Icon></Input>
          <Button type="submit" waves="light">
            Login
          </Button>
        </form>
      </div>;
  }
}
