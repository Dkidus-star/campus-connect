import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const foundClub = DUMMY_CLUBS.find((c) => c.id === id);
    setClub(foundClub);
  }, [id]);

  if (!club) {
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
      className="pt-32 pb-20 max-w-4xl mx-auto px-4"
    >
      <Link
        to="/clubs"
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8"
      >
        &larr; Back to Clubs
      </Link>

      <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden border border-gray-100">
        <div className="h-80 bg-gray-50 flex items-center justify-center text-gray-300 text-2xl font-black uppercase tracking-widest">
          {club.name} Image
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
              {club.name}
            </h1>
            <span className="bg-gray-100 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              {club.category}
            </span>
          </div>

          <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">
            {club.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">
                Meeting Info
              </h3>
              <p className="text-gray-500 font-light mb-1">{club.meeting}</p>
              <p className="text-gray-500 font-light">{club.room}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">
                Members
              </h3>
              <p className="text-gray-500 font-light mb-1">
                {club.members} Active Members
              </p>
              <p className="text-gray-500 font-light">{club.interest}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
