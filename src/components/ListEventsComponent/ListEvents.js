import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Collection, CollectionItem, Icon, Button } from 'react-materialize';
import EditEventContainer from '../../containers/EditEventContainer';
import './ListEvents.css';

const buttonIconNames = ["delete", "mode_edit"];

const events = ["data1", "data2", "data3", "data4", "data5"];

export default class ListEvents extends Component {
  static propTypes = {
    events: PropTypes.array,
    event_details: PropTypes.array,
    fetchEvents: PropTypes.func.isRequired,
    fetchEventDetails: PropTypes.func.isRequired,
  };

  static defaultProps = {
    events: [],
    event_details: [],
  }

  state = {
    event: '',
    show: false,
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentDidUpdate() {
    console.log(this.props);
    const ele = document.getElementsByClassName('mode_edit');
    const delete_ele = document.getElementsByClassName('delete');
    const len = ele.length;
    for(let i = 0; i < len; i++) {
      ele[i].addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicked', this.props);
        this.props.fetchEventDetails(this.props.events[i]);
        this.onEditShowHandler();
      })
      delete_ele[i].addEventListener("click", e => {
        e.preventDefault();
        console.log("clicked", this.props);
        this.props.removeEvent(this.props.events[i]);
      });
    }
  }

  onEditHandler = (e) => {
    console.log('edit handler fired!');
  }

  onEditShowHandler = () => {
    console.log(this.state);    
    this.setState(prevState => ({
      show: !prevState.show,
    }));
    console.log(this.state);
  }

  render() {
    return <React.Fragment>
        <div className="list-events-wrapper">
          list events component
          <Collection>
            {this.props.events.map(data => {
              return <CollectionItem key={data} href="#">
                  {data}
                  <EditDeleteBtn btn_name={buttonIconNames} event_name={data} />
                </CollectionItem>;
            })}
          </Collection>
        </div>
        {/* <div className="gallery-wrapper">
          {events.map(data => {
          return (
            <div className='events-list' key={data}>
              <h5>{data}</h5>
              <div className="action-btn">
                <Button type="submit" waves="red">
                  Detail
                </Button>
                <Button type="submit" waves="red">
                  More
                </Button>
              </div>
            </div>
          );
        })}
        </div> */}
        {this.state.show && this.props.event_details[0] !== undefined ? <EditEventContainer {...this.props.event_details[0]} /> : null}
      </React.Fragment>;
  }
}

function EditDeleteBtn({btn_name, event_name}) {
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
