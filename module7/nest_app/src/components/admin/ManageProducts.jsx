import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import SidbarApp from './SidebarApp'
export default function ManageProducts() {
//display data 
const[mydata,setData]=useState([]);
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/products`).then((response)=>{

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

<div className="col-md-8 ms-5 p-2 mt-2 shadow">
<div className="row">
<div className='p-5 w-100'>
<h3 className='fs-2'>Manage All Products here</h3>

<table className='table table-bordered p-3'>
<tr align='center'>

<th>Name</th>
<th>Photo</th>
<th>OldPrice</th>
<th>NewPrice</th>
<th>Qty</th>
<th>Descriptions</th>
<th>Date</th>
<th>Action</th>
</tr>

{mydata && mydata.map((items)=>{
return(
<>
<tr>

<td>{items.productname}</td>
<td><img src={items.photo} alt="photo" className='img-fluid w-75'   /></td>
<td>{items.oldprice} </td>
<td>{items.newprice} </td>
<td>{items.qty} </td>
<td><div style={{width:"80%", height:"85px",overflow:"auto"}}>{items.descriptions} </div></td>
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
