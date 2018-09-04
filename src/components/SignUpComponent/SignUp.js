import React, { Component } from 'react'

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
    return (
      <div>
        SignupComponent
        <form onSubmit={this.onSubmit}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              required
              onChange={this.onChangeHandler}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              required
              onChange={this.onChangeHandler}
            />
          </label>
          <button type="submit">Sign Up</button>
          isAuth = {this.props.isAuth}
        </form>
      </div>
    )
  }
}
