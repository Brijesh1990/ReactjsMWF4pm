import React from 'react'

export default function Footer() {
return (
<div>
<footer className="footer container-fluid">
<div className="container-fluid  footer-content">
<div className="container mx-auto">
<div className="footer-top">
<div className="row">
<div className="col-lg-8 footer-part-1">
<div className="footer-form">
<div className="footer-title mx-3 my-5">
<div className="footerTitle fw-bold px-3">Contact us</div>
<h2 className="text-uppercase text-light px-3">
Got a Question?
</h2>
</div>
<form className=" my-5">
<div className="row">
<div className="col-lg-6 my-2">
<input
type="text"
placeholder="Name"
className="w-75 text-light m-auto mx-3 bg-transparent p-3 form-input"
/>
</div>
<div className="col-lg-6 my-2">
<input
type="text"
placeholder="E-mail"
className="w-75 text-light m-auto mx-3 bg-transparent p-3 form-mail"
/>
</div>
<div className="col-lg-12 my-2">
<textarea
placeholder="Message"
className=" my-auto text-light mx-3 bg-transparent p-3 form-msg d-block w-75"
defaultValue={""}
/>
<button className="mx-5 my-3 p-2 border-0 text-light form-button my-2">
Send Email
</button>
</div>
</div>
</form>
</div>
</div>
<div className="col-lg-4 p-0 footer-part-2">
<img
src="image/footer-img.jpg.webp"
alt=""
height="100%"
width="100%"
/>
</div>
</div>
</div>
<div className="row my-5 footerContent pb-3">
<div className="col-lg-4 col-md-5 mx-md-auto footer-content-1 location-icon">
<div className="info-box d-flex my-2">
<div className="info-icon text-center m-1 me-2">
<i className="fa-solid fa-location-dot" />
</div>
<p className="text-light">
333 Middle Winchendon Rd, <br /> Rindge, NH 03461{" "}
</p>
</div>
</div>
<div className="col-lg-4 col-md-5 mx-md-auto footer-content-2  location-icon">
<div className="info-box d-flex my-2">
<div className="info-icon text-center m-1 me-2">
<i className="fa-solid fa-location-dot" />
</div>
<p className="text-light">
125-711-811 | 125-668-886 <br /> Support.music@gmail.com
</p>
</div>
</div>
<div className="col-lg-3 col-md-5 mx-md-auto footer-content-3">
<div className="footer-social px-1 py-3 d-flex justify-content-center mt-3">
<a href="#" className="text-light">
<i className="fab fa-facebook me-3" />
</a>
<a href="#" className="text-light">
<i className="fab fa-twitter me-3" />
</a>
<a href="#" className="text-light">
<i className="fab fa-youtube me-3" />
</a>
<a href="#" className="text-light">
<i className="fab fa-instagram me-3" />
</a>
</div>
</div>
</div>
<div className="footer-copyright-text p-2">
<p className="text-center text-light p-2">
Copyright © All rights reserved | This template is made with 💜 by{" "}
<a
href="https://colorlib.com"
className="text-decoration-none text-light"
target="-blank"
>
developer
</a>
</p>
</div>
</div>
</div>
</footer>

</div>
)
}
