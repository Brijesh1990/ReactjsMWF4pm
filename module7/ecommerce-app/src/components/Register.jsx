import React from 'react'
import login from '../assets/images/login_img_c4a81e.png';
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function Register() {
  return (
<>
  {/* be-pro hero-section start here */}
  {/* be-pro content start here */}
  <NavbarApp />
  <section id="content">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 p-5 bg-primary">
          <h1 className="text-white">Looks like you're new here!</h1>
          <p className="text-white">
            Sign up with your mobile number to get started
          </p>
          <img
            src={login}
            className="img-fluid w-75 mt-5"
          />
        </div>
        <div className="col-md-8 m-0 p-3 mt-5">
          <form
            name="frm"
            id="frm"
            encType="multipart/form-data"
            action="register.html"
          >
            <h3 className="ms-2">Sign Up Form</h3>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="fname"
                id="fname"
                data-bvalidator="required,email"
                placeholder="Firstname *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="lname"
                id="lname"
                data-bvalidator="required,email"
                placeholder="Lastname *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="email"
                id="email"
                data-bvalidator="required,email"
                placeholder="Email *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-lock" />
              </span>
              <input
                type="password"
                name="pwd"
                id="pwd"
                placeholder="Password *"
                data-bvalidator="required,minlen[4],maxlen[12]"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-lock" />
              </span>
              <input
                type="password"
                name="cpwd"
                id="cpwd"
                placeholder="confirm Password *"
                data-bvalidator="required,minlen[4],maxlen[12]"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <button
                type="button"
                name="login"
                className="btn btn-sm m-0 p-0 w-25 ms-2 bg-dark text-white"
              >
                {" "}
                SignUp
              </button>
              <button
                type="reset"
                name="res"
                className="btn btn-sm m-0 p-0 w-25 ms-2 bg-danger text-white"
              >
                {" "}
                Reset
              </button>
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <b>
                Already have an account ?{" "}
                <a href="#" data-bs-target="#log" data-bs-toggle="modal">
                  Login here
                </a>
              </b>
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <p className="text-center ms-2 fs-4">
                Like us On <i className="bi bi-facebook text-primary" />
                <i className="bi bi-twitter text-primary" />
                <i className="bi bi-google text-danger" />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</>

  )
}
