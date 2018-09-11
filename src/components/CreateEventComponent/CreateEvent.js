import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tags from '.././TagsComponent/Tags';
import { Row, Input, Button, Icon, Chip, Col } from 'react-materialize';
import './CreateEvent.css';

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
  { type: "number", name: "fees", label: "Fees", icon_name: "attach_money" }
];

export default class CreateEvent extends Component {
  static propsTypes = {
    eventName: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    location: PropTypes.string,
    fees: PropTypes.number,
    tags: PropTypes.array,
    max_people: PropTypes.number,
    created_by: PropTypes.string,
    modified_by: PropTypes.string,
    participants: PropTypes.array,
    status: PropTypes.string,
  };

  static defaultProps = {
    eventName: '',
    description: '',
    duration: 0,
    location: '',
    fees: 0,
    tags: [],
    max_people: 0,
    created_by: '',
    modified_by: '',
    participants: [],
    status: '',
  }

  state = this.props;

  onCloseHandler = (data) => {
    this.setState(prevState => ({
      tags: prevState.tags.filter((e) => {return e !== data}),
    }));
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

  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state); 
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div className="create-event-wrapper">
        create event component
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
          <Input type="number" name="max_people" defaultValue={(this.state.max_people).toString()} label="Max Number of Participants" s={12} onChange={this.onTextChange} required><Icon>group_add</Icon></Input>
          <div className="save-btn">
            <Button waves="light">
              Save
              <Icon left>save</Icon>
            </Button>
          </div>
        </form>
        {this.props.status}
      </div>;
  }
}

export function TagRow({tags, onCloseHandler}) {
  return (
    <Row>
      <Col s={12}>
        <Tags
          tags={tags}
          onCloseHandler={onCloseHandler}
        />
      </Col>
    </Row>
  );
}; // To display the tags in a row fashion.

TagRow.propTypes = {
  tags: PropTypes.array.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
};

function FormField({fields, state, onTextChange}) {
  return (
    <React.Fragment>
      {fields.map(field => {
        return(
          field.type !== 'number' ? <Input className="form-field" key={field.name} type={field.type} name={field.name} value={state[field.name]} label={field.label} s={12} onChange={onTextChange} required><Icon>{field.icon_name}</Icon></Input>
           : <Input className="form-field" key={field.name} type={field.type} name={field.name} defaultValue={(state[field.name]).toString()} label={field.label} s={12} onChange={onTextChange} required><Icon>{field.icon_name}</Icon></Input>
        );
      })}
    </React.Fragment>
  );
}; // to display the input fields

FormField.propTypes = {
  fields: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  onTextChange: PropTypes.func.isRequired,
}
