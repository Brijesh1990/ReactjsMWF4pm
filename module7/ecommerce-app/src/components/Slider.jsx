import React from 'react'
// import { Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import slider1 from '../assets/images/slider.png'


export default function Slider() {
  return (
  
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> 
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h1>New Arrival</h1>
          <p><button type="button" className="btn btn-lg btn-primary bg-primary text-white border border-0 buy-now">Buy Now</button></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h1>New Arrival</h1>
          <p><button type="button" className="btn btn-lg btn-primary bg-primary text-white border border-0 buy-now">Buy Now</button></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h1>New Arrival</h1>
          <p><button type="button" className="btn btn-lg btn-primary bg-primary text-white border border-0 buy-now">Buy Now</button></p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    
    {/* <!-- free shipping section --> */}
    <div className="card container bg-white w-100 free-shipping">
        <div className="card-body">
            <div className="row">
                <div className="col-md-3 border-right">
                    <span className="bi bi-arrow-bar-up fs-2"></span>
                    <b className="fs-4 ms-3">Free shipping</b>
                    <br />
                    <b className="fs-6 ms-5 text-secondary">Order Over $599</b>
                </div>

                <div className="col-md-3 border-right">
                    <span className="bi bi-arrow-clockwise fs-2"></span>
                    <b className="fs-4 ms-3">30 Days Return</b>
                    <br />
                    <b className="fs-6 ms-5 text-secondary">Order Over $599</b>
                </div>


                <div className="col-md-3 border-right">
                    <span className="bi bi-paypal fs-2"></span>
                    <b className="fs-4 ms-3">Secured Payment</b>
                    <br />
                    <b className="fs-6 ms-5 text-secondary">Order Over $599</b>
                </div>
                <div className="col-md-3 border-right-none">
                    <span className="bi bi-info-lg fs-2"></span>
                    <b className="fs-4 ms-3">24 h support</b>
                    <br />
                    <b className="fs-6 ms-5 text-secondary">Order Over $599</b>
                </div>
               
            </div>
        </div>
    </div>
</div>


  )
}
