import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { Form,FormGroup } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2'
export default function EditCategory() {
//edit category via calling api http://localhost:8000/addcategory
// take a reference using hooks useRef
const[data,setData]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
const categoryname=useRef("");
const added_date=useRef("");

// create a useEffect to fetch edited data
useEffect(()=>{
axios.get(`http://localhost:8000/addcategory/${id}`).then((response)=>{
    setData(response.data);
    categoryname.current.value=response.data.categoryname;
    added_date.current.value=response.data.added_date;
})
},[]);

// update category from http://localhost:8000/addcategory

const UpdFormHandeler=()=>{
 var updcat={
    categoryname:categoryname.current.value,
    added_date:added_date.current.value
 }

 axios.put(`http://localhost:8000/addcategory/${id}`,updcat).then(()=>{
    // pass messages of update api
    Swal.fire({
        title: "Wow",
        text: "Thanks for Updated your category",
        icon: "success"
      });

      Navigate('/admin-login/manage-category');
 })
}


  return (
    <>
    <AdminHeader />
    <section id="dashboard-content" >
        <div className="container-fluid m-0 p-0">
        <div className="row">
        <AdminSidebar />
  {/* admin dashboard content */}

  <div className="admin-dashboard col-md-9 p-3">
    <h2 className="ms-3 p-4 mt-3">Welcome to Admin dashboard</h2>
    <hr className="border border-1 border-dark w-50 ms-5" align="left" />
    <div className="row">
    <div className="col-md-8 ms-5 p-3 mt-2 shadow">
    <h2 className="ms-0 p-4 mt-1">Edit Category here</h2>
    <hr className="border border-1 border-dark w-50 ms-0" align="left" />
    <Form>
        <FormGroup className='mt-2'>
            <label className='text-success'>Edit CategoryName *</label>
            <input type='text' ref={categoryname} placeholder='Enter CategoryName *'  className='form-control'/>
        </FormGroup>
        
        <FormGroup className='mt-2'>
        
        <label className='text-success'>Edit Added Date *</label>
            <input type='date' ref={added_date} placeholder='Addedd Date *'  className='form-control'/>
        </FormGroup>

        
        <FormGroup className='mt-2'>
            <button type='button'  className='btn btn-lg btn-dark text-white' onClick={UpdFormHandeler}>Update Category</button>
        </FormGroup>
    </Form>
    
    </div>
    </div>
  </div>

  

  </div>
  </div>
  </section>
  <AdminFooter />
</>

  )
}

