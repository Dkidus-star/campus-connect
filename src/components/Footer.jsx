export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} CampusConnect. All rights reserved.
        </p>
        <p className="text-sm mt-2">Built for the student community.</p>
      </div>
    </footer>
  );
}
