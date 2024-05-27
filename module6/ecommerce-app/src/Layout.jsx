  import React from 'react'
import { Link,Outlet } from 'react-router-dom'
/* what is react router : navigate one page to another page i.e called routing
   React does not provides default routing libraries
   React install npm react-router-dom --save
   
   BroswerRouter as Router :BroswerRouter is an parent of Route
   Routes :Routes is a parent of Route
   Route : Route is multiple to load page path via its element 
   Navlink ot LInk : its is a replacement of <a href="">Home</a>
                     <Link to="">Home</Link>                        
   

   OutLet  : Outlet is an module that is show a current page load
   
   *        : This is search all pages if page not found return 404 



*/

export default function Layout() {
  return (
    <div>
    <nav className='nav navbar navbar-expand-md bg-dark'>
        <ul className='navbar-link'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-with-us">Contact</Link></li>
            <li><Link to="/create-account">CreateAccount</Link></li>
        </ul>
    </nav>
    <Outlet />
    </div>
  )
}
