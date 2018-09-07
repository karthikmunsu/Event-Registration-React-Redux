import React from 'react';
import LoginContainer from "../../containers/LoginContainer";
import './Home.css';
import SignUpContainer from '../../containers/SignUpContainer';

export default class Home extends React.Component {
  state = {
    toShow: true,
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
    return (
      <div className="home">
        {this.state.toShow ? <LoginContainer show={this.show} />
        : <SignUpContainer show={this.show} /> }
      </div>
    );
  }
}