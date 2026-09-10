export default function ClubDetails() {
  return (
    <div className="max-w-3xl mx-auto">
      <a
        href="/clubs"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Clubs
      </a>
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          Club Image Placeholder
        </div>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Club Name Placeholder
            </h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              Category
            </span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Detailed club description placeholder. This area will contain the
            full text explaining what the club does, its goals, and why students
            should join.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">
                Meeting Information
              </h3>
              <p className="text-gray-600 text-sm">
                Weekly on Thursdays at 5:00 PM
              </p>
              <p className="text-gray-600 text-sm">Student Union, Room 204</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">
                Members & Interests
              </h3>
              <p className="text-gray-600 text-sm">42 Active Members</p>
              <p className="text-gray-600 text-sm mt-1">
                Great for students interested in leadership and networking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
