import React from 'react'
import Header from 'Customer/modules/Header/Header'
import Footer from 'Customer/modules/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Mainlayout() {
  return (
    <div>
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default Mainlayout