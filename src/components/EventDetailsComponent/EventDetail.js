import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventDetail.css';

export default class EventDetail extends Component {
  static propTypes = {
    eventName: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
    show: PropTypes.bool,
  }

  static defaultProps = {
    show: false,
  } 

  state = this.props;

  onShowHideHandler = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return <div>
        Event Detail Component.
        <div className="event-name" onClick={this.onShowHideHandler}>
          {this.state.eventName}
        </div>
        {this.state.show ? <div>
            participants:
            <ParticipantsList participants={this.state.event.participants} />
          </div> : null}
      </div>;
  }
}

const ParticipantsList = ({participants}) => {
  return (
    <React.Fragment>
      {participants.map((details, index) => <span key={`${details.name+index}`}>{details.email}</span>)}
    </React.Fragment>
  );
}

ParticipantsList.propTypes = {
  participants: PropTypes.array.isRequired,
}
