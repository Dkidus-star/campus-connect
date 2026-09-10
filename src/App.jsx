import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mt-10">
          Welcome to CampusConnect
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Page content will be injected here.
        </p>
      </main>

      <Footer />
    </div>
  );
}
