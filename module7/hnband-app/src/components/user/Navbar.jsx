import React from 'react'

export default function Navbar() {
return (
<div className="container-fluid main-container">
{/* container image */}
<div className="container-img">
<img src="image/hero-bg.png.webp" alt="" height="100%" width="100%" />
</div>
{/* header */}
<nav className="nav navbar navbar-expand-md">
<button
type="button"
className="navbar-toggler btn btn-lg bg-white text-dark border border-0"
data-bs-toggle="collapse"
data-bs-target="#esha"
>
<i className="fa-solid fa-bars" />
</button>
<div className="collapse navbar-collapse" id="esha">
<div className="header-container">
<div className="header-logo ms-3">
<a href="index.html" className="site__logo">
<img src="image/logo.png.webp" alt="" />
</a>
</div>
<div className="header-menu">
<ul className="list-menu">
<li className="border border-0">
<a href="/">HOME</a>
</li>
<li>
<a href="/about">ABOUT</a>
</li>
<li>
<a href="/albums">ALBUMS</a>
</li>
<li>
<a href="/tours">TOURS</a>
</li>
<li>
<a href="/blogs">BLOG</a>
</li>
<li>
<a href="/contact">CONTACT</a>
</li>
</ul>
</div>
<div className="header-btn">
<div className="ticket-btn">
<a href="#">
<span>BUY TICKETS</span>
</a>
</div>
{/* <div class="menu-btn">
<a href="#">
<i class="fa-solid fa-bars"></i>
</a>
</div> */}
</div>
</div>
</div>
</nav>
{/* carousal */}
<div className="carousal-container container">
<div
id="carouselExampleSlidesOnly"
className="carousel slide"
data-bs-ride="carousel"
>
<div className="carousel-inner">
<div className="carousel-item active">
<div className="carousal-content">
<span className="vibe text-light fw-bolder">The electro vibe</span>
<h2 className="name text-light fw-bold text-uppercase">
Tailor Lachiri
</h2>
<p className="content text-light w-75">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua
accumsan lacus vel facilisis.{" "}
</p>
<button
type="button"
className="btn ticket_button border border-0 p-3"
>
<a
href="#"
className="site_btn text-light text-decoration-none text-uppercase fw-bolder"
>
Buy tickets
</a>
</button>
</div>
</div>
<div className="carousel-item">
<div className="carousal-content">
<span className="vibe text-light fw-bolder">The electro vibe</span>
<h2 className="name text-light fw-bold text-uppercase">
Tailor Lachiri
</h2>
<p className="content text-light w-75">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua
accumsan lacus vel facilisis.{" "}
</p>
<button
type="button"
className="btn ticket_button border border-0 p-3"
>
<a
href="#"
className="site_btn text-light text-decoration-none text-uppercase fw-bolder"
>
Buy tickets
</a>
</button>
</div>
</div>
<div className="carousel-item">
<div className="carousal-content">
<span className="vibe text-light fw-bolder">The electro vibe</span>
<h2 className="name text-light fw-bold text-uppercase">
Tailor Lachiri
</h2>
<p className="content text-light w-75">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua
accumsan lacus vel facilisis.{" "}
</p>
<button
type="button"
className="btn ticket_button border border-0 p-3"
>
<a
href="#"
className="site_btn text-light text-decoration-none text-uppercase fw-bolder"
>
Buy tickets
</a>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

)
}
