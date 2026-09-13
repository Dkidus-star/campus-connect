import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-40 pb-20 flex flex-col justify-center items-center text-center min-h-[80vh]">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6 leading-none uppercase">
        Connect.
        <br />
        Discover.
        <br />
        <span className="text-gray-200">Thrive.</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 font-light tracking-wide">
        Your premier student community portal. Experience campus life through a
        beautifully curated digital lens.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/clubs"
          className="bg-black text-white px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Explore Clubs
        </Link>
        <Link
          to="/events"
          className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium tracking-wide hover:border-black transition-colors duration-300"
        >
          View Events
        </Link>
      </div>
    </div>
  );
}
