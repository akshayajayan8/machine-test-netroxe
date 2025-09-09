// import { useEffect, useState } from 'react'
// import Home from './components/Home'
// import { Payments } from './components/Payment'
// import { PAGES } from './constants/generic'

// function App() {
//   const [currentPage, setCurrentPage] = useState(PAGES.bills)
//   return <>
//     <div>

//       <button onClick={() => setCurrentPage(PAGES.bills)}>
//         Enter Bills
//       </button>
//       <button onClick={() => setCurrentPage(PAGES.payments)}>
//         Enter Payments
//       </button>
//       {
//         currentPage === PAGES.bills ?
//           <Home />
//           :
//           <Payments />
//       }
//     </div>


//   </>
// }
// export default App;


import { useState } from "react";
import Home from "./components/Home";
import { Payments } from "./components/Payment";
import { PAGES } from "./constants/generic";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.bills);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Billing & Payments
      </h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setCurrentPage(PAGES.bills)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow 
          ${
            currentPage === PAGES.bills
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-100 border border-gray-300"
          }`}
        >
          Enter Bills
        </button>

        <button
          onClick={() => setCurrentPage(PAGES.payments)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow 
          ${
            currentPage === PAGES.payments
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-100 border border-gray-300"
          }`}
        >
          Enter Payments
        </button>
      </div>

      {/* Page Content */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        {currentPage === PAGES.bills ? <Home /> : <Payments />}
      </div>
    </div>
  );
}

export default App;
