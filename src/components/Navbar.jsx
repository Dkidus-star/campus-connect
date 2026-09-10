export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-wide">
          CampusConnect
        </a>
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="/" className="hover:text-blue-200 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/clubs" className="hover:text-blue-200 transition">
              Clubs
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-blue-200 transition">
              Events
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-blue-200 transition">
              Resources
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-200 transition">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
