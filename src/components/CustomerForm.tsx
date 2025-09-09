import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Customer } from "../types/Customer";
import { initialValuesCustomer } from "../constants/initialFormValues";
import validateCustomerData from "../utils/validateCustomerData";
import saveCustomerData from "../utils/saveCustomerData";

export default function CustomerForm() {
  const [customerData, setCustomerData] = useState<Customer>(initialValuesCustomer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "billAmount") {
      setCustomerData((prev) => ({
        ...prev,
        billAmount: parseInt(value),
        balanceAmount: parseInt(value),
      }));
    } else {
      setCustomerData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    try {
      e.preventDefault();
      validateCustomerData(customerData);
      saveCustomerData(customerData);
      alert("Customer data saved");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-5"
    >
      <h1 className="text-2xl font-bold text-center text-blue-600">
        Customer Form
      </h1>

      {/* Customer Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Customer Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Bill No */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Bill No</label>
        <input
          type="text"
          name="billNo"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Bill Amount */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Bill Amount
        </label>
        <input
          type="text"
          name="billAmount"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}
