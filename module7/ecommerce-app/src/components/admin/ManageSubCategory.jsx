import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Table} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
export default function ManageSubCategory() {
// fetch a subcategory inside of manage subcategory tables
const[data,setData]=useState([]);
const Navigate=useNavigate();
useEffect(()=>{
    axios.get(`http://localhost:8000/addsubcategory`).then((response)=>{
        setData(response.data);
    });
},[])
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
      <div className="col-md-10 ms-5 p-3 mt-2 shadow">
      <h2 className="ms-1 p-4 mt-3">Manage SubCategory here</h2>
      <hr className="border border-1 border-dark w-50 ms-2" align="left" />
      <Table className='table table-responsive table-stripped table-hover p-4'>
         <tr>
            <th>#id</th>
            <th>CategoryName</th>
            <th>SubCategoryName</th>            
            <th>Added Date</th>
            <th>Action</th>
         </tr>
         {data && data.map((item)=>{

             return (
              <>
              <tr>
            <td>{item.id}</td>
            <td>{item.categoryname}</td>
            <td>{item.subcategoryname}</td>
            <td>{item.added_date}</td>
            <td><button type='button' className='btn btn-sm bg-danger btn-danger' onClick={()=>Navigate(`/admin-login/delete-subcategory/${item.id}`)}><span className='bi bi-trash text-white'></span></button> | <button type='button' className='btn btn-sm bg-primary'><span className='bi bi-pencil text-white'></span></button></td>
            </tr>


              </>
             )

         }) }
       

      </Table>
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

