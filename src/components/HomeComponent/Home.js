import React from 'react';
import LoginContainer from "../../containers/LoginContainer";
import './Home.css';
import SignUpContainer from '../../containers/SignUpContainer';

export default class Home extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="home">
        Home component
        <LoginContainer />
        {/* <SignUpContainer /> */}
      </div>
    );
  }
}