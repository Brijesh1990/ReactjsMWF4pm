import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pagenotfound from '../assets/images/404.gif'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function PageNotFound() {
  return (
    <div>
    <NavbarApp />
<section id="be-pro-content" className="p-5 mt-3">
{/* <!-- popular products --> */}

<div className="container col-md-9">
<div className="row justify-content-evenly">
<img src={pagenotfound} alt='page not found' className='img-fluid w-75' />
<p className='text-center mt-5'><Link to="/"><Button className='btn btn-lg btn-danger text-center'>Click to Go Home Page</Button></Link></p>
</div>
</div>
<div className="clearfix"></div>
</section>
<Footer />
</div>
  )
}
