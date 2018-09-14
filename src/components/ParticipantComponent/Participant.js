import React, { Component } from 'react';
import EventDetail from '.././EventDetailsComponent/EventDetail';
import './Participant.css';

export default class Participant extends Component {
  state=this.props;

  onClickHandler = (eventName, func) => {
    this.props[func](eventName);
    this.props.ListEvents();
  }

  componentDidMount() {
    this.props.ListEvents();
  }

  componentDidUpdate() {
    this.props.AllEvents();
  }

  render() {
    return (
      <div>
        participant Component
        {this.props.eventsList.length !== 0 ? 
          this.props.events.map(event => {
            return <div key={event}>
                <EventDetail eventName={event} event={this.props.eventsList[event]} />
                <input type="button" value="participate" onClick={() => this.onClickHandler(event, "Interested")} />
                {this.props.eventsList[event].created_by === this.props.userEmail ? <input type="button" value="remove my participation" onClick={() => this.onClickHandler(event, "Not_Interested")} /> : null}
              </div>;
          }) : null
        }
      </div>
    )
  }
}
