import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';
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

  onIconHandler = () => {
    this.setState(prevstate => ({
      show: !prevstate.show,
    }))
  }

  componentDidMount() {
    let coll = document.getElementsByClassName(`collapsible ${this.state.eventName}`);
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  componentWillUnmount() {
    let coll = document.getElementsByClassName(`collapsible ${this.state.eventName}`);
    for (let i = 0; i < coll.length; i++) { 
      coll[i].removeEventListener('click', function(){});
    }
  }

  render() {
    return (
        <div className="event-name">
          <button className={`collapsible ${this.state.eventName}`} onClick={this.onIconHandler}>
            {!this.state.show ? <Icon tiny>arrow_right</Icon> : <Icon tiny>arrow_drop_up</Icon>}
            {this.state.eventName}
          </button>
          <div className={`content ${this.state.eventName}`}>
            {this.props.event.hasOwnProperty("participants") ? (
              <ParticipantsList
                participants={this.state.event.participants}
              />
            ) : (
              "No Participants"
            )}
          </div>
        </div>
    );
  }
}

const ParticipantsList = ({participants}) => {
  return (
    <React.Fragment>
      {participants.map((details, index) => {
        return(
          <p key={`${details.name+index}`}>
            {details.email}
          </p>
        )}
      )}
    </React.Fragment>
  );
}

ParticipantsList.propTypes = {
  participants: PropTypes.array.isRequired,
}
