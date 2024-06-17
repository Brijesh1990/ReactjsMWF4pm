import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterApp() {
  return (
    <>
    {/* fashion footer start here */}
    <div className="footer p-5">
      <div className="row">
        <div className="col-md-9 mt-3">
          <div className="row">
            <div className="col-md-4">
              <ul className="footer-link">
                <li>
                  <Link to="" className="">
                    <h4>Shops</h4>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="">New In</Link>
                </li>
                <li>
                  <Link to="">Women</Link>
                </li>
                <li>
                  <Link to="">Men</Link>
                </li>
                <li>
                  <Link to="">Bags &amp; assesories</Link>
                </li>
                <li>
                  <Link to="">Tops brands</Link>
                </li>
                <li>
                  <Link to="">Sale &amp; special offers</Link>
                </li>
                <li>
                  <Link to="">Lookbook</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="footer-link">
                <li>
                  <Link to="" className="">
                    <h4>Informations</h4>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="">New In</Link>
                </li>
                <li>
                  <Link to="">Women</Link>
                </li>
                <li>
                  <Link to="">Men</Link>
                </li>
                <li>
                  <Link to="">Bags &amp; assesories</Link>
                </li>
                <li>
                  <Link to="">Tops brands</Link>
                </li>
                <li>
                  <Link to="">Sale &amp; special offers</Link>
                </li>
                <li>
                  <Link to="">Lookbook</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="footer-link">
                <li>
                  <Link to="" className="">
                    <h4>Customer service</h4>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link to="">New In</Link>
                </li>
                <li>
                  <Link to="">Women</Link>
                </li>
                <li>
                  <Link to="">Men</Link>
                </li>
                <li>
                  <Link to="">Bags &amp; assesories</Link>
                </li>
                <li>
                  <Link to="">Tops brands</Link>
                </li>
                <li>
                  <Link to="">Sale &amp; special offers</Link>
                </li>
                <li>
                  <Link to="">Lookbook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <h4 className="text-white">Newsletter</h4>
          <p className="text-white">Signup up for free newsletter</p>
          <input
            type="text"
            name="email"
            placeholder="Type your email"
            className="border border-1 border-white form-control bg-dark"
          />
          <input
            type="submit"
            name="subscribe"
            defaultValue="Subscribe"
            className="btn btn-sm w-100 subscribe-btn mt-2"
          />
          <p>
            <i className="bi bi-facebook" />
            <i className="bi bi-youtube" />
            <i className="bi bi-instagram" />
            <i className="bi bi-whatsapp" />
            <i className="bi bi-twitter" />
          </p>
        </div>
      </div>
    </div>
    <div className="bg-dark p-5 text-white text-center">
      copyright@2023 All right reserved company
      <div className="scroll-top page-scroll visible-md visible-sm visible-lg visible-xs float-end subscribe-btn rounded-circle p-2">
        <Link
          className="btn  text-white fs-4"
          to="#page-top"
          style={{ opacity: "0.4" }}
        >
          <i className="bi bi-arrow-up-circle fs-5" />
        </Link>
      </div>
    </div>
  </>
  
  )
}
