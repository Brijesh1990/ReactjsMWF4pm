import React,{useState,useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import SidbarApp from './SidebarApp'
import Swal from 'sweetalert2'
export default function AddBlogs() {
//add blogs via admin 
const[data,setData]=useState();
const title=useRef("");
const photo=useRef("");
const descriptions=useRef("");
const date=useRef("");
const Navigate=useNavigate();
// add form Handeler events methods 
const AddBlogsFormHandeler=(e)=>{
  e.preventDefault();
  var insert={
    title:title.current.value,
    photo:photo.current.value,
    descriptions:descriptions.current.value,
    date:date.current.value
  }

  // add a post method using axios 
  axios.post(`http://localhost:4000/blogs`,insert).then(()=>{
    // pass a message for added data
    Swal.fire({
      title: "Thanks",
      text: "Thanks your blogs addedd successfully",
      icon: "success"
    });

    Navigate('/admin-login/add-blogs');
  })

   e.target.reset();
}
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
<div className='p-5 w-75'>
<h3>Add Blogs here</h3>
<form onSubmit={AddBlogsFormHandeler}   encType='multipart/form-data'>
<div className='form-group mt-4'>
<input type='text' placeholder='Blog Title' ref={title} className='form-control' />
</div>

<div className='form-group mt-4'>
<input type='text' placeholder='Blog Photo' ref={photo} className='form-control' />
</div>
<div className='form-group mt-4'>
<textarea type='text' placeholder='descriptions' ref={descriptions} className='form-control'></textarea>
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

</div>
</div>
</>
)
}
