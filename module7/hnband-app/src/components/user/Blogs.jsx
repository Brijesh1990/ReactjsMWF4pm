import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link} from 'react-router-dom'
import PageNavbar from './PageNavbar'
import Footer from './Footer'
export default function Blogs() {
//display data 
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
<PageNavbar />
{/* blogs sections */}
<section className="blog-page m-0 p-0 px-5 py-5" >
<div className="container ms-lg-auto" style={{marginTop:"-60%"}}>
<div className="row">
{/* display all blogs addedd by admin */}
{mydata && mydata.map((row)=>{
    return (
<div className="col-lg-4 col-md-6 my-3">
<div className="blog-item">
<div className="blog-thumb">
<button  onClick={()=>Navigate(`/blogs-details/${row.id}`)}><img src={row.photo} className="img-fluid" alt="" /></button>
<div className="blog-metas d-flex px-3 py-2">
<div className="blog-meta px-3">
by{" "}
<a href="#" className="text-light text-decoration-none ps-1">
Admin
</a>
</div>
<div className="blog-meta px-3">{row.date}</div>
<div className="blog-meta px-3 border border-0">20 Comment</div>
</div>
</div>
<h4>
<a href="#" className="text-light text-decoration-none fs-6 py-3 ">
FC Barcelona Inks a Joint Venture Deal With Sony Music
Entertainment
</a>
</h4>
</div>
</div>

    )
}) }

</div>
</div>

</section>


<Footer />  
</div>
)
}
