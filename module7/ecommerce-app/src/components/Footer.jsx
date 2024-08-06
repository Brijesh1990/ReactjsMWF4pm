import React from 'react'
import visa from '../assets/images/visa.png';
import login from '../assets/images/login_img_c4a81e.png';

export default function Footer() {
  return (
    <>
    <div className="footer mt-3">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <a href="index.html" className="navbar-brand pro-logo text-white">
              Be-pro
            </a>
            <br />
            <a href="#" className="text-white">
              <i className="bi bi-whatsapp ms-1" />
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-twitter ms-1" />
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-instagram ms-1" />
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-snapchat ms-1" />
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-pinterest ms-1" />
            </a>
          </div>
          <div className="col-md-7">
            <ul className="footer-nav-link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Womens</a>
              </li>
              <li>
                <a href="#">Mens</a>
              </li>
              <li>
                <a href="#">Conatct</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
            <p className="text-white ms-5">Subscribe to News</p>
            <div className="input-group  w-75">
              <input
                type="text"
                name="subscribe"
                placeholder="Subscribe Our news"
                className="form-control ms-5"
              />
              <span className="input-group-text">
                <button type="button" className="btn btn-sm border border-0">
                  Subscribe
                </button>
              </span>
            </div>
          </div>
          <div className="col-md-2">
            <h4 className="text-white">Contact Us</h4>
            <p className="text-white mt-4">
              San Francisco, California 400 Castro St, San Francisco, CA (+1)
              686-868-9999
            </p>
            <p className="">
              <img src={visa} />
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* be-pro scroll spy start here */}
    {/* main page closed here */}
    {/* login modal start here */}
    <div className="modal fade" id="log" role="dialog">
      {/* modal dialog box */}
      <div className="modal-dialog" style={{ maxWidth: "65%" }}>
        {/*  modal content */}
        <div className="modal-content p-0 m-0">
          <div className="container m-0 p-0 col-md-12">
            <div className="row">
              <div className="col-md-5 p-5 bg-primary login-img">
                <h1 className="text-white">Looks like you're new here!</h1>
                <p className="text-white">
                  Sign up with your mobile number to get started
                </p>
                <img
                  src={login}
                  className="img-fluid w-75 mt-5"
                />
              </div>
              <div className="col-md-7 m-0 p-3 mt-5">
                <form
                  name="frm"
                  id="frm"
                  encType="multipart/form-data"
                  action="register.html"
                >
                  <h3 className="ms-2">Sign In Form</h3>
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
                  <div className="input-group border border-0 w-75 ms-4 mt-3">
                    <button
                      type="button"
                      name="login"
                      className="btn btn-sm m-0 p-0 w-25 ms-2 bg-dark text-white"
                    >
                      {" "}
                      SignIn
                    </button>
                    <b>
                      <a
                        href="#"
                        className="ms-3"
                        data-bs-toggle="modal"
                        data-bs-target="#frg"
                        data-bs-=""
                        dismiss="modal"
                      >
                        Forget Password
                      </a>
                    </b>
                  </div>
                  <div className="input-group border border-0 w-100 ms-2 mt-3">
                    <b>
                      Don't have an account ?{" "}
                      <a href="/register">Create Account</a>
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
        </div>
      </div>
    </div>
    {/* Forget Password modal start here */}
    <div className="modal fade" id="frg" role="dialog">
      {/* modal dialog box */}
      <div className="modal-dialog" style={{ maxWidth: "65%" }}>
        {/*  modal content */}
        <div className="modal-content p-0 m-0">
          <div className="container m-0 p-0 col-md-12">
            <div className="row">
              <div className="col-md-5 p-5 bg-primary">
                <h1 className="text-white">Forget Password ?</h1>
                <p className="text-white">
                  Sign up with your mobile number to get started
                </p>
                <img
                  src={login}
                  className="img-fluid w-75 mt-5"
                />
              </div>
              <div className="col-md-7 m-0 p-3 mt-5">
                <form
                  name="frm"
                  id="frm"
                  encType="multipart/form-data"
                  action="register.html"
                >
                  <h3 className="ms-2">Forget Your Password ?</h3>
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
                  <div className="input-group border border-0 w-75 ms-4 mt-3">
                    <button
                      type="button"
                      name="forget"
                      className="btn btn-sm m-0 p-0 w-25 ms-2 bg-dark text-white"
                    >
                      {" "}
                      Submit
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
        </div>
      </div>
    </div>
    {/* customer support modal start here */}
    <div className="modal fade" id="support" role="dialog">
      {/* modal dialog box */}
      <div className="modal-dialog" style={{ maxWidth: "80%" }}>
        {/*  modal content */}
        <div className="modal-content p-0 m-0">
          <div className="container m-0 p-0 col-md-12">
            <div className="row">
              <div className="col-md-5 p-5 bg-primary login-img">
                <h1 className="text-white">
                  Looks like want to customer support new here!
                </h1>
                <p className="text-white">Support with Customer</p>
                <img
                  src={login}
                  className="img-fluid w-75 mt-5"
                />
              </div>
              <div className="col-md-7 m-0 p-3 mt-5">
                <form method="post" action="sendemail.php" name="frm" id="frm">
                  <h3 className="ms-2">Customer Support Form</h3>
                  <div className="input-group border border-0 w-75 ms-2 mt-3">
                    <span className="input-group-text border border-0">
                      <i className="bi bi-person-add" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="email"
                      data-bvalidator="required,alpha"
                      placeholder="Name *"
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
                      <i className="bi bi-person-add" />
                    </span>
                    <input
                      type="text"
                      name="phone"
                      id="email"
                      data-bvalidator="required,minlen[10],maxlen[10]"
                      placeholder="Phone *"
                      className="form-control border border-0 border-bottom border-dark"
                    />
                  </div>
                  <div className="input-group border border-0 w-75 ms-2 mt-3">
                    <span className="input-group-text border border-0">
                      <i className="bi bi-person-add" />
                    </span>
                    <select
                      name="subject"
                      id="email"
                      data-bvalidator="required,email"
                      placeholder="Subject *"
                      className="form-control border border-0 border-bottom border-dark"
                    >
                      <option value="">-select subject-</option>
                      <option value="customer care">customer care</option>
                      <option value="return product">Return Product</option>
                    </select>
                  </div>
                  <div className="input-group border border-0 w-75 ms-2 mt-3">
                    <span className="input-group-text border border-0">
                      <i className="bi bi-person-add" />
                    </span>
                    <textarea
                      name="message"
                      id="email"
                      data-bvalidator="required,email"
                      placeholder="Message *"
                      className="form-control border border-0 border-bottom border-dark"
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-group border border-0 w-75 ms-4 mt-3">
                    <button
                      type="submit"
                      name="send"
                      className="btn btn-sm m-0 p-0 w-25 ms-2 bg-dark text-white"
                    >
                      {" "}
                      Send
                    </button>
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
        </div>
      </div>
    </div>
  </>
  
  )
}
