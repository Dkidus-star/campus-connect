import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FavoritesContext } from "../context/FavoritesContext";

export default function ClubCard({ id, name, description, category, image }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(id);

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
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col relative group transition-all"
    >
      <button
        onClick={() => toggleFavorite(id)}
        className="absolute top-8 right-8 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-all text-xl"
        title="Toggle Favorite"
      >
        {isFavorite ? "⭐" : "☆"}
      </button>

      <div className="h-48 rounded-2xl overflow-hidden mb-6 bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block">
          {category}
        </span>
        <h3 className="text-2xl font-black tracking-tight text-black mb-3 pr-8">
          {name}
        </h3>
        <p className="text-gray-500 font-light mb-8 flex-grow">{description}</p>

        <Link
          to={`/clubs/${id}`}
          className="inline-flex justify-center items-center bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
