import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function Products() {
  // display all products added from admin
  const[data,setData]=useState();
  const Navigate=useNavigate();
  // using useEffects fetch data
  useEffect(()=>{
     
    // fetch api data
    axios.get(`http://localhost:8000/addproducts`).then((response)=>{
      setData(response.data);
    })
    
  },[data]);
  return (
    <>
    <NavbarApp />
    <section id="be-pro-content" className="p-5 mt-3">
    {/* popular products */}
    <div className="container">
      <div className="row justify-content-evenly">

        <div className="col-md-3 bg-dark p-3">
          <p className="text-white text-center">
            <span className="bi bi-fire fs-2" />
          </p>
          <h3 className="text-center text-white">Popular Product</h3>
          <p className="text-white text-center"></p>
          <details>
            <summary className="text-white text-center">More Products</summary>
          </details>
          <p />
        </div>
        <div className="col-md-7 mt-1 bg-primary p-5">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">
                <button
                  type="button"
                  className="b tn btn-sm border border-0 bg-white btn-white"
                >
                  New
                </button>
              </p>
              <h6 className="text-white">Lifestyle</h6>
              <h5 className="text-white">Bew Now : Stripped Cotton</h5>
              <button
                type="button"
                className="btn-group btn btn-sm  bg-white text-dark w-50 border border-0 ms-0"
              >
                $ 50.00 | Buy Now
              </button>
            </div>
            <div className="col-md-6 stripped-cotton"></div>
          </div>
        </div>
        
      </div>
     

      {/* new lifestyle */}
      <div className="row justify-content-evenly mt-5"></div>
      {/* product listing */}
      <div className="row justify-content-evenly mt-3 items">

       {/* display all dynamic products addded from admin   */}
         {data && data.map((row)=>{
        
           return (
            <>
          <div className="col-md-3 bg-white p-3 img-thumbnail ms-0  item">
          <p className="text-white text-center">
            <img src={row.image} className='img-fluid w-75' />
          </p>
          <p className="text-center">{row.productname}</p>
          <p className="text-center">
            <del>Rs.{row.oldprice}-/</del> <span className="text-primary">Rs.{row.offerprice}-/</span>
          </p>

          <button type='button' onClick={()=>{Navigate(`/product-details/${row.id}`)}} className='btn btn-sm btn-dark'>click for details</button>
        </div>
        
        
     
            </>
           )  

         })}
       
       
      
      </div>
    </div>
    <div className="clearfix" />
  </section>
  <Footer />
  </>
  )
}
