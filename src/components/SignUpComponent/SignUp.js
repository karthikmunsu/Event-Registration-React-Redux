import React, { Component } from 'react';
import PropTypes, { contextTypes } from 'prop-types';
import ReactDOM from "react-dom";
import { Row, Input, Button, Icon } from "react-materialize";
import { PacmanLoader } from "react-spinners";
import { css } from "react-emotion";
import './SignUp.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class SignUp extends Component {
  static propTypes = {
    show: PropTypes.func,
    isAuth: PropTypes.string,
  }

  static defaultProps = {
    show: () => {
      
    },
    isAuth: '',
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
      cnfpassword: '',
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.ToggleSpinner();
    const ele = ReactDOM.findDOMNode(this.refs.signup);
    ele.className += " signup";
    this.props.UserSignUp(this.state);
  };

  ToggleSpinner = () => {
    this.setState(prevState => ({
      showSpinner: !prevState.showSpinner,
    }))
  }

  componentWillReceiveProps() {
    this.ToggleSpinner();
    this.onReset();
  }

  componentDidUpdate() {
    if (this.props.isAuth === "Success") {
      const ele = ReactDOM.findDOMNode(this.refs.signup);
      ele.className = "signup";
      setTimeout(() => {
        this.props.show();
      }, 3500);
    }
  }

  render() {
    return <React.Fragment>
        <div className="signup" ref="signup">
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
            <Button type="button" waves="red" onClick={this.props.show}>
              Login
            </Button>
            <Button style={{ float: "right" }} type="submit" waves="red">
              Signup
            </Button>
          </form>
          {this.props.isAuth.length !==0 ? <div className="error">{`Registration ${this.props.isAuth}, We will automatically take you to the login page.`}</div> : null}
        </div>
        <div>
          <PacmanLoader className={override} sizeUnit={"px"} size={30} color={"#123abc"} loading={this.state.showSpinner} />
        </div>
      </React.Fragment>;
  }
}

SignUp.contextTypes = {
  router: PropTypes.object.isRequired
};