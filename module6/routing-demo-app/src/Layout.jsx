import React from 'react'
import HeaderApp from './components/customers/HeaderApp'
import NavbarApp from './components/customers/NavbarApp'
import SliderApp from './components/customers/SliderApp'
import ContentApp from './components/customers/ContentApp'
import FooterApp from './components/customers/FooterApp'
import LoginApp from './components/customers/LoginApp'
export default function Layout() {
  return (
   <>
      <HeaderApp />
      <NavbarApp />
      <SliderApp />
      <ContentApp />
      <FooterApp />
      <LoginApp />

   </>
  )
}
