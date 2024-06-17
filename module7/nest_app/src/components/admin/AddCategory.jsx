import React, { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import SidebarApp from './SidebarApp';
import AdminHeader from './AdminHeader';


function AddCategory() {
const categoryphoto =useRef("");    
const categoryname =useRef("");
const date =useRef("");

const AddFormHandeler=((e)=>{
e.preventDefault();

var insert={
categoryphoto:categoryphoto.current.value,
categoryname:categoryname.current.value,
date:date.current.value
}

axios.post(`http://localhost:4000/category`,insert).then(()=>{
Swal.fire({
title: "Thanks",
text: "Thanks your blogs addedd successfully",
icon: "success"
});

});
e.target.reset

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
<form onSubmit={AddFormHandeler}   encType='multipart/form-data'>


<div className='form-group mt-4'>
<input type='text' placeholder='Photo' ref={categoryphoto} className='form-control' />
</div>

<div className='form-group mt-4'>
<input type='text' placeholder='Categoryname' ref={categoryname} className='form-control' />
</div>


<div className='form-group mt-4'>
<input type='date' placeholder='Addded date' ref={date} className='form-control' />
</div>

<div className='form-group mt-4'>
<input type='submit' value="Added Category"  className='btn btn-md btn-dark text-white bg-dark' />
</div>
</form>
</div>
</div>
</div>
</>

)
}

export default AddCategory
