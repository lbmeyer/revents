import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import EventListItem from "./EventListItem";

class EventList extends Component {
  static propTypes = {
    events: PropTypes.array
  }

  render() {
    const { events } = this.props;
    console.log({ events });
    return (
      <Fragment>
        <h1>Event List</h1>
        {events.map(event => <EventListItem key={event.id} event={event} />)}
      </Fragment>
    );
  }
}

export default EventList;
