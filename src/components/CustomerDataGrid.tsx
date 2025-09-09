import type { Customer } from "../types/Customer";

interface Props {
  data: Record<string, Customer> | null;
}

export default function CustomerDataGrid({ data }: Props) {
  const customerData = data ? Object.values(data) : [];

  return (
    <div className="overflow-x-auto">
      {customerData.length !== 0 ? (
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Head */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Bill No</th>
              <th className="px-4 py-2 text-left">Bill Amount</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {customerData.map((item) => (
              <tr
                key={item.billNo}
                className="hover:bg-blue-50 transition-colors"
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.billNo}</td>
                <td className="px-4 py-2">₹{item.billAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 italic py-4">No Data</p>
      )}
    </div>
  );
}
