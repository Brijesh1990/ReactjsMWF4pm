import Header from "./components/customer/Header"
import Slider from "./components/customer/Slider"
import Content from "./components/customer/Content"
import Footer from "./components/customer/Footer"
import './index.css'
import './App.css'

export default function Layout() {
  return (
    <>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </>
  )
}
