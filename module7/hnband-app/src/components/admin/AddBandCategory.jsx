import React, { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import SidebarApp from './SidebarApp';
import AdminHeader from './AdminHeader';


function AddBandCategory() {
const bandcatagory =useRef("");
const date =useRef("");

const AddBlogsFormHandeler=((e)=>{
e.preventDefault();

var insert={
bandcatagory:bandcatagory.current.value,
date:date.current.value
}

axios.post(`http://localhost:4000/band-category`,insert).then(()=>{
Swal.fire({
title: "Thanks",
text: "Thanks your blogs addedd successfully",
icon: "success"
});
});

})


return (
<>

<AdminHeader />
{/* <!-- admin main content panel --> */}
<div className="container-fluid admin-content"> 
{/* <!-- admin sidebar panel --> */}
<div className="row">
<SidebarApp />
<div className='col-md-8'>
<form onSubmit={AddBlogsFormHandeler}   encType='multipart/form-data'>


<div className='form-group mt-4'>
<input type='text' placeholder='Blog Photo' ref={bandcatagory} className='form-control' />
</div>


<div className='form-group mt-4'>
<input type='date' placeholder='Addded date' ref={date} className='form-control' />
</div>

<div className='form-group mt-4'>
<input type='submit' value="Added Blogs"  className='btn btn-md btn-dark text-white bg-dark' />
</div>
</form>
</div>
</div>
</div>
</>

)
}

export default AddBandCategory
