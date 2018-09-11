import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-materialize';
import './DashBoard.css';
import ListEventsContainer from '../.././containers/ListEventsContainer';
import CreateEventsContainer from '../.././containers/CreateEventsContainer';
import PushNotification from '../.././Firebase/pushNotification';

export default class DashBoard extends Component {
  state = {
    show: false,
  };

  onClickHandler = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  componentDidMount() {
    const ele = document.getElementsByClassName("fixed-action-btn");
    ele[0].addEventListener('mouseover', function() {
      ele[0].classList.add('active');
    });
    ele[0].addEventListener("mouseout", function() {
      ele[0].classList.remove("active");
    });
    PushNotification();
  }

  componentWillUnmount() {
    const ele = document.getElementsByClassName("fixed-action-btn");
    ele[0].removeEventListener('mouseover');
    ele[0].removeEventListener("mouseout");
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <h3>Events List</h3>
        {this.state.show ? <CreateEventsContainer />
         : <ListEventsContainer /> }
        <FloatingButton
          onClickHandler={this.onClickHandler}
        />
      </div>
    )
  }
}

const FloatingButton = ({onClickHandler}) => {
  return (
    <Button floating fab='horizontal' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
      <Button floating icon='delete' className='red'/>
      <Button floating icon='file_copy' className='blue'/>
      <Button floating icon='create' className='green' onClick={onClickHandler} />
    </Button>
  );
}

FloatingButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
}
