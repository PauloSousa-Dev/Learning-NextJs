"use client";
import EventList from "@/components/events/event-list/EventList";
import { useRouter } from "next/navigation";
import { getAllEvents } from "@/dummy-data";
import EventsSearch from "@/components/events/events-search/events-search";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
