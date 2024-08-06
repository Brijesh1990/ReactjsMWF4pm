import React from 'react'

export default function AdminHeader() {
  return (
<div className="admin-header container-fluid border  border-bottom-1 border-dark m-0 p-0">
  <div className="row">
    <div className="admin-logo col-md-3 bg-dark p-3">
      <span className="text-white ms-4">
        Admin Dashboard{" "}
        <button
          type="button"
          className="btn btn-sm border border-0 text-white ms-5"
        >
          <span className="bi bi-grid" />
        </button>
      </span>
    </div>
    <div className="search-box col-md-6 p-3">
      <div className="input-group">
        <input
          type="search"
          name="search"
          placeholder="search anything here"
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-sm btn-dark bg-dark m-0 p-0 border border-0"
        >
          <span className="input-group-text bg-dark border border-0">
            <i className="bi bi-search text-white" />
          </span>
        </button>
      </div>
    </div>
    <div className="admin-notification col-md-3 p-2 mt-0">
      <button type="button" className="btn btn-sm btn-danger text-white">
        <span className="badge bg-danger start-0 top-0 rounded-pill">
          <span className="bi bi-person-add">0</span>
        </span>
      </button>
      <button type="button" className="btn btn-sm btn-dark text-white ms-1">
        <span className="badge bg-dark start-0 top-0 rounded-pill">
          <span className="bi bi-bell">10</span>
        </span>
      </button>
      {/* dropdown of button */}
      <button className="btn btn-sm border border-0 mt-1">
        <ul className="header-link">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
              welcome :Admin
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">
                  <span className="bi bi-person" /> Manage Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-lock" /> Change Password
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-bell" /> Manage Notifications
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-truck" /> Manage Orders
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi bi-power" /> Logout here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </button>
    </div>
  </div>
</div>

  )
}
