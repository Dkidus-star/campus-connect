import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "1",
    name: "Fall Career Fair",
    date: "Oct 15, 2026 - 10:00 AM",
    location: "Main Campus Gym",
    description:
      "Connect with top employers offering internships and full-time roles. Don't forget to bring multiple copies of your resume!",
  },
  {
    id: "2",
    name: "Guest Lecture: Future of AI",
    date: "Oct 20, 2026 - 6:00 PM",
    location: "Science Auditorium",
    description:
      "An insightful talk from industry leaders on artificial intelligence. Q&A session to follow.",
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = DUMMY_EVENTS.find((e) => e.id === id);
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading event details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/events"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Events
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.name}</h1>

        <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600 mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="mr-2">📅</span> {event.date}
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span> {event.location}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2 text-lg">
            About this Event
          </h3>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
