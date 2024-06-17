import React from 'react'
import page from '../../assets/image/page-top-bg.png.webp'
import logo from '../../assets/image/logo.png.webp'
export default function PageNavbar() {
return (
<div>
<div className="about-main-container main-container">
<div className="about-header-bg-img">
<img src={page} height="100%" width="100%" alt="" />
</div>
<header>
<div className="header-container">
<div className="header-logo ms-3 m-0 p-0">
<a href="index.html" className="site_logo">
<img src={logo} alt="" />
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
<a href="#" className="text-light text-decoration-none fs-6 py-3 ">
<span>BUY TICKETS</span>
</a>
</div>
<div className="menu-btn">
<a href="#" className="text-light text-decoration-none fs-6 py-3 ">
<i className="fa-solid fa-bars" />
</a>
</div>
</div>
</div>
</header>
<div className="about-file-info container d-flex mx-auto">
<div className="page-info-icon text-center rounded-circle text-light me-3">
<i className="fa fa-headphones" />
</div>
<div className="page-info-text">
<h2 className="text-light text-uppercase">Blog</h2>
<nav style={{ color: "white" }} aria-label="breadcrumb">
<ol className="breadcrumb">
<li className="breadcrumb-item">
<a href="index.html" className="text-decoration-none text-light">
Home
</a>
</li>
<li
className="breadcrumb-item active"
aria-current="page"
style={{ color: "#888888" }}
>
Blog
</li>
</ol>
</nav>
</div>
</div>
</div>

</div>
)
}
