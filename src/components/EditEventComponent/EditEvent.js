import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import Tags from ".././TagsComponent/Tags";
import { TagRow } from '.././CreateEventComponent/CreateEvent';
import { Row, Input, Button, Icon, Chip, Col } from "react-materialize";
import Overlay from '.././OverlayComponent/Overlay';
import './EditEvent.css';

const formFields = [
  {
    type: "text",
    name: "event_name",
    label: "Event Name",
    icon_name: "note_add"
  },
  {
    type: "text",
    name: "event_description",
    label: "Description",
    icon_name: "assignment"
  },
  {
    type: "number",
    name: "duration",
    label: "Duration",
    icon_name: "access_time"
  },
  {
    type: "text",
    name: "locations",
    label: "Location",
    icon_name: "location_on"
  },
  {
    type: "number",
    name: "fees",
    label: "Fees",
    icon_name: "attach_money"
  },
  {
    type: "number",
    name: "max_people",
    label: "Max People",
    icon_name: "group"
  }
];

export default class EditEvent extends Component {

  state = this.props;

  onTextChange = (e, name) => {
     this.setState({
      [name]: e.target.value,
    })
  }

  onTagChangeHandler = (e) => {
    const code  = (e.keyCode ? e.keyCode : e.which)
    if(code === 13) {
      e.preventDefault();
      let tag = this.state.tags;
      tag.push(e.target.value);
      this.setState(prevState => ({
        tags: tag,
      }))
      e.target.value = "";
    }
    e.persist();
  }

  onCloseHandler = (data) => {
    this.setState(prevState => ({
      tags: prevState.tags.filter((e) => {return e !== data}),
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateEvent(this.state);
    this.onToggleLoader();
  }

  componentWillMount() {
    this.props.fetchEventDetails(this.props.eName);
    this.setState(prevState => ({
      showLoader: false,
    }))
    this.setState(this.props);
  }

  onToggleLoader = () => {
    this.setState(prevState => ({
      showLoader: !prevState.showLoader,
    }))
  }

  componentDidUpdate() {
    if(this.props.hasOwnProperty('update') && !this.state.hasOwnProperty('update')) {
      this.setState(this.props);
      this.onToggleLoader();
    }
  }

  componentWillReceiveProps() {
    if(this.state.showLoader) this.onToggleLoader();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.event_name !== '' && this.props.event_name !== '' ? <div className="edit-event-wrapper">
          <form onSubmit={this.onSubmit}>
            <FormField
              fields={formFields}
              state={this.state}
              onTextChange={this.onTextChange}
            />
            <Input type="text" name="tags" value="" label="Tags" s={12} onKeyPress={this.onTagChangeHandler}><Icon>tag_faces</Icon></Input>
            <TagRow
              tags={this.state.tags}
              onCloseHandler={this.onCloseHandler}
            />
            <div className="save-btn">
              <Button waves="light">
                Update
                <Icon left>save</Icon>
              </Button>
            </div>
            {this.props.status}
          </form>
        </div> : null}
        <Overlay
          show={this.state.showLoader}
        />
      </React.Fragment>
    )
  }
}

const FormField = ({ fields, state, onTextChange }) => {
  return (
    <React.Fragment>
      {fields.map(field => {
        return field.type !== "number" ? (
          <Input
            className="form-field"
            key={field.name}
            type={field.type}
            name={field.name}
            value={state[field.name].toString()}
            label={field.label}
            s={12}
            onChange={(e) => onTextChange(e, field.name)}
            required
          >
            <Icon>{field.icon_name}</Icon>
          </Input>
        ) : (
          <Input
            className="form-field"
            key={field.name}
            type={field.type}
            name={field.name}
            defaultValue={state[field.name]}
            label={field.label}
            s={12}
            onChange={(e) => onTextChange(e, field.name)}
            required
          >
            <Icon>{field.icon_name}</Icon>
          </Input>
        );
      })}
    </React.Fragment>
  );
};
