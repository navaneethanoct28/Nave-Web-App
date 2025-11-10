"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-pink-500 text-4xl md:text-5xl font-bold mb-8 text-center">
        Next-Gen Process Mapping & Fit-Gap in Minutes
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => router.push("/questionnaire")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Start Questionnaire
        </button>

        <button
          onClick={() => router.push("/matrix")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          View Sample Fit-Gap Matrix
        </button>
      </div>
    </main>
  );
}
