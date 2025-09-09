import { useState, type ChangeEvent } from "react";
import getAllUserName from "../utils/getAllUserNames";
import CustomerPaymentGrid from "./CustomerPaymentGrid";
import { updateBills } from "../utils/updateBills";

export function Payments() {
  const [users, setUserNames] = useState<string[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [listVisible, setListVisible] = useState(false);
  const [amount, setAmount] = useState("");

  const toggleUserList = () => {
    const users = getAllUserName();
    setUserNames(users);
    setListVisible((prev) => !prev);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleMakePayment = () => {
    try {
      if (!selectedUser || !amount)
        throw new Error("User and amount are required");
      updateBills(selectedUser, parseInt(amount));
      alert("Payment successful");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-600">Payment Form</h1>

      {/* User Selector */}
      <div className="relative w-full max-w-md">
        <button
          onClick={toggleUserList}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-left font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {selectedUser ?? "Select user"}
        </button>

        {listVisible && (
          <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
            {users && users.length !== 0 ? (
              users.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSelectedUser(item);
                    setListVisible(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-blue-100 transition-colors"
                >
                  {item}
                </button>
              ))
            ) : (
              <p className="text-gray-500 italic px-4 py-2">No Users</p>
            )}
          </div>
        )}
      </div>

      {/* Amount Input */}
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Pay Button */}
      <button
        onClick={handleMakePayment}
        className="w-full max-w-md bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
      >
        Pay
      </button>

      {/* Payment Data Grid */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">
        <CustomerPaymentGrid userName={selectedUser ?? ""} />
      </div>
    </div>
  );
}
