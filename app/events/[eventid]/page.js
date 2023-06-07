import { getAllEvents, getEventById } from "@/helpers/api-util";
import EventSummary from "@/components/events/event-list/event-detail/event-summary";
import EventLogistics from "@/components/events/event-list/event-detail/event-logistics";
import EventContent from "@/components/events/event-list/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
import Comments from "@/components/input/comments";

export async function generateMetadata({ params: { eventid } }) {
  const event = await getEventById(eventid);
  const { title } = event;
  return {
    title: title,
    description: "Find a lot of great events that allow you to evolve...",
  };
}

async function EventDetailPage({ params: { eventid } }) {
  const event = await getEventById(eventid);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  const { id, description, title, date, location, image } = event;

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
      <Comments eventId={id} />
    </>
  );
}

export async function generateStaticParams() {
  const allEvents = await getAllEvents();

  return allEvents.map((event) => ({
    eventid: event.id,
  }));
}

export default EventDetailPage;
