import { Link } from "react-router-dom";

export default function EventCard({ id, name, date, location, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-500 mt-1 mb-2">
          <span>📅 {date}</span>
          <span>📍 {location}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="shrink-0">
        <Link
          to={`/events/${id}`}
          className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded transition"
        >
          Event Details
        </Link>
      </div>
    </div>
  );
}
