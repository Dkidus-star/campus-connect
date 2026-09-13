import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function EventCard({ id, name, date, location, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100 },
        },
      }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all group"
    >
      <div className="flex-grow">
        <h3 className="text-3xl font-black tracking-tight text-black mb-3">
          {name}
        </h3>

        <div className="flex flex-col sm:flex-row sm:space-x-6 text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
          <span className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="text-lg">📅</span> {date}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-lg">📍</span> {location}
          </span>
        </div>

        <p className="text-gray-500 font-light">{description}</p>
      </div>

      <div className="shrink-0 md:ml-4 mt-4 md:mt-0">
        <Link
          to={`/events/${id}`}
          className="inline-flex justify-center items-center border-2 border-black text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 w-full md:w-auto"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
