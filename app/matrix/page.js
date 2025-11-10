"use client";
import { useRouter } from "next/navigation";

export default function MatrixPage() {
  const router = useRouter();

  const data = [
    {
      process: "Quotation Management",
      fit: "Standard",
      gap: "Minor UI Change",
    },
    {
      process: "Contract Billing",
      fit: "Custom",
      gap: "Need fixed rate logic",
    },
    {
      process: "Customer Credit Check",
      fit: "Standard",
      gap: "-",
    },
    {
      process: "Rental Price Escalation",
      fit: "Custom",
      gap: "Requires custom logic",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Sample Fit-Gap Matrix
      </h1>

      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-left px-4 py-2 border-b">Process Step</th>
            <th className="text-left px-4 py-2 border-b">Fit Type</th>
            <th className="text-left px-4 py-2 border-b">Gap Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{row.process}</td>
              <td className="px-4 py-2">{row.fit}</td>
              <td className="px-4 py-2">{row.gap}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={() => router.push("/")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
