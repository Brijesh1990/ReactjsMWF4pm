import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import { Form,InputGroup } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2'
export default function AddCategory() {
//add category via calling api http://localhost:8000/addcategory
// take a reference using hooks useRef
const categoryname=useRef("");
const added_date=useRef("");
// create a formHandeler
const AddCategoryHandeler=(e)=>{
  e.preventDefault();
  var insert={
    categoryname:categoryname.current.value,
    added_date:added_date.current.value
  }
  // take a api or call a api for insert data
  axios.post(`http://localhost:8000/addcategory`,insert).then(()=>{
    // pass a message
    Swal.fire({
      title: "Woe",
      text: "Thanks for added your category",
      icon: "success"
    });
  });
  e.target.reset();
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
    <h2 className="ms-3 p-4 mt-3">Add Category here</h2>
    <hr className="border border-1 border-dark w-50 ms-5" align="left" />
    <Form onSubmit={AddCategoryHandeler}>
        <InputGroup className='mt-2'>
            <input type='text' ref={categoryname} placeholder='Enter CategoryName *'  className='form-control'/>
        </InputGroup>
        
        <InputGroup className='mt-2'>
            <input type='date' ref={added_date} placeholder='Addedd Date *'  className='form-control'/>
        </InputGroup>

        
        <InputGroup className='mt-2'>
            <input type='submit' value="AddCategory"  className='btn btn-lg btn-dark text-white'/>
        </InputGroup>
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

