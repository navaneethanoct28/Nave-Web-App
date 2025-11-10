"use client";
import { useRouter } from "next/navigation";

export default function QuestionnairePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Functional Fit-Gap Questionnaire
      </h1>

      <p className="text-gray-700 mb-6">
        Please review each question and mark your business alignment.
      </p>

      <form className="space-y-6 max-w-3xl">
        <div>
          <label className="block font-medium mb-1">
            1️⃣ Does your current system support contract-based billing?
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2">
            <option>Select one</option>
            <option>Yes - Fully</option>
            <option>Partially</option>
            <option>No - Gap</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            2️⃣ Is pricing logic based on fixed rate or usage?
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2">
            <option>Select one</option>
            <option>Fixed Rate</option>
            <option>Usage Based</option>
            <option>Both Supported</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            3️⃣ Do you need integration with Salesforce for quotation management?
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2">
            <option>Select one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => alert("Responses saved! (Demo only)")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}
