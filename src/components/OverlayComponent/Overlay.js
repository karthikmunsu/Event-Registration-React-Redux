import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from "react-emotion";
import { PacmanLoader } from "react-spinners";
import './Overlay.css';

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

export default class Overlay extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div id="overlay" style={{display: this.props.show ? 'block' : 'none'}}>
        <div className="loader">
          <PacmanLoader
              className={override}
              sizeUnit={"px"}
              size={30}
              color={'white'}
              loading={this.props.show}
            />
        </div>
      </div>
    )
  }
}
