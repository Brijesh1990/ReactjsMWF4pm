import React from 'react'

export default function AdminLogin() {
  return (

    <>
    
    <div className="col-md-8 mt-2 frm">
    <div className="row">
      <div className="col-md-6 login-frm">
        <h3 className="p-3">Ecommerce Admin Login</h3>
        <img
          src="https://assets-v2.lottiefiles.com/a/567e9d6a-116d-11ee-adcc-c362dfe23881/hrMdhw3flV.gif"
          className="img-fluid w-75"
        />
      </div>
      <div className="col-md-6">
        <h3 className="bg-transprent w-100 mx-auto">
          Admin Login <span className="bi bi-person" />
        </h3>
        <form>
          <div className="input-group mt-3">
            <input
              type="text"
              name="email"
              placeholder="email"
              required=""
              className="form-control"
            />
          </div>
          <div className="input-group mt-3">
            <input
              type="password"
              name="pass"
              placeholder="password"
              required=""
              className="form-control"
            />
          </div>
          <div className="input-group mt-3">
            <input
              type="submit"
              name="email"
              className="btn btn-lg btn-info"
              required=""
              defaultValue="SignIn"
            />
            <b className="ms-2">
              <a href="#">Forget Password ?</a>
            </b>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  </>
  )
}
