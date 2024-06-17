import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
export default function Blog() {
//display blogs 
const[mydata,setData]=useState([]);
const Navigate=useNavigate();
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/blogs`).then((response)=>{
setData(response.data);
})
},[mydata])

return (
<div>
<Header />
<div className="container-fluid px-5 my-10">
<h1 className='text-3xl font-bold p-5'>Our Blogs</h1>

<div className='row'>
{/* applied loop to display blogs */}
{mydata && mydata.map((items)=>{
    return (
        <>
        <div className="col-md-6 ms-0 p-5 mt-2">
         <div className='card'>
            <div className='card-header'>{items.title}</div>
         </div>  
         <div className='card-body'>
         <button  onClick={()=>Navigate(`/blogs-details/${items.id}`)}><img src={items.photo} alt='photo' className='img-fluid' style={{width:"100%",height:"300px"}} /></button>
         </div>
        </div>
        </>
    )
})}
</div>
</div>
<Footer />
</div>


)
}