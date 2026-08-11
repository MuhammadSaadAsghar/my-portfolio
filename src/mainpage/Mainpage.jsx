import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'


const Mainpage = () => {
  return (
   <div className="min-h-screen flex flex-col">
  <Navbar />
  <div className="grow">
    <Outlet />
  </div>
  <Footer />
</div>
  )
}

export default Mainpage