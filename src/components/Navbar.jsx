import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // Helper function to apply active styles
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-200 font-bold underline underline-offset-4"
      : "hover:text-blue-200 transition";

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          CampusConnect
        </Link>
        <ul className="flex space-x-6 font-medium">
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
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
