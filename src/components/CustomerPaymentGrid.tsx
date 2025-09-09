import { useEffect, useState } from "react";
import type { Customer } from "../types/Customer";
import getUserBills from "../utils/getUserBills";
import getTotalBalanceAmount from "../utils/getTotalBalanceAmount";

interface Props {
  userName: string;
}

export default function CustomerPaymentGrid({ userName }: Props) {
  const [customerData, setCustomerData] = useState<Customer[]>([]);
  const [balanceAmount, setBalanceAmount] = useState(0);

  function fetchData() {
    const data = getUserBills(userName);
    setCustomerData(data);
    const totalBalanceAmount = getTotalBalanceAmount(data);
    setBalanceAmount(totalBalanceAmount);
  }

  useEffect(() => {
    fetchData();
  }, [userName]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <button
        onClick={fetchData}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Update Data
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Customer Name
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Bill No
              </th>
              <th className="px-4 py-2 border border-gray-200 text-right">
                Bill Amount
              </th>
              <th className="px-4 py-2 border border-gray-200 text-right">
                Paid Amount
              </th>
              <th className="px-4 py-2 border border-gray-200 text-right">
                Balance Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.length !== 0 ? (
              customerData.map((item) => (
                <tr key={item.billNo} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {item.billNo}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-right">
                    {item.billAmount}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-right">
                    {item.paidAmount}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-right">
                    {item.balanceAmount}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-4 text-center text-gray-500 border border-gray-200"
                >
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-700">
          Total Amount to Pay:
        </p>
        <p className="text-xl font-bold text-red-600">{balanceAmount}</p>
      </div>
    </div>
  );
}
