import EventList from "@/components/events/event-list/EventList";
import { getAllEvents } from "@/dummy-data";
import EventsSearch from "@/components/events/events-search/events-search";

export const metadata = {
  title: "All events",
  description: "Find a lot of great events that allow you to evolve...",
};

export default function AllEventsPage() {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}
