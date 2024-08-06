import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { Form,InputGroup } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2'
export default function AddProducts() {
 //using useEffect fetch a category inside of subcategory in dropdown http://localhost:8000/addcategory
const[data,setData]=useState([]);
useEffect(()=>{
    axios.get(`http://localhost:8000/addcategory`).then((response)=>{
        setData(response.data);
    })
},[]);   

const[data1,setData1]=useState([]);
useEffect(()=>{
    axios.get(`http://localhost:8000/addsubcategory`).then((response)=>{
        setData1(response.data);
    })
},[]);   
//add category via calling api http://localhost:8000/addproducts
// take a reference using hooks useRef
const categoryname=useRef("");
const subcategoryname=useRef("");
const productname=useRef("");
const image=useRef("");
const oldprice=useRef("");
const offerprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");
const added_date=useRef("");
// create a formHandeler
const AddProductsHandeler=(e)=>{
  e.preventDefault();
  var insert={
    categoryname:categoryname.current.value,
    subcategoryname:subcategoryname.current.value,
    productname:productname.current.value,
    image:image.current.value,
    oldprice:oldprice.current.value,
    offerprice:offerprice.current.value,
    qty:qty.current.value,
    descriptions:descriptions.current.value,
    added_date:added_date.current.value
  }
  // take a api or call a api for insert data
  axios.post(`http://localhost:8000/addproducts`,insert).then(()=>{
    // pass a message
    Swal.fire({
      title: "Wow",
      text: "Thanks for added your Products",
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
    <Form onSubmit={AddProductsHandeler}>
    <InputGroup className='mt-2'>
            <select  ref={categoryname} placeholder='Enter CategoryName *'  className='form-control'>
            <option value="">-select category-</option>
                {data && data.map((item)=>{
                    return(
                        <>
                        <option value={item.categoryname}>{item.categoryname} </option>
                        </>
                    )
                })}
               
            </select>
        </InputGroup>


        <InputGroup className='mt-2'>
            <select  ref={subcategoryname} placeholder='Enter SubCategoryName *'  className='form-control'>
            <option value="">-select subcategory-</option>
                {data1 && data1.map((item)=>{
                    return(
                        <>
                        <option value={item.subcategoryname}>{item.subcategoryname} </option>
                        </>
                    )
                })}
               
            </select>
        </InputGroup>

        <InputGroup className='mt-2'>
            <input type='text' ref={productname} placeholder='Productname *'  className='form-control'/>
        </InputGroup>

        <InputGroup className='mt-2'>
            <input type='text' ref={image} placeholder='Image URL *'  className='form-control'/>
        </InputGroup>

        <InputGroup className='mt-2'>
            <input type='text' ref={oldprice} placeholder='Old Price *'  className='form-control'/>
        </InputGroup>
        <InputGroup className='mt-2'>
            <input type='text' ref={offerprice} placeholder='Offer Price *'  className='form-control'/>
        </InputGroup>

        <InputGroup className='mt-2'>
            <input type='number' ref={qty} value="1" placeholder='Offer Price *'  className='form-control'/>
        </InputGroup>

        <InputGroup className='mt-2'>
            <textarea ref={descriptions} placeholder='Descriptions *'  className='form-control' ></textarea>
        </InputGroup>


        <InputGroup className='mt-2'>
            <input type='date' ref={added_date} placeholder='Addedd Date *'  className='form-control'/>
        </InputGroup>

        
        <InputGroup className='mt-2'>
            <input type='submit' value="AddProducts"  className='btn btn-lg btn-dark text-white'/>
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

