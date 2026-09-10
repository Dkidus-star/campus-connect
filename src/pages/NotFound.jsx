export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-600 hover:underline">
        Return Home
      </a>
    </div>
  );
}
