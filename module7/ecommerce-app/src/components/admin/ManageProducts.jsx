import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { Table} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
export default function ManageProducts() {
// fetch a category inside of manage category tables
const[data,setData]=useState([]);
const Navigate=useNavigate();


useEffect(()=>{
    axios.get(`http://localhost:8000/addproducts`).then((response)=>{
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
      <h2 className="ms-1 p-4 mt-3">Manage Products here</h2>
      <hr className="border border-1 border-dark w-50 ms-2" align="left" />
      <Table className='table table-responsive table-stripped table-hover p-4 table-bordered'>
         <tr>
          
            <th>Category</th>
            <th>SubCategory</th>
            <th>ProductName</th>
            <th>Image</th>
            <th>OldPrice</th>
            <th>NewPrice</th>
            <th>qty</th>
            <th>descriptions</th>
            <th>Added Date</th>
            <th>Action</th>
         </tr>
         {data && data.map((item)=>{

             return (
              <>
              <tr>
            <td>{item.categoryname}</td>
            <td>{item.subcategoryname}</td>
            <td>{item.productname}</td>
            <td><img src={item.image} alt='products' className='img-fluid w-100' /></td>
            <td>{item.oldprice}</td>
            <td>{item.offerprice}</td>
            <td>{item.qty}</td>
            <td>{item.descriptions}</td>
            <td>{item.added_date}</td>
            <td><div style={{minWidth:"120px"}}><button type='button' className='btn btn-sm bg-danger btn-danger' onClick={()=>Navigate(`/admin-login/delete-category/${item.id}`)}><span className='bi bi-trash text-white'></span></button> | 
            
            <button type='button' className='btn btn-sm bg-primary' onClick={()=>Navigate(`/admin-login/edit-products/${item.id}`)}><span className='bi bi-pencil text-white'></span></button></div></td>
            
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

