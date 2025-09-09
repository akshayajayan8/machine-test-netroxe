import { useEffect, useState } from 'react'
import CustomerDataGrid from './components/CustomerDataGrid'
import CustomerForm from './components/CustomerForm'
import getAllCustomerData from './utils/getCustomerData'
import type { Customer } from './types/Customer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Payments } from './components/Payment'
import { PAGES } from './constants/generic'

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.bills)
  return <>
    <div>

      <button onClick={() => setCurrentPage(PAGES.bills)}>
        Enter Bills
      </button>
      <button onClick={() => setCurrentPage(PAGES.payments)}>
        Enter Payments
      </button>
      {
        currentPage === PAGES.bills ?
          <Home />
          :
          <Payments />
      }
    </div>


  </>
}
export default App;
