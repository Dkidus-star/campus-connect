import { motion } from "framer-motion";
import EventCard from "../components/EventCard";

export default function Events() {
  const DUMMY_EVENTS = [
    {
      id: "1",
      name: "Fall Career Fair",
      date: "Oct 15, 2026 - 10:00 AM",
      location: "Main Campus Gym",
      description:
        "Connect with top employers offering internships and full-time roles.",
    },
    {
      id: "2",
      name: "Guest Lecture: Future of AI",
      date: "Oct 20, 2026 - 6:00 PM",
      location: "Science Auditorium",
      description:
        "An insightful talk from industry leaders on artificial intelligence.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-6xl mx-auto px-4"
    >
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 uppercase">
          Upcoming <span className="text-gray-200">Events</span>
        </h1>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col space-y-6 max-w-4xl mx-auto px-4"
      >
        {DUMMY_EVENTS.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
