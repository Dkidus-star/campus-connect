import { useState, useEffect } from "react";
import ClubCard from "../components/ClubCard";

export default function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call with a 1.5-second delay
    const fetchClubs = async () => {
      try {
        setIsLoading(true);

        // Simulated network request delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockData = [
          {
            id: "1",
            name: "Tech Innovators",
            category: "Academic",
            description:
              "A club for students passionate about software development and AI.",
          },
          {
            id: "2",
            name: "Outdoor Adventure",
            category: "Recreation",
            description:
              "Join us for weekend hiking, camping, and climbing trips.",
          },
          {
            id: "3",
            name: "Debate Society",
            category: "Academic",
            description:
              "Hone your public speaking and logical reasoning skills.",
          },
          {
            id: "4",
            name: "Photography Club",
            category: "Arts",
            description: "Capture campus life and learn professional editing.",
          },
        ];

        setClubs(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to load clubs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClubs();
  }, []); // Empty dependency array means this runs once on component mount

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Campus Clubs</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search clubs by name..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Conditional Rendering based on state */}
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <ClubCard
                key={club.id}
                id={club.id}
                name={club.name}
                category={club.category}
                description={club.description}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No clubs found matching your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
