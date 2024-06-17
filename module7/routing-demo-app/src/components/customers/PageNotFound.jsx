import React from 'react'
import pagenotfound from '../../assets/customers/images/404.gif'
import HeaderApp from './HeaderApp'
import NavbarApp from './NavbarApp'
export default function PageNotFound() {
  return (
    <>
    <HeaderApp />
    <NavbarApp />
      {/* fashion content start here */}
      <section id="content">
        <div className="card mt-5 container p-5">
          <div className="card-header bg-white">
            <h4>404 page is not found</h4>
          </div>
          <div className="card-body">
             
             <img src={pagenotfound} alt='404' className='img-fluid w-50' />

          </div>
          </div>
          </section>
          </>
  )
}
