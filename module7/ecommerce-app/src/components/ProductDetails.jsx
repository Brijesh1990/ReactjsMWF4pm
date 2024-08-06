import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams,Link} from 'react-router-dom'
import NavbarApp from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2'
export default function ProductDetails() {
// display all products added from admin
const[data,setData]=useState();
const Navigate=useNavigate();
const {id}=useParams();

// stored all data in variables
const images=useRef("");
const image=useRef("");
const productname=useRef("");
const oldprice=useRef("");
const qty=useRef("");
const offerprice1=useRef("");
const offerprice2=useRef("");
const descriptions=useRef("");

// add in cart 
const AddFormHandeler=(e)=>{
    e.preventDefault();
    var insert={
        image:image.current.value,
        productname:productname.current.value,
        oldprice:oldprice.current.value,
        offerprice1:offerprice1.current.value,
        offerprice2:offerprice2.current.value,
        qty:qty.current.value,
        descriptions:descriptions.current.value
    }
    // stored using axios.post
    axios.post(`http://localhost:8000/cart`,insert).then(()=>{
        // pass a message
        Swal.fire({
            title: "Wow",
            text: "Thanks your products added in cart",
            icon: "success"
          });
    })
}

// using useEffects fetch data
useEffect(()=>{
// fetch api data
axios.get(`http://localhost:8000/addproducts/${id}`).then((response)=>{
    images.current.src=response.data.image;
    image.current.value=response.data.image;
    descriptions.current.value=response.data.descriptions,
    productname.current.value=response.data.productname;
    oldprice.current.value=response.data.oldprice;
    offerprice1.current.value=response.data.offerprice;
    offerprice2.current.value=response.data.offerprice;
    qty.current.value=response.data.qty
  

})

},[]);
return (
<>
<NavbarApp />
<section id="be-pro-content" className="p-5 mt-3">
{/* popular products */}
<div className="container">

{/* new lifestyle */}
{/* product listing */}
<div className="row justify-content-evenly mt-3 items">
{/* display all dynamic products addded from admin   */}

<div className="col-md-4 bg-white p-3  ms-0  item">
<p className="text-white">
{/* <img src={image} ref={image} alt='hi i am brijesh' title='hi brijesh'  className='img-fluid w-75' /> */}

<img src={images} ref={images}  style={{width:"100%"}} />
</p>
</div>


<div className="col-md-7 bg-white p-3  ms-0  item">
<form onSubmit={AddFormHandeler}>
<input type='hidden' ref={image} />
<p className="text-start fs-4"><input type='text' ref={productname} readOnly style={{border:"none"}} /></p>
<p className="text-start fs-5">
<del>Rs.<input type='text'  ref={oldprice} readOnly style={{border:"none",width:"50px"}} />-/</del> <span className="text-primary">Rs.<input type='text'  ref={offerprice1} readOnly style={{border:"none",width:"50px"}} />-/</span>
</p>
<p className="text-start fs-5"><input type='number' min="1" max="10"  value="1" ref={qty} className='form-control w-50' /></p>

<p className="text-start fs-2 text-success">Subtotals of Products : <input type='text' ref={offerprice2}  readOnly style={{border:"none",width:"100px"}} /></p>


<p className="text-start fs-5 text-dark">
<b>Products Details</b>
<hr />
<br />
<textarea  style={{border:"none",width:"100%",height:"auto"}} ref={descriptions} readOnly></textarea>

</p>

<p className="text-start fs-5">
<Link to='/products'><button type='button' className='btn btn-sm btn-success text-start'>ContinueShopping</button></Link>

<button type='submit' className='btn btn-sm btn-danger text-start ms-4'>AddToCart</button>
</p>
</form>
</div>

</div>

</div>
<div className="clearfix" />
</section>
<Footer />
</>
)
}
