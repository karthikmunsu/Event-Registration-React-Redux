import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Collection, CollectionItem, Icon, Button } from 'react-materialize';
import EditEventContainer from '../../containers/EditEventContainer';
import CustomModal from '../CustomModalComponent/CustomModal';
import ActionModal from '../ActionModalComponent/ActionModal';
import { USER_EMAIL } from '../../actions/UserDetails';
import './ListEvents.css';

const buttonIconNames = ["delete", "mode_edit"];

const events = ["data1", "data2", "data3", "data4", "data5"];

export default class ListEvents extends Component {
  static propTypes = {
    events: PropTypes.array,
    event_details: PropTypes.array,
    fetchEvents: PropTypes.func.isRequired,
    fetchEventDetails: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    events: [],
    event_details: [],
  }

  state = {
    event: '',
    show: false,
    eventToEdit: '',
    update: true,
    showActionModal: false,
    eve_name: '',
  }

  ActionModalHandler = (name) => {
    this.setState(prevState => ({
      showActionModal: !prevState.showActionModal,
      eve_name: name,
    }))
  }

  ActionModalRemoveEvent = () => {
    this.props.removeEvent(this.state.eve_name);
    this.props.fetchEvents();
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.props.getAllEvents();
  }

  componentDidUpdate() {
    if(this.state.update) {
      const ele = document.getElementsByClassName('mode_edit');
      const delete_ele = document.getElementsByClassName('delete');
      const len = ele.length;
      for(let i = 0; i < len; i++) {
        ele[i].addEventListener('click', (e) => {
          e.preventDefault();
          this.setState({
            eventToEdit: this.props.events[i],
            update: false,
          });
          this.onEditShowHandler();
        })
        delete_ele[i].addEventListener("click", e => {
          e.preventDefault();
          this.ActionModalHandler(this.props.events[i]);
        });
      }
    }
  }

  onEditHandler = (e) => {
    console.log('edit handler fired!');
  }

  onEditShowHandler = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  isMyEvent = () => {
    this.props.fetchEventDetails();
  }

  render() {
    return <React.Fragment>
        <div className="list-events-wrapper">
          <Collection>
            {this.props.events.map((data, index) => {
              return <CollectionItem key={data} href="#">
                  {data}
                  {this.props.all_event_details.length !== 0 ? this.props.all_event_details[index][data].created_by === USER_EMAIL ? 
                  <EditDeleteBtn btn_name={buttonIconNames} onEdit={this.onEditShowHandler} event_name={data} /> : null : null}
                </CollectionItem>;
            })}
          </Collection>
        </div>
        <CustomModal
            show={this.state.show}
            closeHandler={this.onEditShowHandler}
        >
        {this.state.show && this.state.eventToEdit !== ''  ? <EditEventContainer eName={this.state.eventToEdit} {...this.props} /> : null}
        </CustomModal>
        {this.state.showActionModal ? <ActionModal
          event_name={this.state.eve_name}
          closeHandler={this.ActionModalHandler}
          actionHandler={this.ActionModalRemoveEvent}
        /> : null}
      </React.Fragment>;
  }
}

function EditDeleteBtn({btn_name, event_name, onEdit}) {
  return (
    <React.Fragment>
      {btn_name.map(name => <Icon key={name} className={`action-btn ${name}`}>{name}</Icon>)}
    </React.Fragment>
  );
}

EditDeleteBtn.propTypes = {
  btn_name: PropTypes.array.isRequired,
  event_name: PropTypes.string.isRequired,
}
