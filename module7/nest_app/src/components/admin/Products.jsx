import React, {useState,useEffect, useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import SidebarApp from './SidebarApp';
import AdminHeader from './AdminHeader';
import Products from '../customer/Products';


function AddProducts() {
// fetch category inside of sub category
const[mydata,setData]=useState([]);
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/products`).then((response)=>{

setData(response.data);

})
},[mydata])


// fetch subcategory inside of sub category
const[mydata1,setData1]=useState([]);
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/subcategory`).then((response)=>{

setData(response.data);

})
},[mydata])

// stored products in products api
const categoryname =useRef("");    
const subcategoryname =useRef("");
const date =useRef("");

const AddFormHandeler=((e)=>{
e.preventDefault();

var insert={
categoryname:categoryname.current.value,
subcategoryname:subcategoryname.current.value,
date:date.current.value
}

axios.post(`http://localhost:4000/subcategory`,insert).then(()=>{
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
<div className='col-md-8 p-5'>
<h3 className='fs-2 mt-5'>Add Products here</h3>
<form onSubmit={AddFormHandeler}   encType='multipart/form-data'>

<div className='form-group mt-4'>
<select   ref={categoryname} className='form-control' >
<option>-select category-</option>
{mydata && mydata.map((items)=>{
  return (
    <>
    <option value={items.categoryname}>{items.categoryname}</option>
    </>
  )
})}
</select>
</div>


<div className='form-group mt-4'>
<select   ref={subcategoryname} className='form-control' >
<option>-select category-</option>
{mydata1 && mydata1.map((items1)=>{
  return (
    <>
    <option value={items1.subcategoryname}>{items1.subcategoryname}</option>
    </>
  )
})}
</select>
</div>


<div className='form-group mt-4'>
<input type='text' placeholder='Product name' ref={productname} className='form-control' />
</div>


<div className='form-group mt-4'>
<input type='text' placeholder='Product name' ref={photo} className='form-control' />
</div>


<div className='form-group mt-4'>
<input type='number' placeholder='Product name' ref={qty} className='form-control' />
</div>



<div className='form-group mt-4'>
<input type='number' placeholder='Product Old Price' ref={oldprice} className='form-control' />
</div>


<div className='form-group mt-4'>
<input type='number' placeholder='Product Old Price' ref={newprice} className='form-control' />
</div>


<div className='form-group mt-4'>
<textarea id="txtDescription" placeholder='Product Descriptions' ref={descriptions} className='form-control'></textarea>
</div>


<div className='form-group mt-4'>
<input type='date' placeholder='Addded date' ref={date} className='form-control' />
</div>

<div className='form-group mt-4'>
<input type='submit' value="Added Products"  className='btn btn-md btn-dark text-white bg-dark' />
</div>
</form>
</div>
</div>
</div>
</>

)
}

export default AddProducts
