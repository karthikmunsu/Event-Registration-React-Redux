import React from 'react';
import PropTypes, { contextTypes } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from '../../App';
import './Header.css';

export default class Header extends React.Component {
  state = {};

  logout = () => {
    console.log(this.props);
    Auth.signout(() => {});
    this.navigationHandler('login');
  }

  navigationHandler = (path) => {
    console.log('navigation handler');
    this.context.router.history.push(`/${path}`);
  }

  render() {
    return <div className="">
        <span className="my-name" onClick={() => this.navigationHandler('/')}>Event Registration</span>
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
                  <a onClick={this.logout}>Edit-Events</a>
                </li>
                <li>
                  <a onClick={this.logout}>Create-Event</a>
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
