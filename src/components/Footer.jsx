import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-12 mb-8">
        <div className="mb-10 md:mb-0">
          <h2 className="text-3xl font-black tracking-tighter mb-2">
            CAMPUS<span className="text-gray-500">CONNECT</span>
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-xs">
            Your premier student community portal. Experience campus life
            beautifully.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-bold text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/clubs" className="hover:text-white transition-colors">
            Clubs
          </Link>
          <Link to="/events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center md:text-left text-gray-600 text-xs font-medium uppercase tracking-widest flex flex-col md:flex-row justify-between items-center">
        <span>
          &copy; {new Date().getFullYear()} CampusConnect. All rights reserved.
        </span>
        <span className="mt-4 md:mt-0">Built for the student community.</span>
      </div>
    </footer>
  );
}
