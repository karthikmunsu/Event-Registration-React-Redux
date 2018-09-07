import React, { Component } from 'react';
import { Row, Input, Button, Icon } from "react-materialize";
import './SignUp.css';

export default class SignUp extends Component {
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
      cnfpassword: '',
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.UserSignUp(this.state); 
  }

  componentDidMount(){
    console.log(this.state);
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    return <div className="signup">
        {/* <form onSubmit={this.onSubmit}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={this.state.email} required onChange={this.onChangeHandler} />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" value={this.state.password} required onChange={this.onChangeHandler} />
          </label>
          <button type="submit">Sign Up</button>
          isAuth = {this.props.isAuth}
        </form> */}
        <form onSubmit={this.onSubmit}>
          <Input name="email" type="email" label="Email" s={12} value={this.state.email} required onChange={this.onChangeHandler}>
            <Icon className="login-icon">account_circle</Icon>
          </Input>
          <Input name="password" type="password" label="Password" s={12} value={this.state.password} required onChange={this.onChangeHandler}>
            <Icon className="login-icon">vpn_key</Icon>
          </Input>
          <Input name="cnfpassword" type="password" label="Confirm-Password" s={12} value={this.state.cnfpassword} required onChange={this.onChangeHandler}>
            <Icon className="login-icon">vpn_key</Icon>
          </Input>
          <Button type="" waves="red" onClick={this.props.show}>
            Login
          </Button>
          <Button style={{ float: "right" }} type="submit" waves="red">
            Signup
          </Button>
        </form>
      </div>;
  }
}
