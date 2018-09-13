import React, { Component } from 'react'
import './Participant.css';

export default class Participant extends Component {
  state=this.props;

  onClickHandler = (eventName, func) => {
    console.log(func, this.props[func])
    this.props[func](eventName);
    this.props.ListEvents();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.ListEvents();
  }

  render() {
    return (
      <div>
        participant Component
        {this.props.events.map(event => {
          return <div key={event}>
              {event}
              <input type="button" value="participate" onClick={() => this.onClickHandler(event, "Interested")} />
              <input type="button" value="remove my participation" onClick={() => this.onClickHandler(event, "Not_Interested")} />
            </div>;
        })}
      </div>
    )
  }
}
