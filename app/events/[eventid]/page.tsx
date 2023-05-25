import { getEventById } from "@/dummy-data";
import EventSummary from "@/components/events/event-list/event-detail/event-summary";
import EventLogistics from "@/components/events/event-list/event-detail/event-logistics";
import EventContent from "@/components/events/event-list/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
function EventDetailPage({ params: { eventid } }) {
  const event = getEventById(eventid);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  const { description, title, date, location, image } = event;
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
