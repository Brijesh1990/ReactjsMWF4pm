import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
export default function BlogDetails() {
//display blogs details
//display data 
const[mydata,setData]=useState([]);
const photo=useRef("");
const photo1=useRef("");
const title=useRef("");
const descriptions=useRef("");
const date=useRef("");
const {id}=useParams();
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/blogs/${id}`).then((response)=>{
photo.current.value=response.data.photo;
photo1.current.src=response.data.photo;
title.current.value=response.data.title;
descriptions.current.value=response.data.descriptions;
date.current.value=response.data.date;

})
},[])

return (
<div>
<Header />
<div className="container-fluid px-5 my-10">
<h1 className='text-3xl font-bold p-5'>Blogs details</h1>
<div className='row'>
<div className="col-md-6 ms-0 p-5 mt-2 shadow">
<input type='hidden'  ref={photo}  className="img-fluid" alt=""/>
<img  src={photo1} ref={photo1}  className="img-fluid" alt="not found" style={{width:"100%",height:"400px",color:"white"}} />
</div>
<div className='col-md-6'>
<p className='text-3xl ms-5'><input type='text' ref={title} style={{border:"none",color:"black",width:"100%"}} readOnly /></p>

<p className='text-2xl ms-5'><input type='text' ref={descriptions} style={{fontSize:"17px",width:"100%"}} /></p>
<p className='text-2xl ms-5'><input type='text' ref={date} style={{fontSize:"17px",width:"100%"}} /></p>
</div>
</div>
</div>
<Footer />
</div>

)
}