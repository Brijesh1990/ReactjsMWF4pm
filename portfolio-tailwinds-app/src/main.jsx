import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './Contact'
import DeleteContact from './DeleteContact'
import 'bootstrap-icons/font/bootstrap-icons.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/contact-us' element={<Contact />}></Route>
      <Route path='/delete-contact/:id' element={<DeleteContact />}></Route>
    </Routes>
   </Router>
  </React.StrictMode>,
)
