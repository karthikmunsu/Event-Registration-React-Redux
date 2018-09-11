import React, { Component } from 'react';
import { Row, Input, Button, Icon } from "react-materialize";
import { css } from "react-emotion";
import { PacmanLoader } from "react-spinners";
import './Login.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
    return (
      <React.Fragment>
        <div className="login">
          <form onSubmit={this.onSubmit}>
            <Input name="email" type="email" label="Email" s={12} value={this.state.email} required onChange={this.onChangeHandler}>
              <Icon className="login-icon">account_circle</Icon>
            </Input>
            <Input name="password" type="password" label="Password" s={12} value={this.state.password} required onChange={this.onChangeHandler}>
              <Icon className="login-icon">vpn_key</Icon>
            </Input>
            <Button type="" waves="red" onClick={this.props.show}>
              Signup
            </Button>
            <Button style={{float: 'right'}} type="submit" waves="red">
              Login
            </Button>
          </form>
        </div>
        <div>
          <PacmanLoader
            className={override}
            sizeUnit={"px"}
            size={30}
            color={'#123abc'}
            loading={true}
          />
        </div>
      </React.Fragment>
    );
  }
}
