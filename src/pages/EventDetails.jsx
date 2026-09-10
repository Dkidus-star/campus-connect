export default function EventDetails() {
  return (
    <div className="max-w-3xl mx-auto">
      <a
        href="/events"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Events
      </a>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Event Name Placeholder
        </h1>

        <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600 mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="mr-2">📅</span> Date & Time Placeholder
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span> Location Placeholder
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2 text-lg">
            About this Event
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Event complete information and description placeholder. Later on,
            this will be dynamically populated based on the specific event ID in
            the URL.
          </p>
        </div>
      </div>
    </div>
  );
}
