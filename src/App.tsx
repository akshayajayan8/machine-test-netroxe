import { useEffect, useState } from 'react'
import CustomerDataGrid from './components/CustomerDataGrid'
import CustomerForm from './components/CustomerForm'
import getAllCustomerData from './utils/getCustomerData'
import type { Customer } from './types/Customer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Payments } from './components/Payment'

function App() {
  const [data, setData] = useState<Record<string, Customer> | null>(null);
  function fetchData() {
    const data = getAllCustomerData();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
    return<>
    <Home/>
    <Payments/>
    </>
}
    export default App;
