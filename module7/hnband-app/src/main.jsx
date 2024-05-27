import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/admin/css/style.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// user panel routing
import Layout from './Layout';
import PageNotFound from './components/user/PageNotFound'
// admin panel components
import AdminLayout from './AdminLayout'
import AdminLogin from './components/admin/AdminLogin'
import AddBlogs from './components/admin/AddBlogs'
import ManageBlogs from './components/admin/ManageBlogs'
import './assets/admin/css/style.css'
ReactDOM.createRoot(document.getElementById('hn-band-app')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          {/* customer panel routing  */}
          <Route path='/' element={<Layout />} />
          <Route path='*' element={<PageNotFound />} />
          {/* admin panel routing */}
          
          <Route path='/admin-login' element={<AdminLogin />} />  
          <Route path='/admin-login/dashboard' element={<AdminLayout />} />
          <Route path='/admin-login/add-blogs' element={<AddBlogs />} />
          <Route path='/admin-login/manage-blogs' element={<ManageBlogs />} />
          
      </Routes>
    </Router>
  </React.StrictMode>,
)
