import React from 'react';
import ParticipantContainer from '../.././containers/ParticipantContainer';
import './Detail.css';

export default class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        detail component.
        <ParticipantContainer />
      </div>
    );
  }
}