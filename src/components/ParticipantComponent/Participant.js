import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventDetail from '.././EventDetailsComponent/EventDetail';
import { USER_EMAIL } from '../.././actions/UserDetails';
import Overlay from '.././OverlayComponent/Overlay';
import { Button } from 'react-materialize';
import './Participant.css';

export default class Participant extends Component {
  state=Object.assign({}, this.props, {showLoader: false});

  onClickHandler = (eventName, func) => {
    this.props[func](eventName);
    this.onToggleLoader();
    this.props.ListEvents();
  }

  componentDidMount() {
    this.props.ListEvents();
  }

  componentDidUpdate() {
    this.props.AllEvents();
  }

  onToggleLoader = () => {
    this.setState(prevState => ({
      showLoader: !prevState.showLoader,
    }));
    setTimeout(() => {
        this.setState({
          showLoader: false,
        })
    }, 3000);
  }

  isRegistered = (event) => {
    let notfound = false;
    if(event.hasOwnProperty('participants')) {
      event.participants.map(data => {
        if(data.email === USER_EMAIL)
          notfound = true;
      })
    }else 
      return true;
    return !notfound;
  }

  render() {
    return (
      <div className="participants">
        <h3>Your Events</h3>
        {this.props.eventsList.length !== 0 ? 
          this.props.events.map(event => {
            return (
              <React.Fragment key={event}>
                {this.props.eventsList[event].created_by === USER_EMAIL ? <div key={event}>
                  <EventDetail eventName={event} event={this.props.eventsList[event]} />
                </div> : null}
              </React.Fragment>
            );
          }) : null
        }
        <h3>Other Events</h3>
        {this.props.eventsList.length !== 0 ? 
          <EventsToParticipate
              events={this.props.events}
              eventsList={this.props.eventsList}
              onClickHandler={this.onClickHandler}
              isRegistered={this.isRegistered}
            /> : null}
        <Overlay
          show={this.state.showLoader}
        />
      </div>
    )
  }
}

const EventsToParticipate = ({ events, eventsList, onClickHandler, isRegistered }) => {
  return (
    <React.Fragment>
      {eventsList.length !== 0
        ? events.map(event => {
            return (
              <React.Fragment key={event}>
                {eventsList[event].created_by !== USER_EMAIL ? (
                  <div key={event} className="other-event">
                    <div className="other-event-name">
                      <span>{event}</span>
                      {isRegistered(eventsList[event]) ? 
                      <Button
                        style={{ float: "right" }}
                        type="button"
                        waves="red"
                        onClick={() => onClickHandler(event, "Interested")}
                      >
                        Register
                      </Button>
                      : <Button
                        style={{ float: "right", backgroundColor: 'red', color: '#FFF' }}
                        type="button"
                        waves="red"
                        onClick={() => onClickHandler(event, "Not_Interested")}
                      >
                        Remove
                      </Button>}
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })
        : null}
    </React.Fragment>
  );
};
