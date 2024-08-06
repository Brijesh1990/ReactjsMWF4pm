import React from 'react'
// import { Button,Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import NavbarApp from './components/Navbar'
import Slider from './components/Slider'
import Content from './components/Content'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <div>
    {/* Navbar */}
    <NavbarApp />
    {/* slider components reused */}
    <Slider />
    {/* content components reused */}
    <Content />
    {/* footer components reused */}
    <Footer />
</div>
  )
}
