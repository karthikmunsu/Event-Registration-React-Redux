import React from 'react';
import PropTypes, { contextTypes } from 'prop-types';
import { NavLink ,Link, withRouter } from 'react-router-dom';
import { Icon, Badge } from 'react-materialize';
import { Auth } from '../../App';
import logo from '../../images/event-logo.png';
import './Header.css';

export default class Header extends React.Component {
  state = {};

  logout = () => {
    Auth.signout(() => {});
    this.navigationHandler('');
  }

  navigationHandler = (path) => {
    this.context.router.history.push(`/${path}`);
  }

  render() {
    return <div className="header">
        <span className="my-name">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </span>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/about" activeClassName="selected">
                About us
              </NavLink>
            </li>
            {!Auth.isAuthenticated ? <React.Fragment>
                <li>
                  <NavLink to="/signup" activeClassName="selected">
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeClassName="selected">
                    Login
                  </NavLink>
                </li>
              </React.Fragment> : <React.Fragment>
                <li>
                  <NavLink to="/dashboard" activeClassName="selected">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" activeClassName="selected">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/createevent" activeClassName="selected">
                    Create-Event
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/createevent" activeClassName="selected">
                    <Badge>
                      <Icon>notifications</Icon>1
                    </Badge>
                  </NavLink>
                </li> */}
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
