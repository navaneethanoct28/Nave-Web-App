export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-pink-500 p-10">
      <h1 className="text-4xl font-bold mb-6">
        Next-Gen Process Mapping & Fit-Gap in Minutes 🚀
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Transform manual Fit-Gap workshops into a streamlined, AI-powered experience.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700">
          Start Questionnaire
        </button>
        <button className="border border-pink-600 text-pink-500 px-6 py-3 rounded-xl hover:bg-pink-600 hover:text-white">
          View Sample Fit-Gap Matrix
        </button>
      </div>
    </main>
  );
}
