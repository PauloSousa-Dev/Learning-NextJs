import EventList from "@/components/events/event-list/EventList";
import { getFilteredEvents } from "@/helpers/api-util";
import ResultsTitle from "@/components/events/results-title/results-title";
import Button from "@/components/ui/Button/button";
import ErrorAlert from "@/components/ui/error-alert/error-alert";

function getYearAndMonth(slug) {
  const filteredYear = slug[0];
  const filteredMonth = slug[1];
  return {
    numYear: +filteredYear,
    numMonth: +filteredMonth,
  };
}

export async function generateMetadata({ params: { slug } }) {
  if (!slug) return;
  const { numYear, numMonth } = getYearAndMonth(slug);
  return {
    title: title,
    description: `All events for ${numMonth}/${numYear}`,
  };
}

async function FilteredEventsPage({ params: { slug } }) {
  if (!slug) {
    return <p className="center"> Loading...</p>;
  }
  const { numYear, numMonth } = getYearAndMonth(slug);
  if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
    return (
      <>
        <ErrorAlert>
          <p>Invalidate filter. Please adjust yout values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents}></EventList>
    </>
  );
}

export default FilteredEventsPage;
