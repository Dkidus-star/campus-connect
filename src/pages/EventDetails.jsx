import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <div className="pt-40 pb-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-3xl mx-auto px-4"
    >
      <Link
        to="/events"
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8"
      >
        &larr; Back to Events
      </Link>

      <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-8">
          {event.name}
        </h1>

        <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500 mb-10 bg-gray-50 p-6 rounded-2xl">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-2xl mr-3">📅</span> {event.date}
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-3">📍</span> {event.location}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">
            About this Event
          </h3>
          <p className="text-gray-500 font-light text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
