import React from 'react'

export default function HeaderApp() {
  return (

        <>
  {/* fashion top header start here */}
  <section id="header">
    <div className="container-fluid" id="page-top">
      <div className="row">
        <div className="col-md-7">
          <p className="ms-5 p-3">Free Shipping on All orders Over $75!</p>
          <p />
        </div>
        <div className="col-md-5">
          <ul className="header-navbar">
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#login">
                Myaccount
              </a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-bs-toggle="dropdown" href="">
                Currency USD
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="">$$ dollar</a>
                </li>
                <li>
                  <a href="">Rs. INR</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/view-cart" className="text-danger">
                <i className="bi bi-cart" /> My Cart(2)
              </a>
            </li>
          </ul>
        </div>
        <div className="search-box p-4 bg-white">
          <form method="post">
            <div className="input-group w-50 mx-auto">
              <input
                type="text"
                name="search"
                placeholder="search products here"
                className="form-control p-3"
              />
              <span className="input-group-text">
                <i className="bi bi-search" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
