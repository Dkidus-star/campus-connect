import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Extended dummy data with meeting details
const DUMMY_CLUBS = [
  {
    id: "1",
    name: "Tech Innovators",
    category: "Academic",
    description:
      "A club for students passionate about software development and AI.",
    meeting: "Weekly on Thursdays at 5:00 PM",
    room: "Student Union, Room 204",
    members: 42,
    interest: "Great for students interested in leadership and networking.",
  },
  {
    id: "2",
    name: "Outdoor Adventure",
    category: "Recreation",
    description: "Join us for weekend hiking, camping, and climbing trips.",
    meeting: "Bi-weekly on Fridays at 3:00 PM",
    room: "Campus Rec Center",
    members: 85,
    interest: "Equipment provided for beginners.",
  },
  {
    id: "3",
    name: "Debate Society",
    category: "Academic",
    description: "Hone your public speaking and logical reasoning skills.",
    meeting: "Mondays at 6:00 PM",
    room: "Library Annex",
    members: 28,
    interest: "Participate in national tournaments.",
  },
  {
    id: "4",
    name: "Photography Club",
    category: "Arts",
    description: "Capture campus life and learn professional editing.",
    meeting: "Wednesdays at 4:30 PM",
    room: "Arts Building, Room 102",
    members: 34,
    interest: "Bring your own camera or borrow one of ours.",
  },
];

export default function ClubDetails() {
  const { id } = useParams(); // Extracts the 'id' from the URL
  const [club, setClub] = useState(null);

  useEffect(() => {
    // Simulate finding the specific club in a database
    const foundClub = DUMMY_CLUBS.find((c) => c.id === id);
    setClub(foundClub);
  }, [id]);

  if (!club) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading club details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/clubs"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Clubs
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
          {club.name} Image
        </div>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{club.name}</h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              {club.category}
            </span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {club.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">
                Meeting Information
              </h3>
              <p className="text-gray-600 text-sm">{club.meeting}</p>
              <p className="text-gray-600 text-sm">{club.room}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">
                Members & Interests
              </h3>
              <p className="text-gray-600 text-sm">
                {club.members} Active Members
              </p>
              <p className="text-gray-600 text-sm mt-1">{club.interest}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
