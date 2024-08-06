import React,{useState,useEffect} from 'react'
import { Button,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function NavbarApp() {

 //destructuring    // 
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/cart`).then((response)=>{
        setData(response.data);
    })
  }) 

return (

<Navbar className="nav navbar navbar-expand-md">
{/* <!-- logo of be-pro --> */}
<Link to="/" className="navbar-brand pro-logo">Be-pro</Link>
{/* <!-- button toggler --> */}
<Button type="button" data-bs-toggle="collapse" data-bs-target="#btn-col" className="navbar-toggler border border-0 btn btn-sm btn-primary bg-primary text-white m-0 p-0">
<span className="bi bi-grid-3x3"></span>
</Button>
<div className="collapse navbar-collapse" id="btn-col">
{/* <!-- main navbar start here --> */}
<ul className="nav-link">
<li className="dropdown"><Link className="dropdown-toggle"  data-bs-toggle="dropdown" href="/">Home</Link>
<ul className="dropdown-menu bg-primary text-white">
<li><Link to="/support">24x7 support</Link></li>
<li><Link to="#" data-bs-toggle="modal" data-bs-target="#support">Customers support</Link></li>
<li><Link to="/privacy">Privacy policy</Link></li>
<li><Link to="/terms">Terms & conditions</Link></li>
</ul>
</li>
<li><Link to="/products">Shop Now</Link></li>
<li><Link to="blogs.html">Blogs</Link></li>
<li><Link to="/contact-us">Contact</Link></li>
<li className="pro-account ms-5"><Link to="#" data-bs-toggle="modal" data-bs-target="#log">Login</Link></li>
<li><Link to="/register">Register</Link></li>


<li><Link to="/view-cart"><span className="bi bi-cart fs-6"><span className="badge badge-sm bg-white text-dark">{data.length}</span></span></Link></li>
<li><Link to="#"><span className="bi bi-search fs-6"></span></Link></li>
</ul>
</div>
</Navbar>

)
}
