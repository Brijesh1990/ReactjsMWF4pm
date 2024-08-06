import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css';
import './assets/admin/css/style.css';
// customers module
import Layout from './Layout'
import Contact from './components/Contact'
import Products from './components/Products'
import Cart from './components/Cart'
import DeleteCart from './components/DeleteCart'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'
// admin panel routing here
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout'
import AddCategory from './components/admin/AddCategory'
import ManageCategory from './components/admin/ManageCategory'
import AddSubCategory from './components/admin/AddSubCategory'
import ManageSubCategory from './components/admin/ManageSubCategory'
import DeleteCategory from './components/admin/DeleteCategory'
import EditCategory from './components/admin/EditCategory'
import DeleteSubCategory from './components/admin/DeleteSubCategory'
import AddProducts from './components/admin/AddProducts'
import ManageProducts from './components/admin/ManageProducts'
import EditProducts from './components/admin/EditProducts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/view-cart' element={<Cart />} />
        <Route path='/delete-cart/:id' element={<DeleteCart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/checkout-here' element={<Checkout />} />


        
        {/* admin routing  */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/admin-dashboard' element={<AdminLayout />} />
        <Route path='/admin-login/add-category' element={<AddCategory />} />
        <Route path='/admin-login/manage-category' element={<ManageCategory />} />
        <Route path='/admin-login/delete-category/:id' element={<DeleteCategory />} />
        <Route path='/admin-login/edit-category/:id' element={<EditCategory />} />
        <Route path='/admin-login/add-subcategory' element={<AddSubCategory />} />
        <Route path='/admin-login/manage-subcategory' element={<ManageSubCategory />} />
        <Route path='/admin-login/manage-subcategory' element={<ManageCategory />} />
        <Route path='/admin-login/delete-subcategory/:id' element={<DeleteSubCategory />} />
        <Route path='/admin-login/add-products' element={<AddProducts />} />
        <Route path='/admin-login/manage-products' element={<ManageProducts />} />
        <Route path='/admin-login/edit-products/:id' element={<EditProducts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
