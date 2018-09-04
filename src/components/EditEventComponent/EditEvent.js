import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import Tags from ".././TagsComponent/Tags";
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

  componentWillMount() {
    this.setState(prevState => ({
      eventName: prevState.event_name,
      description: prevState.event_description,
    }))
  }

  render() {
    return (
      <div className="edit-event-wrapper">
        edit event component
         <form onSubmit={this.onSubmit}>
          <FormField
            fields={formFields}
            state={this.state}
            onTextChange={this.onTextChange}
          />
        </form>
      </div>
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
