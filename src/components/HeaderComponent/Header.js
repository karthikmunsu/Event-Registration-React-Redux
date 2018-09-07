import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return <div className="">
        <span className="my-name">Event Registration</span>
        <div className="nav">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>;
  }
}
