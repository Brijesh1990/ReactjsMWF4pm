import React from 'react'

export default function AdminHeader() {
  return (

    <>
    
    <div className="container-fluid border-bottom p-3 admin-header">
    <div className="row">
      <div className="col-md-2">
        <span className="bi bi-grid-3x3-gap text-danger fs-4" /> Dashboard
      </div>
      <div className="col-md-7 ms-3">
        <div className="input-group">
          
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="form-control"
          />
          <span className="input-group-text bg-light">
            <span className="bi bi-search" />
          </span>
        </div>
      </div>
      <div className="col-md-2 ms-3">
        <div className="input-group">
          <span className="bi bi-bell fs-4"/>
          <span className="bi bi-person-add fs-6 ms-5">
            Welcome &nbsp;
          </span>
        
        </div>
      </div>
    </div>
  </div>
  </>

  )
}
