import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarApp() {
  return (
    <>
  {/* fashion navbar start here */}
  <nav className="navbar nav navbar-expand-md bg-dark p-1">
    {/* logo here */}
    <Link to="index.html" className="navbar-brand">
      <h1 className="ms-5">Fashion</h1>
    </Link>
    {/* navbar listing */}
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#btn-togg"
    >
      <i className="bi bi-grid text-white border border-1 border-white p-2" />
    </button>
    <div className="collapse navbar-collapse" id="btn-togg">
      <ul className="navbar-link">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="mens.html">Men</Link>
        </li>
        <li>
          <Link to="womens.html">Women</Link>
        </li>
        <li>
          <Link to="assesories.html">Assesories</Link>
        </li>
        <li>
          <Link to="footwear.html">Footwear</Link>
        </li>
        <li>
          <Link to="sales.html">Sales</Link>
        </li>
        <li>
          <Link to="blogs.html">Blog</Link>
        </li>
        <li>
          <Link to="contact.html">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
</>

  )
}
