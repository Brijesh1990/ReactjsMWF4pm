import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function Products() {
//display data 
const[mydata,setData]=useState([]);
const Navigate=useNavigate();
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:4000/category`).then((response)=>{

setData(response.data);

})
},[mydata])

return (
<div>
<Header />
<div className="container-fluid px-5 my-10">

<h1 className='text-3xl font-bold'>Select to Buy Now Products</h1>
<div className='flex gap-2 mt-5 flex-nowrap md:flex-wrap fruits-category overflow-x-auto mt-5'>
{mydata && mydata.map((items)=>{
return (
<>
<div className="rounded-lg px-4 border-2 hover:shadow-lg hover:border-green-500 bg-green-100 h-48">
<a href="#" className='d-flex justify-center align'>
<img className=" rounded-t-lg" src={items.categoryphoto} alt="product image" />
</a>
<div className="px-5 text-center">
<a href="#">
<h5 className="text-base font-bold tracking-tight text-nowrap text-center hover:text-green-600">{items.categoryname}</h5>
<span className='text-nowrap'>{items.date}</span>
</a>
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