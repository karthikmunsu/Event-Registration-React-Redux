import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  state = {
    name: '',
    customName: '<karthik>',
    counter: 0,
  }

  render() {
    return (
      <div className="header">
        <span className="my-name">{ this.state.name }</span>
      </div>
    );
  }
}
