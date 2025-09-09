import { useState, useEffect } from "react";
import type { Customer } from "../types/Customer";
import getAllCustomerData from "../utils/getCustomerData";
import CustomerDataGrid from "./CustomerDataGrid";
import CustomerForm from "./CustomerForm";

export default function Home() {
  const [data, setData] = useState<Record<string, Customer> | null>(null);

  function fetchData() {
    const data = getAllCustomerData();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Customer Form */}
      <CustomerForm />

      {/* Refresh Button */}
      <button
        onClick={fetchData}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md font-semibold hover:bg-blue-700 transition duration-200"
      >
        Refresh Data
      </button>

      {/* Data Grid Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Records</h2>
        <CustomerDataGrid data={data} />
      </div>
    </div>
  );
}
