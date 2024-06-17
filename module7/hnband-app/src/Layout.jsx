import React from 'react'
import Navbar from './components/user/Navbar'
import Content from './components/user/Content'
import Footer from './components/user/Footer'
export default function Layout() {
  return (
    <div>
    {/* header */}
    <Navbar />
    {/* navbar */}
    {/* content */}
    <Content />
    {/* footer  */}
    <Footer />
    </div>
  )
}
