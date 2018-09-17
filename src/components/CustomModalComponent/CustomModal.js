import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon } from 'react-materialize';
import './CustomModal.css';

export default class CustomModal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    closeHandler: PropTypes.func,
  };

  static defaultPropTypes = {
    closeHandler: () => {},
  }

  onClickHandler = () => {
    this.props.closeHandler();
  }

  render() {
    return (
      <div className="custom-modal-overlay" style={{display: this.props.show ? 'block' : 'none'}}>
        <div className="custom-modal">
          <div onClick={this.onClickHandler}>
            <Icon className="close-btn">cancel</Icon>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
