import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './assets/customers/css/style.css'
// user panel components
import Layout from './Layout'
import CartApp from './components/customers/CartApp'
// admin panel components
ReactDOM.createRoot(document.getElementById('ecomm-app')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/view-cart' element={<CartApp />} />
       
      </Routes>
    </Router>
  </React.StrictMode>,
)
