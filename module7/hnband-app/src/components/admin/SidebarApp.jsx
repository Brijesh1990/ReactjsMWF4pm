import React from 'react'

export default function SidebarApp() {
  return (

    <>
   <div className="col-md-3 admin-sidebar">
  <ul className="admin-sidebar-navlink">
    <li>
      <a href="#">
         Manage Customer <span className="bi bi-person-add fs-5" />
      </a>
    </li>
    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        AddBandCategory  <span className="bi bi-music-note fs-5" />
      </a>
      <ul className="dropdown-menu text-black">
        <li>
          <a href="/admin-login/add-blogs">Add BandCategory <span className='bi bi-music-note-list'></span></a>
        </li>
        <li>
          <a href="/admin-login/manage-blogs">Manage BandCategory <span className='bi bi-music-note-list'></span></a>
        </li>
      </ul>
    </li>

    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        AddBandSubCategory  <span className="bi bi-music-note fs-5" />
      </a>
      <ul className="dropdown-menu text-black">
        <li>
          <a href="/admin-login/add-blogs">Add BandSubCategory <span className='bi bi-music-note-list'></span></a>
        </li>
        <li>
          <a href="/admin-login/manage-blogs">Manage BandSubCategory <span className='bi bi-music-note-list'></span></a>
        </li>
      </ul>
    </li>

    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
       AddBand <span className="bi bi-music-note fs-5" />
      </a>
      <ul className="dropdown-menu text-black">
        <li>
          <a href="/admin-login/add-blogs">Add Band <span className='bi bi-music-note-list'></span></a>
        </li>
        <li>
          <a href="/admin-login/manage-blogs">Manage Band <span className='bi bi-music-note-list'></span></a>
        </li>
      </ul>
    </li>

    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        Add Blogs  <span className="bi bi-comment fs-5" />
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
