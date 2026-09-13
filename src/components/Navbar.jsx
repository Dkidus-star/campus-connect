import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-semibold"
      : "text-gray-400 hover:text-black transition-colors duration-300";

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.2 }}
      className="flex justify-center pt-6 px-4 w-full z-50 absolute top-0"
    >
      <nav className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-5xl flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tighter text-black"
        >
          CAMPUS<span className="text-gray-300">CONNECT</span>
        </Link>

        <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-bold">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/clubs" className={navLinkClass}>
              Clubs
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={navLinkClass}>
              Resources
            </NavLink>
          </li>
        </ul>

        <Link
          to="/about"
          className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          About Us
        </Link>
      </nav>
    </motion.div>
  );
}
