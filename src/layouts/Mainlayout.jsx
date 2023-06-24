import React from 'react'
// import Header from './../Home/Header/Header'
// import Footer from './..//Home/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Mainlayout() {
  return (
    <div>
        {/* <Header/> */}

        <Outlet/>

        {/* <Footer/> */}
    </div>
  )
}

export default Mainlayout