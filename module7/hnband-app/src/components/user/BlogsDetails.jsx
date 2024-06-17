import React,{useState,useEffect, useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import PageNavbar from './PageNavbar'
import Footer from './Footer'
export default function BlogsDetails() {
//display data 
const[mydata,setData]=useState([]);
const photo=useRef("");
const photo1=useRef("");
const title=useRef("");
const descriptions=useRef("");
const date=useRef("");
const Navigate=useNavigate();
const {id}=useParams();
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/blogs/${id}`).then((response)=>{
    setData(response.data);
    photo.current.value=response.data.photo;
    photo1.current.src=response.data.photo;
    title.current.value=response.data.title;
    descriptions.current.value=response.data.descriptions;
    date.current.value=response.data.date;
      
})
},[mydata])

return (
<div>
<PageNavbar />
{/* blogs sections */}
{/* display all blogs addedd by admin */}
<div className='row'>
<input type='hidden'  ref={photo}  className="img-fluid" alt=""/>
<img  src={photo1} ref={photo1}  className="img-fluid" alt="not found" style={{width:"100%",height:"400px",color:"white"}} />
<input type='text' ref={title} style={{fontSize:"35px"}} />
<input type='text' ref={descriptions} style={{fontSize:"17px"}} />
<input type='text' ref={date} style={{fontSize:"17px"}} />
<h1></h1>

</div>
<Footer />  
</div>
)
}
