import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';
import './ActionModal.css';

export default class ActionModal extends Component {
  static propTypes = {
    event_name: PropTypes.string.isRequired,
    actionHandler: PropTypes.func.isRequired,
    closeHandler: PropTypes.func.isRequired,
  }

  state = {
    iconName: '',
  }

  onHoverHandler = (e, label) => {
    e.preventDefault();
    this.setState({
      iconName:
        label === "yes"
          ? "sentiment_very_dissatisfied"
          : "sentiment_very_satisfied"
    });
  }

  onHoverOutHandler = (e) => {
    e.preventDefault();
    this.setState({
      iconName: '',
    })
  }

  onRemoveHandler = () => {
    this.setState({ iconName: 'done' });
    this.props.actionHandler();
    this.props.closeHandler();
  }

  render() {
    return <div className="action-modal-overlay">
        <div className="action-container">
          <h3>{this.props.event_name}</h3>
          <div className="btn-grp">
            Do you want to really delete it? Once deleted it can't be revoked.
            <Button
              className="cancel"
              type="button"
              waves="red"
              onMouseEnter={e => this.onHoverHandler(e, "no")}
              onMouseLeave={this.onHoverOutHandler}
              onClick={this.props.closeHandler}
            >
              No
            </Button>
            <Button
              type="button"
              waves="red"
              onMouseEnter={e => this.onHoverHandler(e, "yes")}
              onMouseLeave={this.onHoverOutHandler}
              onClick={this.onRemoveHandler}
            >
              Yes
            </Button>
            <div>
              <Icon small>{this.state.iconName}</Icon>
            </div>
          </div>
        </div>
      </div>;
  }
}
