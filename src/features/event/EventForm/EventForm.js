import React, { Component } from "react";
import PropTypes from "prop-types";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  static propTypes = {
    handleCancel: PropTypes.func
  };

  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state.event);
  };

  onInputSubmit = e => {
    // const newEvent = this.state.event;
    const newEvent = Object.assign({}, this.state.event);
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" value={this.state.event.title} onChange={this.onInputSubmit} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" value={this.state.event.date} onChange={this.onInputSubmit} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" value={this.state.event.city} onChange={this.onInputSubmit} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" value={this.state.event.venue} onChange={this.onInputSubmit} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" value={this.state.event.hostedBy} onChange={this.onInputSubmit} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
