import React from 'react';
import PropTypes, { contextTypes } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from '../../App';
import logo from '../../images/event-logo.png';
import './Header.css';

export default class Header extends React.Component {
  state = {};

  logout = () => {
    Auth.signout(() => {});
    this.navigationHandler('login');
  }

  navigationHandler = (path) => {
    this.context.router.history.push(`/${path}`);
  }

  render() {
    return <div className="header">
        <span className="my-name"><Link to="/"><img src={logo} alt="logo" /></Link></span>
        <div className="nav">
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            {!Auth.isAuthenticated ? 
            <React.Fragment>
              <li>
                <Link to="/about">Signup</Link>
              </li>
              <li>
                <Link to="/about">Login</Link>
              </li>
            </React.Fragment>
            : <React.Fragment>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/createevent">Create-Event</Link>
                </li>
                <li>
                  <a onClick={this.logout}>Logout</a>
                </li>
              </React.Fragment>}
          </ul>
        </div>
      </div>;
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
}
