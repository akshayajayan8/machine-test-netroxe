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
  }, [])
  return <div>
    <CustomerForm />
    <button onClick={fetchData}>
      Update Data
    </button>
    <CustomerDataGrid data={data} />

  </div>
}