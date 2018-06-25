import React, { Component } from "react";
import PropTypes from "prop-types";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  static propTypes = {
    handleCancel: PropTypes.func
  };

  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({ event: this.props.selectedEvent });
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log('current: ', this.props.selectedEvent);
  //   // console.log('nextProps: ', nextProps.selectedEvent);
  //   if (nextProps.selectedEvent !== this.props.selectedEvent) {
  //     this.setState({
  //       // In case we click on "Create Event" (hence no selectedEvent) we want event: emptyEvent
  //       event: nextProps.selectedEvent || emptyEvent
  //     });
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.selectedEvent !== prevProps.selectedEvent) {
      this.setState({ event: this.props.selectedEvent || emptyEvent });
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    // if state.event has an id, we know that it's already been created
    // New events don't have Ids at this point
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
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
            <input
              name="title"
              value={this.state.event.title}
              onChange={this.onInputSubmit}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={this.state.event.date}
              onChange={this.onInputSubmit}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={this.state.event.city}
              onChange={this.onInputSubmit}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={this.state.event.venue}
              onChange={this.onInputSubmit}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={this.state.event.hostedBy}
              onChange={this.onInputSubmit}
              placeholder="Enter the name of person hosting"
            />
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
