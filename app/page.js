import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list/EventList";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export const metadata = {
  title: "NextJS Events",
  description: "Find a lot of great events that allow you to evolve...",
};

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
