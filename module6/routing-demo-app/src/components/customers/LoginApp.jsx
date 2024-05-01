import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginApp() {
  return (
    <>
  {/* fashion signin modal start here */}
  <div className="modal fade" id="login" role="dialog">
    <div className="modal-dialog" style={{ minWidth: "50%" }}>
      <div className="modal-content">
        <div className="row">
          <div className="col-md-5 p-5 bg-dark text-white">
            <h6>Create Account here</h6>
            <hr className="border border-1 w-50 border-white" />
            <img src="https://media.tenor.com/D68fgAJz0tcAAAAM/ekrut-start-up.gif" />
          </div>
          <div className="col-md-7 p-5">
            <h6>
              Login Form{" "}
              <button
                type="button"
                className="btn btn-sm btn-dark text-white float-end"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </h6>
            <hr className="border border-1 w-50 border-dark" />
            <form method="post">
              <div className="input-group mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email *"
                  required=""
                  className="form-control"
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  required=""
                  className="form-control"
                />
              </div>
              <div className="input-group mt-2">
                <Link to="#">forget Password</Link>
              </div>
              <div className="input-group mt-2">
                <input
                  type="submit"
                  name="login"
                  defaultValue="SignIn"
                  placeholder="Email *"
                  className="btn btn-dark text-white w-100"
                />
              </div>
              <div className="input-group mt-2">
                Don't have an account ?
                <Link to="register.html">create account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
