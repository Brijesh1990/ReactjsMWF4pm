import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// nets user panel
import Layout from './Layout';
import Blog from './components/customer/Blog';
import BlogDetails from './components/customer/BlogDetails';
import ShopNow from './components/customer/ShopNow';
import Products from './components/customer/Products';
// nest admin panel
import AdminLayout from './AdminLayout'
import AdminLogin from './components/admin/AdminLogin'
import AddBlogs from './components/admin/AddBlogs'
import ManageBlogs from './components/admin/ManageBlogs'
import AddCategory from './components/admin/AddCategory';
import AddSubCategory from './components/admin/AddSubCategory';
import AddProducts from './components/admin/AddProducts';
import ManageProducts from './components/admin/ManageProducts';
import './assets/admin/css/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
    {/* nest customer panel Route */}
      <Route path='/' element={<Layout />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blogs-details/:id' element={<BlogDetails />} />
      <Route path='/shop-now' element={<ShopNow />} />
      <Route path='/products' element={<Products />} />
       {/* admin panel routing */}
       <Route path='/admin-login' element={<AdminLogin />} />  
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        <Route path='/admin-login/add-blogs' element={<AddBlogs />} />
        <Route path='/admin-login/manage-blogs' element={<ManageBlogs />} />
        <Route path='/admin-login/add-category' element={<AddCategory/>} />
        <Route path='/admin-login/add-subcategory' element={<AddSubCategory/>} />
        <Route path='/admin-login/add-products' element={<AddProducts />} />
        <Route path='/admin-login/manage-products' element={<ManageProducts />} />
        
    </Routes>
   </BrowserRouter>
    
  </React.StrictMode>
);
