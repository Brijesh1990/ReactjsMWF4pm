import React from 'react'

export default function SidbarApp() {
  return (

    <>
   <div className="col-md-2 admin-sidebar">
  <ul className="admin-sidebar-navlink">
    <li>
      <a href="#">
         Manage Customer <span className="bi bi-person-add fs-5" />
      </a>
    </li>
    <li>
      <a href="#">
         Add Category <span className="bi bi-cart fs-5" />
      </a>
    </li>
    <li>
      <a href="#">
      Add Products   <span className="bi bi-cart fs-5" /> 
      </a>
    </li>

    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        Add Blogs  <span className="bi bi-chat fs-5" />
      </a>
      <ul className="dropdown-menu text-black">
        <li>
          <a href="/admin-login/add-blogs">Add Blogs</a>
        </li>
        <li>
          <a href="/admin-login/manage-blogs">Manage Blogs</a>
        </li>
      </ul>
    </li>
   

    
    <li>
      <a href="#">
        Manage Order{" "}
        <span className="bi bi-truck fs-5">
          {" "}
          <span className="badge badge-sm bg-danger">0</span>{" "}
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        Manage Contact{" "}
        <span className="bi bi-telephone fs-5">
          {" "}
          <span className="badge badge-sm bg-danger">0</span>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        Manage Reviews{" "}
        <span className="bi bi-star-fill fs-5">
          {" "}
          <span className="badge badge-sm bg-danger">0</span>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        Manage Bill{" "}
        <span className="bi bi-printer fs-5">
          {" "}
          <span className="badge badge-sm bg-danger">0</span>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        Logout here <span className="bi bi-power text-white" />
      </a>
    </li>
  </ul>
</div>

 </>   
  )
}