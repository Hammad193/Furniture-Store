export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-gray-900 mb-4">Sorry!</h1>
        
        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          The URL you are looking for does not exist.
        </p>

        {/* Back to Home Button */}
        <a 
          href="/" 
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
}