import React from 'react'
import slide1 from '../../assets/customers/images/slider.png'
import slide12 from '../../assets/customers/images/slider1.png'
export default function SliderApp() {
  return (
    <>
  {/* fashion slider start here */}
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item  active">
        <img src={slide1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
          <p>Some representative placeholder</p>
          <h5>Fashion Lorem</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
          <p>Some representative placeholder</p>
          <h5>Fashion Lorem</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide12} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
          <p>Some representative placeholder</p>
          <h5>Fashion Lorem</h5>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</>

  )
}
