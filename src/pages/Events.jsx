import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h1>
      <div className="space-y-4">
        <EventCard
          id="1"
          name="Fall Career Fair"
          date="Oct 15, 2026 - 10:00 AM"
          location="Main Campus Gym"
          description="Connect with top employers offering internships and full-time roles."
        />
        <EventCard
          id="2"
          name="Guest Lecture: Future of AI"
          date="Oct 20, 2026 - 6:00 PM"
          location="Science Auditorium"
          description="An insightful talk from industry leaders on artificial intelligence."
        />
      </div>
    </div>
  );
}
