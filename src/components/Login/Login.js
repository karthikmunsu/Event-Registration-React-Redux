import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes, { contextTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
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
  static propTypes = {
    show: PropTypes.func,
    res: PropTypes.object,
  }

  static defaultProps = {
    show: () => {
      
    },
    res: {},
  }


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
    this.ToggleSpinner();
    const ele = ReactDOM.findDOMNode(this.refs.login);
    ele.className += " disabled";
    this.props.UserSignIn(this.state); 
  }

  ToggleSpinner = () => {
    this.setState(prevState => ({
      showSpinner: !prevState.showSpinner,
    }))
  }

  componentDidMount() {
    console.log(this.context);
  }

  //this.props.res will receive all the user information from the firebase.

  componentDidUpdate() {
    if(this.props.res.hasOwnProperty('email')) {
      this.ToggleSpinner();
      window.location.reload();
    }
    if(this.props.res.hasOwnProperty('msg')) {
      const ele = ReactDOM.findDOMNode(this.refs.login);
      ele.className = "login";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div ref="login" className="login">
          <form onSubmit={this.onSubmit}>
            <Input name="email" type="email" label="Email" s={12} value={this.state.email} required onChange={this.onChangeHandler}>
              <Icon className="login-icon">account_circle</Icon>
            </Input>
            <Input name="password" type="password" label="Password" s={12} value={this.state.password} required onChange={this.onChangeHandler}>
              <Icon className="login-icon">vpn_key</Icon>
            </Input>
            <Button type="button" waves="red" onClick={this.props.show}>
              Signup
            </Button>
            <Button style={{float: 'right'}} type="submit" waves="red">
              Login
            </Button>
            <div className="error">{this.props.res.msg}</div>
          </form>
        </div>
        <div>
          <PacmanLoader
            className={override}
            sizeUnit={"px"}
            size={30}
            color={'#123abc'}
            loading={this.state.showSpinner}
          />
        </div>
      </React.Fragment>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired,
}