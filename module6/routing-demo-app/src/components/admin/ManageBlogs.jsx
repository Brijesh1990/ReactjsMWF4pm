import React from 'react'
import AdminHeader from './AdminHeader'
import SidbarApp from './SidbarApp'
export default function ManageBlogs() {
return (
<>
<AdminHeader />
{/* <!-- admin main content panel --> */}
<div className="container-fluid admin-content"> 
{/* <!-- admin sidebar panel --> */}
<div className="row">
<SidbarApp />

<div className="col-md-8 ms-5 p-2 mt-5 shadow">
<div className="row">
<div className='p-5 w-100'>
<h3>Manage All Blogs here</h3>

<table className='table table-responsive table-bordered w-100'>
    <tr>
        <th>#</th>
        <th>Title</th>
        <th>Photo</th>
        <th>Descriptions</th>
        <th>Added Date</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Narendra modi is doing 400 cross in this election ?</td>
        <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png' className='img-fluid w-25' alt='bjp' /></td>
        <td>Narendra modi is doing 400 cross in this election </td>
        <td>06/05/2024</td>
        <td><a href='' className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></a></td>
    </tr>
</table>





</div>

</div>
</div>    

</div>
</div>
</>
)
}
