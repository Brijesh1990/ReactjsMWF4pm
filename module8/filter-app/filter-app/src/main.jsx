import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Employee from './Employee.jsx'
import SearchApp from './SearchApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Employee /> */}
    <SearchApp />
  </React.StrictMode>,
)
