import React from 'react'
import ReactDOM from 'react-dom/client'
// import EmployeeProps from './components/EmployeeProps'
// import Employee from './components/EmployeeClassApp'
import EmployeeList from './components/EmployeeList'
import GallryApp from './components/GallryApp';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <EmployeeProps name="Brijesh" /> */}
{/* 
    <Employee name="Brijesh kumar pandey" /> */}
    {/* <EmployeeList /> */}

    <GallryApp />

  </React.StrictMode>,
)
