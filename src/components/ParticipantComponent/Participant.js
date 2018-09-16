import React, { Component } from 'react';
import EventDetail from '.././EventDetailsComponent/EventDetail';
import { USER_EMAIL } from '../.././actions/UserDetails';
import { Button } from 'react-materialize';
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
      <div className="participants">
        <h3>Participants</h3>
        {this.props.eventsList.length !== 0 ? 
          this.props.events.map(event => {console.log(this.props.eventsList[event])
            return (
              <React.Fragment key={event}>
                {this.props.eventsList[event].created_by === USER_EMAIL ? <div key={event}>
                  <EventDetail eventName={event} event={this.props.eventsList[event]} />
                  {/* <input type="button" value="participate" onClick={() => this.onClickHandler(event, "Interested")} />
                  {this.props.eventsList[event].created_by === this.props.userEmail ? <input type="button" value="remove my participation" onClick={() => this.onClickHandler(event, "Not_Interested")} /> : null} */}
                </div> : null}
              </React.Fragment>
            );
          }) : null
        }
      </div>
    )
  }
}
