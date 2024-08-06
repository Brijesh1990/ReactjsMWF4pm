import React from 'react'

export default function AdminFooter() {
  return (
    <>
  <div className="admin-footer" />
  {/* logout modal here */}
  <div className="modal fade" id="lg" role="dialog">
    {/* modal dialog box */}
    <div className="modal-dialog">
      {/* logout modal content */}
      <div className="modal-content p-4">
        <h3 className="text-center text-danger p-3">
          Are you sure to Logout ?{" "}
          <button
            type="button"
            className="btn btn-sm btn-danger border border-0 ms-5"
            data-bs-dismiss="modal"
          >
            ×
          </button>
        </h3>
        <p className="text-center mt-3">
          {/* <a href="#" onClick={logout_btn}> */}
            <button
              type="button"
              id="btn1"
              className="btn btn-sm btn-success text-white border border-0"
            >
              Ok
            </button>
          {/* </a> */}
          <button
            type="button"
            data-bs-dismiss="modal"
            id="btn2"
            className="btn btn-sm btn-danger text-white border border-0 ms-2"
          >
            Cancel
          </button>
        </p>
      </div>
    </div>
  </div>
</>

  )
}
