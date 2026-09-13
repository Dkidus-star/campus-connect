import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function ClubCard({ id, name, description, category }) {
  // Access global state
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  // Check if this specific club is in the favorites array
  const isFavorite = favorites.includes(id);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col relative">
      {/* Favorite Button (Star) */}
      <button
        onClick={() => toggleFavorite(id)}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-50 transition"
        title="Toggle Favorite"
      >
        {isFavorite ? "⭐" : "☆"}
      </button>

      <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
        Image: {name}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 pr-8">{name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <Link
          to={`/clubs/${id}`}
          className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
