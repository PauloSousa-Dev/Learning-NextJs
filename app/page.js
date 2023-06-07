import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list/EventList";
import NewsletterRegistration from "@/components/input/newsletter-registration";

async function HomePage() {
  const featuredEvents = await getFeaturedEvents();
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
