import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import cart from '../assets/images/cart.webp';
import NavbarApp from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2';
export default function Checkout() {

  // display cart
  const[data,setData]=useState([]);
  const Navigate=useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:8000/cart`).then((response)=>{
      setData(response.data);

    })
  })
  return (
   
   <>
  {/* be-pro hero-section start here */}
  {/* be-pro content start here */}
  <NavbarApp />
  <section id="content">
    <div className="container mt-5">
      <div className='row'>
        <div className='col-md-7'>
            <h3>Fill (*) all required customers details</h3>
            <form
            name="frm"
            id="frm"
            encType="multipart/form-data"
            action="register.html"
          >
            <h3 className="ms-2">Sign Up Form</h3>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="fname"
                id="fname"
                data-bvalidator="required,email"
                placeholder="Firstname *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="lname"
                id="lname"
                data-bvalidator="required,email"
                placeholder="Lastname *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>
            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <input
                type="text"
                name="email"
                id="email"
                data-bvalidator="required,email"
                placeholder="Email *"
                className="form-control border border-0 border-bottom border-dark"
              />
            </div>

            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <textarea
                
                name="address"
                id="email"
                data-bvalidator="required,email"
                placeholder="Address *"
                className="form-control border border-0 border-bottom border-dark"
              ></textarea>
            </div>

            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <select
                name="state"
                id="email"
                data-bvalidator="required,email"
                placeholder="Email *"
                className="form-control border border-0 border-bottom border-dark"
              >


<option value="">-select state-</option>

              </select>
            </div>

            <div className="input-group border border-0 w-75 ms-2 mt-3">
              <span className="input-group-text border border-0">
                <i className="bi bi-person-add" />
              </span>
              <select
                name="city"
                id="email"
                data-bvalidator="required,email"
                placeholder="Email *"
                className="form-control border border-0 border-bottom border-dark"
              >


<option value="">-select city-</option>

              </select>
            </div>
          </form>

        </div>
    
      
      <div className='col-md-5'>
      {/* display the carts data */}
     <div className='card shadow'>
      <div className='card-header'>Order Summary</div>
      <div className='card-body'>
        <table className='table table-responsive'>
          <tr>
            <th>photo</th>
            <th>Productname</th>
            <th>Qty</th>
            <th>Subototal</th>
          </tr>
          {data && data.map((items)=>{
            return (
              <>

          <tr>
          <td><img src={items.image} alt='products' style={{width:"80px",height:"80px"}} /></td>
          <td>{items.productname}</td>
          <td>{items.qty}</td>
          <td>{items.offerprice2}</td>
     
          </tr>
              </>
            )
          })}

          <tr>
            <td colSpan="6"><p align='right' className='bg-dark p-1 fs-4 text-white'>Subtotals of Products is Rs.{}</p></td>
          </tr>

          <tr>
            <td colSpan="6">
              <button type='button' className='btn btn-dark text-white bg-dark fs-4 w-100 float-end'>Go For Payments</button>
            </td>
          </tr>
        </table>
      </div>
     </div>
     </div>
     </div> 

</div>
  </section>
  <Footer />

   </>
  )
}
