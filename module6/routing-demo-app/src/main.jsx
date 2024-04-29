import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Home />} /> 
          <Route path='/about-us' element={<About />} />
          <Route path='/our-services' element={<Services />} />
          <Route path='/contact-with-us' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
