import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClubCard from "../components/ClubCard";

import club1Img from "../assets/club1.jpg";
import club2Img from "../assets/club2.jpg";
import club3Img from "../assets/club3.jpg";
import club4Img from "../assets/club4.jpg";

export default function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = [
          {
            id: "1",
            name: "Tech Innovators",
            category: "Academic",
            description:
              "A club for students passionate about software development and AI.",
            image: club1Img,
          },
          {
            id: "2",
            name: "Outdoor Adventure",
            category: "Recreation",
            description:
              "Join us for weekend hiking, camping, and climbing trips.",
            image: club2Img,
          },
          {
            id: "3",
            name: "Debate Society",
            category: "Academic",
            description:
              "Hone your public speaking and logical reasoning skills.",
            image: club3Img,
          },
          {
            id: "4",
            name: "Photography Club",
            category: "Arts",
            description: "Capture campus life and learn professional editing.",
            image: club4Img,
          },
        ];

        setClubs(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to load clubs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-6xl mx-auto px-4"
    >
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 uppercase">
          Explore <span className="text-gray-200">Clubs</span>
        </h1>

        <div className="relative w-full max-w-xl px-4">
          <input
            type="text"
            placeholder="Search clubs by name..."
            className="w-full p-5 pl-8 pr-12 text-lg bg-white border border-gray-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-black transition-all font-light"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 font-medium">{error}</div>
      )}

      {!isLoading && !error && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <ClubCard
                key={club.id}
                id={club.id}
                name={club.name}
                category={club.category}
                description={club.description}
                image={club.image}
              />
            ))
          ) : (
            <p className="text-gray-400 font-light text-xl col-span-full text-center">
              No clubs found.
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
