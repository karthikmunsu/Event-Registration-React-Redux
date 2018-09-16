import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../.././App';
import { USER_NAME } from '../.././actions/UserDetails';
import { Button } from 'react-materialize';
import LoginContainer from "../../containers/LoginContainer";
import SignUpContainer from '../../containers/SignUpContainer';
import "./Home.css";

export default class Home extends React.Component {
  state = {
    toShow: true,
    showSpinner: false,
  };

  show = () => {
    this.setState(prevState => ({
      toShow: !prevState.toShow,
    }));
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div className="home">
        {!Auth.isAuthenticated ? (
          this.state.toShow ? (
            <LoginContainer
              showSpinner={this.state.showSpinner}
              show={this.show}
            />
          ) : (
            <SignUpContainer
              showSpinner={this.state.showSpinner}
              show={this.show}
            />
          )
        ) : (
          <WelcomeScreen />
        )}
      </div>;
  }
}

export const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <p><b>Hi {USER_NAME}</b>, Welcome to Event Registration.</p>
      <Button type="submit" waves="green">
        <Link to="/dashboard">Get Started</Link>
      </Button>
    </div>
  );
}
