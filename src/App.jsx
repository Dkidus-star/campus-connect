import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />

      {/* Removed top padding to allow full-screen hero sections */}
      <main className="flex-grow w-full px-4">
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id" element={<ClubDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
