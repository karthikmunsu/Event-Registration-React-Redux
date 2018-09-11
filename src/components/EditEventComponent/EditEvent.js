import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import Tags from ".././TagsComponent/Tags";
import { TagRow } from '.././CreateEventComponent/CreateEvent';
import { Row, Input, Button, Icon, Chip, Col } from "react-materialize";
import './EditEvent.css';

const formFields = [
  {
    type: "text",
    name: "eventName",
    label: "Event Name",
    icon_name: "note_add"
  },
  {
    type: "text",
    name: "description",
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
    name: "location",
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

  onTextChange = (e) => {
     this.setState({
      [e.target.name]: e.target.value,
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
  }

  componentWillMount() {
    this.setState(prevState => ({
      eventName: prevState.event_name,
      description: prevState.event_description,
    }))
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Edit Event Component</h3>
        <div className="edit-event-wrapper">
          <form onSubmit={this.onSubmit}>
            <FormField
              fields={formFields}
              state={this.state}
              onTextChange={this.onTextChange}
            />
            <Input type="text" name="tags" label="Tags" s={12} onKeyPress={this.onTagChangeHandler}><Icon>tag_faces</Icon></Input>
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
          </form>
        </div>
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
            value={state[field.name]}
            label={field.label}
            s={12}
            onChange={onTextChange}
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
            defaultValue={state[field.name].toString()}
            label={field.label}
            s={12}
            onChange={onTextChange}
            required
          >
            <Icon>{field.icon_name}</Icon>
          </Input>
        );
      })}
    </React.Fragment>
  );
};
