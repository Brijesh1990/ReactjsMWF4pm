import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import SidbarApp from './SidebarApp'
export default function ManageBlogs() {
//display data 
const[mydata,setData]=useState([]);
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/blogs`).then((response)=>{

setData(response.data);

})
},[mydata])
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

<th>Title</th>
<th>Photo</th>
<th>Descriptions</th>
<th>Added Date</th>
<th>Action</th>
</tr>

{mydata && mydata.map((items)=>{
return(
<>
<tr>

<td>{items.title}</td>
<td><img src={items.photo} alt="photo" className='img-fluid w-75'   /></td>
<td>{items.descriptions} </td>
<td>{items.date}</td>
<td><div style={{minWidth:"120px"}}><a href='' className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></a>

<a href='' className='btn btn-sm btn-danger bg-primary text-white ms-2'><span className='bi bi-pencil'></span></a>
</div></td>
</tr>
</>
)
})}

</table>





</div>

</div>
</div>    

</div>
</div>
</>
)
}
