export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-blue-50 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to CampusConnect
        </h1>
        <p className="text-lg text-gray-600">
          Your central hub for campus clubs, events, and resources.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Featured Items Placeholder
        </h2>
        <div className="h-32 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center rounded">
          Content will populate here
        </div>
      </section>
    </div>
  );
}
